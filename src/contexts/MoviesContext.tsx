import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import axios from "axios";

// Define the interface for each movie or show
interface DataInterface {
    id: number;
    name: string;
    image: string;
    description: string;
    original_title:string;
    poster_path:string;
    title:string;
}

// Context data type
interface MovieContextType {
    data: DataInterface[];
    setTab: (tab: string) => void;
    tab: string;
    setData: (data: DataInterface[]) => void;
    getMovies: () => void;
    getShows: () => void;
    searchMovies:(keywordSearch: string)=>void;
    keywordSearch:string;
}

const MovieContext = createContext<MovieContextType>({
    data: [],
    tab: '',
    keywordSearch:'',
    setTab: () => {},
    setData: () => {},
    getMovies: () => {},
    getShows: () => {},
    searchMovies:()=>{},

});

// Creating context provider
export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataInterface[]>([]);
    const [tab, setTab] = useState<string>('shows');
    const [keywordSearch,setKeywordSearch] = useState('godfather')
    // Loading content condition
    useEffect(() => {
        console.log('tab', tab)
        if (tab === 'movies') {
            getMovies();
            console.log(data)
        } else {
            getShows();
        }
    }, [tab]);
    console.log(data,'moviess')

    // Function for getting top rated movies
    const getMovies = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/top_rated',
                params: { language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
                }
            };

            const response = await axios.request(options);
            setData(response.data?.results.slice(0, 10));
        } catch (error) {
            console.error(error);
        }
    };

    // Function for getting top rated tv shows
    const getShows = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/tv/top_rated',
                params: { language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
                }
            };

            const response = await axios.request(options);
            setData(response.data?.results.slice(0, 10));
        } catch (error) {
            console.error(error);
        }
    };


    //search logic
    const searchMovies = async (keywordSearch:string)=>{

        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {page: '1' ,
            query: keywordSearch,
            },
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              setData(response.data?.results)
              console.log(response.data?.results);
            })
            .catch(function (error) {
              console.error(error);
            });
    }
    

    // Destructure context value
    const contextValue: MovieContextType = {
        data,
        tab,
        setTab,
        setData,
        getMovies,
        getShows,
        searchMovies,
        keywordSearch,
    };

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    );
};

// Custom hook to use the context
export const useMovieContext = () => {
    return useContext(MovieContext);
};
import React, { createContext, useState, useContext,ReactNode, useEffect } from "react";
import axios from "axios";
//context data type
interface MovieContextType {
  data: string;
  updateData: (newData: string) => void;
  setTab:(tab:string)=>void;
  tab:string;
  setData:(data:string) => void;
  getMovies:() => void;
}

const MovieContext = createContext<MovieContextType>({
  data: "",
  tab:'',
  updateData: () => {},
  setTab:() => {},
  setData:() => {},
  getMovies:()=>{},
});


//creating context provider 
export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<string>('Initial Data');
    const [tab,setTab] = useState<string>('shows');
    const updateData = (newData: string) => {
      setData(newData);
    };


    //loading content condition
    useEffect(()=>{
        if(tab==='movies'){
            getMovies()
            console.log(data, 'movies')
        }
         //initial content load 
        else{
            getShows()
            console.log(data,'shows')
        }
    },[tab])




    //function for getting top rated movies
    const getMovies = async () =>{
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            params: {language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.TMDB_TOKEN}`
            }
          };
          
          axios
            .request(options)
            .then((response)=> {
                setData(response.data?.results.slice(0,10))
            })
            .catch(function (error) {
              console.error(error);
            });
    }


    //function for getting top rated tv shows
    const getShows = async ()=>{
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/top_rated',
            params: {language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.TMDB_TOKEN}`
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              //setting data to the top 10 rated
              setData(response.data?.results.slice(0,10))
            })
            .catch(function (error) {
              console.error(error);
            });
    }


    // destructure context value     
    const contextValue = {
         data, 
         tab,
         updateData,
         setTab,
         setData,
         getMovies,
    }
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
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { DataInterface, MovieContextType } from "../types/DataInterface";

const MovieContext = createContext<MovieContextType>({
  data: [],
  tab: "",
  keywordSearch: "",
  details: {},
  type: "",
  setTab: () => {},
  setData: () => {},
  getMovies: () => {},
  getShows: () => {},
  searchMovies: () => {},
  searchShows: () => {},
  setKeywordSearch: () => {},
  setDetails: () => {},
  setType: () => {},
});

// Creating context provider
export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataInterface[]>([]);
  const [tab, setTab] = useState<string>("shows");
  const [keywordSearch, setKeywordSearch] = useState<string>("");
  const [details, setDetails] = useState({});
  const [type, setType] = useState<string>("");

  // Loading content condition
  useEffect(() => {
    if (tab === "movies") {
      keywordSearch.length ? searchMovies(keywordSearch) : getMovies();
      setType("movie");
    } else {
      keywordSearch.length ? searchShows(keywordSearch) : getShows();
      setType("tv");
    }
  }, []);

  // Function for getting top rated movies
  const getMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        },
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
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        },
      };

      const response = await axios.request(options);
      setData(response.data?.results.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  //Function for searching movies
  const searchMovies = async (keywordSearch: string) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: { page: "1", query: keywordSearch },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Function for searching shows
  const searchShows = (keywordSearch: string) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/tv",
      params: {
        include_adult: "false",
        language: "en-US",
        page: "1",
        query: keywordSearch,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        //   console.log(response.data);
        setData(response.data?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    searchShows,
    setKeywordSearch,
    details,
    setDetails,
    type,
    setType,
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

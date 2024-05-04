import React, { createContext, useState, useContext,ReactNode, useEffect } from "react";

//context data type
interface MovieContextType {
  data: string;
  updateData: (newData: string) => void;
  setTab:(tab:string)=>void;
  tab:string;
}

const MovieContext = createContext<MovieContextType>({
  data: "",
  tab:'',
  updateData: () => {},
  setTab:() => {},
});


//creating context provider 
export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<string>('Initial Data');
    const [tab,setTab] = useState<string>('shows');
    const updateData = (newData: string) => {
      setData(newData);
    };


    //initial content load 
    useEffect(()=>{
        console.log(tab, 'tab')
    },[tab])

    // destructure context value     
    const contextValue = {
         data, 
         tab,
         updateData,
         setTab,
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
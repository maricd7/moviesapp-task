import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import {Icon} from '@iconify/react'
import { useMovieContext } from '../../contexts/MoviesContext'


function Search() {
  const {searchMovies,searchShows,getMovies,getShows,tab, setKeywordSearch,keywordSearch} = useMovieContext()
  const [inputValue,setInputValue] = useState(keywordSearch || '')
  
  const searchRef = React.useRef<HTMLInputElement>(null)

  //handle search function
  function handleSearch(){
    if(inputValue  && inputValue?.length >= 3){
      tab ==='movies' ? searchMovies(inputValue) : searchShows(inputValue)
    }
  }
  useEffect(() => {
    if (keywordSearch.length && searchRef.current) { 
      console.log(inputValue);
      searchRef.current.value = keywordSearch;
    }
  }, [keywordSearch, searchRef]);


   useEffect(() => {
      if(inputValue.length >= 3){
        setKeywordSearch(inputValue)
        const timer = setTimeout(()=>{
          // console.log('search started after 1 second')
          handleSearch()
        },1000)
        
      //clear the timer
      return () => clearTimeout(timer);
      }
      //load top rated on mount if there is no input
      else{
        tab === 'shows' ? getShows() :getMovies()
      }

  }, [inputValue,tab])
  return (
    <div className={styles.inputContainer}>
      <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#fff'}} />
      <input onChange={(e)=>setInputValue(e.target.value)} className={styles.inputField} placeholder='Search For Movies,TV Shows' ref={searchRef}/>
    </div>
  )
}

export default Search
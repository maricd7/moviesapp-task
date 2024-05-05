import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.css'
import {Icon} from '@iconify/react'
import { useMovieContext } from '../../contexts/MoviesContext'


function Search() {
  const {searchMovies,searchShows,getMovies,getShows,tab,setData, setKeywordSearch} = useMovieContext()
  const [delaySearch, setDelaySearch] = useState();
  const [inputValue,setInputValue] = useState('')
  
  
  
  //handle search function
  function handleSearch(){
    if(inputValue  && inputValue?.length >= 3){
      setData([])
      tab ==='movies' ? searchMovies(inputValue) : searchShows(inputValue)
    }else{
       tab === 'shows' ? getShows() :getMovies()
    }
  }
   useEffect(() => {
      if(inputValue.length){
        setKeywordSearch(inputValue)
        const timer = setTimeout(()=>{
          // console.log('search started after 1 second')
          handleSearch()
        },1000)
        
      //clear the timer
      return () => clearTimeout(timer);
      }

  }, [inputValue,tab])
  return (
    <div className={styles.inputContainer}>
      <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#fff'}} />
      <input onChange={(e)=>setInputValue(e.target.value)} className={styles.inputField} placeholder='Search For Movies'/>
    </div>
  )
}

export default Search
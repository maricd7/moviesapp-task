import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.css'
import {Icon} from '@iconify/react'
import { useMovieContext } from '../../contexts/MoviesContext'


function Search() {
  const {searchMovies,getMovies,getShows,tab} = useMovieContext()
  const [delaySearch, setDelaySearch] = useState();
  const [inputValue,setInputValue] = useState('')
  
  
  
  //handle search function
  function handleSearch(){
    if(inputValue  && inputValue?.length >= 3){
      searchMovies(inputValue)
    }else{
       tab === 'shows' ? getShows() :getMovies()
    }
  }
  
   useEffect(() => {
      if(inputValue.length){
        const timer = setTimeout(()=>{
          console.log('search started after 1 second')
          handleSearch()
        },1000)
        
      //clear the timer
      return () => clearTimeout(timer);
      }

  }, [inputValue])
  return (
    <div className={styles.inputContainer}>
      <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#fff'}} />
      <input onChange={(e)=>setInputValue(e.target.value)} className={styles.inputField} placeholder='Search For Movies'/>
    </div>
  )
}

export default Search
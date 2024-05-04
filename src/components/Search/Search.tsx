import React, { useRef } from 'react'
import styles from './Search.module.css'
import {Icon} from '@iconify/react'
import { useMovieContext } from '../../contexts/MoviesContext'
function Search() {

  interface inputInterface{
    currentInput:string;
  }
  const searchInputRef = useRef<HTMLInputElement>(null)
  const {searchMovies} = useMovieContext()

  function handleSearch(){
    let currentInput = searchInputRef.current?.value
    
    if(currentInput  && currentInput?.length >= 3){
      searchMovies(currentInput)
    }else{
      return
    }
  }
  return (
    <div className={styles.inputContainer}>
      <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#fff'}} />
      <input onChange={()=>handleSearch()} className={styles.inputField} placeholder='Search For Movies' ref={searchInputRef}/>
    </div>
  )
}

export default Search
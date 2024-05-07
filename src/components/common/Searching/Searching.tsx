import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import styles from './Searching.module.css'
import { useMovieContext } from '../../../contexts/MoviesContext'


function Searching() {
    const [noresults,setNoresults] = useState(false)
    const inputValue = useMovieContext()
    //function if there is no matching results
    const toggleNoResults = ()=>{
      setTimeout(()=>{
        setNoresults(true)
        console.log('timeout done')
      },3500)
    }
  
    useEffect(()=>{
        setNoresults(false)
        toggleNoResults()
    },[inputValue])
  return (
    <div>
        {!noresults ? 
        <div className={styles.initial}>
            <p className={styles.searchingPar}>Searching...</p>
            <Icon icon="line-md:loading-loop" width="24" height="24"  style={{color: '#ffb83d'}} />
        </div> : 
        <p className={styles.noResults}>No results for your search...</p>}
    </div>
  )
}

export default Searching
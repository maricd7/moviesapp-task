import React, { useState } from 'react'
import { useMovieContext } from '../../contexts/MoviesContext'
import styles from './Tab.module.css'

export default function Tab() {
    const {setTab,data} = useMovieContext()
    const [activeTab, setActiveTab] = useState('shows');

    const handleClick = (tab:string)=>{
        setTab(tab)
        setActiveTab(tab)
    }   
  return (
    <div className={styles.tabContainer}>
        <button className={`${styles.tabBtn} ${activeTab === 'shows' ? styles.active : ''}`} onClick={() =>handleClick('shows')}>TV Shows</button>
        <button className={`${styles.tabBtn} ${activeTab === 'movies' ? styles.active : ''}`} onClick={()=>handleClick('movies')}>Movies</button>
    </div>
  )
}

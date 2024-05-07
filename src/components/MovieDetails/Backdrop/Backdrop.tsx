import React from 'react'
import styles from './Backdrop.module.css'

interface BackdropProps{
    path:string;
}


const Backdrop  = ({path}:BackdropProps)=> {
  return (
    <div>
        <img alt='BackDrop' src={"https://image.tmdb.org/t/p/w1280/" + path} className={styles.backdropImage}/>
        <div className={styles.backdropOverlay}/></div>
  )
}

export default Backdrop
import React from 'react'
import styles from './Genre.module.css'

interface GenreProps{
    text:string;
}

const Genre =({text}:GenreProps)=> {
  return (
    <span className={styles.genre}>{text}</span >
  )
}

export default Genre
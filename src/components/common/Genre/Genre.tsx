import React from 'react'
import styles from './Genre.module.css'

interface GenreProps{
    text:string;
}

function Genre({text}:GenreProps) {
    console.log('logger')
    console.log(text, 'textt')
  return (
    <span className={styles.genre}>{text}</span >
  )
}

export default Genre
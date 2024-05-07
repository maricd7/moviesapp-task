import React from 'react'
import styles from './Heading.module.css'

interface HeadingProps{
  text:string;
}
const Heading  =({text}: HeadingProps)=> {
  return (
    <h1 className={styles.mainHeading}>{text}</h1>
  )
}

export default Heading
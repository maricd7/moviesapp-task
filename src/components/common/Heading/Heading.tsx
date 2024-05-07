import React from 'react'
import styles from './Heading.module.css'

interface HeadingProps{
  text:string;
}
const Heading :React.FC<HeadingProps> =({text})=> {
  return (
    <h1 className={styles.mainHeading}>{text}</h1>
  )
}

export default Heading
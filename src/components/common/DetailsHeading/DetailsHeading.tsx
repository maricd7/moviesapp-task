import React from 'react'
import styles from './DetailsHeading.module.css'
interface DetailsHeadingProps {
    text:string;
}
function DetailsHeading({text}:DetailsHeadingProps) {
  return (
    <h2 className={styles.detailsHeading}>{text}</h2>
  )
}

export default DetailsHeading
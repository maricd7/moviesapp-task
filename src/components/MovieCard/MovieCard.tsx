import React from 'react'
import styles from './MovieCard.module.css'


interface MovieCardProps {
    name: string;
    image:string;
  }

  const MovieCard: React.FC<MovieCardProps> =({name,image})=> {


  return (
    <div className={styles.cardMain}>
        <img className={styles.image} src={image}/>
        <h2 className={styles.title}>{name}</h2>
    </div>
  )
}


export default MovieCard;
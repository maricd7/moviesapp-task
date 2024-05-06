import { Icon } from '@iconify/react'
import React from 'react'
import styles from './BackButton.module.css'

interface BackButtonProps{
    onClick:()=>void
}
const BackButton :React.FC<BackButtonProps> = ({onClick})=> {
  return (
    <Icon onClick={onClick} className={styles.backButton} icon="material-symbols:arrow-back" width="24" height="24"  style={{color: '#fff'}} />
  )
}

export default BackButton
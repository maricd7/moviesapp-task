import React from 'react'
import styles from './Search.module.css'
import {Icon} from '@iconify/react'
function Search() {
  return (
    <div className={styles.inputContainer}>
      <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#fff'}} />
      <input className={styles.inputField} placeholder='Search For Movies'/>
    </div>
  )
}

export default Search
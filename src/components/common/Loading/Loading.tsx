import React from 'react'
import styles from './Loading.module.css'
import { Icon } from '@iconify/react'



function Loading() {
  return (
    <div className={styles.loadingContainer}>
        <span className={styles.loadingText}>Loading</span>
        <Icon icon="line-md:loading-loop" width="24" height="24"  style={{color: '#ffb83d'}} />
    </div>
  )
}

export default Loading
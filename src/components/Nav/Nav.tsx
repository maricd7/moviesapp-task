import React from 'react'
import BackButton from '../common/Buttons/BackButton/BackButton'
import { useNavigate } from "react-router-dom";
import styles from './Nav.module.css'

function Nav(){


    const navigate = useNavigate()
    //back button function
    const goBack = () => {
        navigate(-1); 
      };


  return (
    <nav className={styles.navBar}>
        <BackButton onClick={goBack}/>
        <h2 className={styles.logo}>Screen<span className={styles.highlight}>Quest</span></h2>
    </nav>
  )
}

export default Nav
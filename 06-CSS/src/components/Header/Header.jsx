import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>

      <h1 className= {styles.logo}>AmitLy</h1>
      <button className={styles.btn}>Here me </button>
    </div>
  )
}

export default Header

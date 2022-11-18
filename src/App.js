import React from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import Banner from './assets/images/banner.jpg'
import Box from '@mui/material/Box'
import Footer from './components/Footer'
import Container from "@mui/material/Container";
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={Banner} alt="banner" />
      <div className={styles.floatingContainer}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
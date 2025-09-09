import React from 'react'
import Header from '../components/Home/Header'
import BlogList from '../components/Home/BlogList'
import Newletter from '../components/Home/Newletter'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
        <Header/>
        <BlogList/>
        <Newletter/>
        <Footer/>
    </div>
  )
}

export default Home
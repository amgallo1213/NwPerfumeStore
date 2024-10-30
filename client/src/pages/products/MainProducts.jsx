import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const MainProducts = () => {
  return (
    <div>
      <Navbar />
      <Link to="/">Home</Link>
    </div>
  )
}

export default MainProducts
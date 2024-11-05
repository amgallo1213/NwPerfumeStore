import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Learn = () => {
  return (
    <div>

    <Navbar />

      <h1>THIS IS THE LEARN PAGE!!!! </h1>

        <div className='container lg mx-auto flex flex-row justify-around' >
          <img src="https://images.unsplash.com/photo-1705899853374-d91c048b81d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwZXJmdW1lJTIwYm90dGxlfGVufDB8fDB8fHww" alt="" className='w-96 shadow-md' />
          <div className='text-left'>
            <ul className='flex row'>
              <li className='list-none pr-2 hover:text-pink'><Link to="/">Home</Link></li>
              <li className='px-2'>/</li>
              <li className='list-none px-2 hover:text-pink'><Link to="/products">All Products</Link></li>
              <li className='px-2'>/</li>
              <li className='list-none px-2'>The Premise in a Venn Diagram</li>
            </ul>
            <h2 className='leading-tight font-semibold'>The Premise in a Venn Diagram</h2>
            <p className='font-secondary'>chaos, fragmentation, then unity</p>
            <p>$180</p>
          </div>
        </div>
      
    </div>
  )
}

export default Learn
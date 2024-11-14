import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
// import Recommended from '../products/Recommended'

const Learn = () => {
  return (
    <div>

      <Navbar />

      <h1>THIS IS THE LEARN PAGE!!!! </h1>

      <div className='container md mx-auto pt-12 flex flex-row justify-center' >
        <img src="https://images.unsplash.com/photo-1705899853374-d91c048b81d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwZXJmdW1lJTIwYm90dGxlfGVufDB8fDB8fHww" alt="" className='w-80 shadow-md' />
        <div className='container max-w-lg'>
          <div className='text-left px-8'>
            <ul className='flex row'>
              <li className='list-none pr-2 hover:text-pink'><Link to="/">Home</Link></li>
              <li className='px-2'>/</li>
              <li className='list-none px-2 hover:text-pink'><Link to="/products">All Products</Link></li>
              <li className='px-2'>/</li>
              <li className='list-none px-2'>The Premise in a Venn Diagram</li>
            </ul>
            <div className='container sm mx-auto'>
              <h2 className='leading-tight font-semibold mt-8 text-2xl'>The Premise in a Venn Diagram</h2>
              <p className='font-secondary text-xl pt-4 pb-4 pr-6 leading-6'>But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              <p className='pt-2 font-secondary' >Head Note: <span>salt, orange</span></p>
              <p className='pt-2 font-secondary'>Heart Note: <span>ylang-ylang</span></p>
              <p className='pt-2 font-secondary'>Base Note: <span>sandalwood</span></p>
              <p className='pt-2 font-secondary'>30mL</p>
              <h3 className='pt-4 font-primary'>$180</h3>
              <button className='rounded border-2 border-black uppercase font-semibold hover:shadow-xl px-2 mt-4 hover-translate-y-2'>Add to Cart</button>
            </div>
          </div>
        </div>

      </div>

      {/* <Recommended /> */}

    </div>
  )
}

export default Learn
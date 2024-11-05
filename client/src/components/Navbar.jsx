import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <header className='max-w-screen-2xl mx-auto flex justify-between items-end'>
                <nav className='m-9 flex '>
                    <Link to="/products"><p>Perfumes</p></Link>
                    <Link to="/about" className='px-6'><p>About</p></Link>
                    <Link to="/learn" className=''><p>Learn</p></Link>
                </nav>
                <Link to="/">
                    <h1 className='m-9 text-6xl font-black font-primary text-center text-darkblue'>Not Strangers</h1>
                </Link>
                <div className='flex m-9'>
                    <p>search</p>
                    <p className='px-6'>login</p>
                    <p>cart</p>
                    

                    
                </div>
            </header>
        </>
    )
}

export default Navbar
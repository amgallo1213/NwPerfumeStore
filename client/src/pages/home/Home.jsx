import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
       
        <>
            <h1 className='m-9 text-6xl font-black font-primary text-center text-darkblue'>Not Strangers</h1>
            <div className='container mx-auto h-screen  max-w-5xl grid grid-cols-4 grid-rows-3' >

                <figure className='col-start-1 col-end-3 row-start-1 row-end-2 relative text-center overflow-hidden'>
                    <img src="https://images.pexels.com/photos/4554007/pexels-photo-4554007.jpeg?auto=compress&cs=tinysrgb&w=800&lazt=load" alt="" />
                    <figcaption className='z-50 absolute inset-x-0 bottom-0'>
                        <h2 className='tracking-tight text-2xl text-white font-extrabold'>Perfume</h2>
                        <div>
                            <button className='border-solid border-2 border-white rounded w-40 h-10 text-white uppercase font-extrabold'><Link to="/products">Shop Products</Link></button>
                        </div>
                        <p className='font-secondary text-nowrap text-white '>Find your fragrance now.</p>
                    </figcaption>
                </figure>

                <img src="https://images.pexels.com/photos/12146871/pexels-photo-12146871.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className=' col-start-3 col-end-4 row-start-1 row-end-2' />

                <figure className='row-start-1 row-end-3 relative text-center '>
                    <img src="https://images.pexels.com/photos/4154205/pexels-photo-4154205.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <figcaption className='z-50 absolute inset-x-0 bottom-0'>
                        <h2 className='tracking-tight text-2xl text-white font-extrabold'>Learn</h2>
                        <div>
                            <button className='border-solid border-2 border-white rounded w-36 h-10 text-white uppercase font-extrabold'><Link to="/learn">Learn More</Link></button>
                        </div>
                        <p className='font-secondary text-balance text-white'>Explore what goes into making our fragrances.</p>
                    </figcaption>
                </figure>


                <img src="https://images.pexels.com/photos/8625543/pexels-photo-8625543.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />

                <div className='text-center font-secondary' >
                    <Link><p className='text-darkblue'>Closeness begins here</p></Link>
                </div>

                <img src="https://images.pexels.com/photos/8625562/pexels-photo-8625562.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />

                <figure className='row-span-2 relative text-center'>
                    <img src="https://images.pexels.com/photos/4154204/pexels-photo-4154204.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                    <figcaption className='z-50 absolute inset-x-0 bottom-0'>
                        <h2 className='tracking-tight text-2xl text-white font-extrabold'>About Us</h2>
                        <div>
                            <button className='border-solid border-2 border-white rounded w-36 h-10 text-white uppercase font-extrabold'><Link to="/about">More Info</Link></button>
                        </div>
                        <Link to="/about"><p className='font-secondary text-nowrap text-white'>Learn about our perfumery.</p></Link>
                    </figcaption>
                </figure>

                <img src="https://images.pexels.com/photos/12402366/pexels-photo-12402366.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className='row-span-2 col-start-2 col-end-4' />

                <img src="https://images.pexels.com/photos/4938265/pexels-photo-4938265.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className='row-span-2' />
            </div>

        </>

    )
}

export default Home
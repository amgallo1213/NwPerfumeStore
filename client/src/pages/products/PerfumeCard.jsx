import React from 'react'
import { Link } from 'react-router-dom'




const PerfumeCard = ({ perfume }) => {
    return (
        <div >

            <Link to="/">
                <div className='card w-72 m-4 hover:border hover:border-solid hover:border-darkblue shadow-md hover:shadow-md p-4  space-y-4 hover:transition hover:transform hover:duration-300  hover:ease-in-out  hover:-translate-y-1 hover:scale-110' >
                    <img src={perfume.img} alt="" className='rounded' />
                    <h2 className='leading-tight font-semibold'>{perfume.name}</h2>
                    <p>{perfume.description}</p>
                    <p>${perfume.price}</p>
                </div>
            </Link>

        </div>
    )
}

export default PerfumeCard
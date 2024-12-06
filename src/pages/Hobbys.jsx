import React from 'react'
import Header from '../components/header'
import { hobbys } from '../hobbys'
import { Link } from 'react-router-dom'

export default function Hobbys() {
    return (
        <div className='main cardmain'>
            <Header />
            <div className='cards'>
                        {
                hobbys.map(el => (
                   <div className='card' key={el.id}>
                    <h2 className='hobbyname'>{el.hobby}</h2>
                    <Link className='hobbylink' to={`/hobbys/${el.id}`}>Show more</Link>
                   </div> 
                ))
            }    
            </div>

            </div>
    )
}

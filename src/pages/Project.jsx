import React from 'react'
import Header from '../components/header'
import { projects } from '../projects'
export default function Project() {
    return (
        <div className='main'>
            <Header />

            {
                projects.map(el => (
                    <div className='projections' key={el.id}>
                        <div className='reactdiv'>
                            <img className='react' src="./assets/React-icon.svg.png" alt="" />
                        </div>
                        <div>
                            <h1>Project overview</h1>
                            <a className='projectlink' target="_blank" href={el.github}>Github</a>
                            <a className='projectlink vercel' target="_blank" href={el.vercel}>Vercel</a>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

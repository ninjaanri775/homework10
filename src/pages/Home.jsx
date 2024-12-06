import React from 'react'
import Header from '../components/header'
export default function Home() {
    return (
        <div className='main'>
            <Header />
            <div className='information'>
            <img className='profile' src="./assets/istockphoto-1495088043-612x612.jpg" alt="" />
            <h2 className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam, atque fugiat iusto porro, soluta ducimus sunt eius rem quod, nam temporibus dolorum deserunt. Amet officia aspernatur sed facere reiciendis?</h2>
            </div>
            
            <h2 className='contact'>Contact: 232347544</h2>
            <h2 className='contact'>Github: ninjaanri775</h2>
            <h2 className='contact'>Email: gelagela@gmail.com</h2>
            </div>
    )
}

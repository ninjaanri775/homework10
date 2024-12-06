import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div className='header'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/project'}>project</Link>
        <Link className='link' to={'/hobbys'}>hobby</Link>
    </div>
  )
}

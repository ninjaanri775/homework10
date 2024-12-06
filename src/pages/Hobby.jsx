import React from 'react';
import Header from '../components/header';
import { Link, useParams } from 'react-router-dom';
import { hobbys } from '../hobbys';

export default function User() {
  const { id } = useParams(); 
  const hobbyinfo = hobbys.find(el => el.id === parseInt(id, 10));  
  return (
    <div className='main hobbymain'>
      <Header />
      <Link to={"/hobbys"} className='back' >&lt; Go back</Link>
      {hobbyinfo ? (
        <div className='infors'>
          <h1 className='maininfo'>{hobbyinfo.hobby}</h1>
          <h2 className='secinfo'>{hobbyinfo.info}</h2>
        </div>
      ) : (
        <h1 className='error'>Error</h1>
      )}
    </div>
  );
}

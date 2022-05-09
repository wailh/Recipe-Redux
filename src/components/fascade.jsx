import React from 'react'
import Navbar from './navbar';
import Hero from './hero'

const Fascade = () => {
    return ( 
        <div className='fascade'>
            <div className='overlay'></div>
            <Navbar />
            <Hero />
        </div>
     );
}
 
export default Fascade;
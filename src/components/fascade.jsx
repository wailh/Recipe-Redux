import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero'

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
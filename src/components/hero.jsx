import React, { Fragment } from 'react'
import {Link} from 'react-scroll'

const Hero = () => {
    return ( 
        <div className='hero'>
          <div className='container-md container-fluid'>
            <div className='title'>
               <h1>greatest <br/>recipes ever</h1>
            </div>
            <h3>food center</h3>
            <Link  to="recipes" spy={true} smooth={true}><span className='btn'>discover recipes</span></Link>
          </div>
        </div>
     );
}
 
export default Hero;
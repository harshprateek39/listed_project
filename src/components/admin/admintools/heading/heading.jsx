import React, { useState } from 'react'

import './heading.css';
import { BiSearchAlt2} from 'react-icons/bi';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsBell} from 'react-icons/bs';
import Image from './image.jpg'
import Media from 'react-media';
const heading = ({click,active}) => {
   
  return (<>
  <Media query="(max-width:1000px)">
    {matches=>{return matches?
      <div className='toggle'>
        <div className={active ?'navBtn active1':'navBtn'} ><RiMenuUnfoldFill onClick={click} /></div>
        <div className='srch'>
        <div className='logo'><p>Dashboard</p></div>
        
        <BsBell/>
        <div className='pic'> 
        <img className="picture" src={Image} alt="img"/ >
          
        </div>
        </div>
    </div>
    :
    <div className='heading'>
        <div className='logo'><p>Dashboard</p></div>
        <div className='srch'>
        <div className='inputBox'><input className='input' placeholder='Search...' type='text'/><BiSearchAlt2/> </div>
        <BsBell/>
        <div className='pic'> 
        <img className="picture" src={Image} alt="img"/ >
          
        </div>
        </div>
    </div>}}
  </Media>
    </>
  )
}

export default heading;
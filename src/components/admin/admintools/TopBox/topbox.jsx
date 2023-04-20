import React from 'react'
import './topbox.css'
import SmallBox from './smallBoxes/smallbox'
import { MenuData } from './topBoxData'
const topbox = () => {
  return (
    <div className='topbox'>
    {MenuData.map((item,index)=>{return( <SmallBox title={item.title} icon={item.icon}  value={item.value} color={item.color}/>)})}
    </div>
    
  )
}

export default topbox
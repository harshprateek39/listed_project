import React from 'react'
import './smallbox.css'
const smallbox = (props) => {
  return (
    <div className='smallbox' style={{backgroundColor: props.color}}>
    <div className='data'>
     <p className='title'>{props.title}</p>
     <p className='value'>{props.value}</p>
    </div>
    <div className='icon'>
       <props.icon/>
    </div>
    </div>
  )
}

export default smallbox;
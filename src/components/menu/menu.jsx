import './menu.css';
import {MenuData} from './data' ;

import { useState } from 'react';
function Menu({active}) {
  const [selected,setSelected]=useState(0);
  return (
    <div className={active? 'main call':'main'}>
     <div className='title'> <h1>Boards.</h1> </div>
     <div className='content' >
     {MenuData.map((item,index)=>{
      return (
        <div className= {selected===index? 'contentData active':'contentData'} 
        onClick={() => setSelected(index)}>
         
          <item.icon/>
          <p>{item.title}</p>
        </div>
      )
     })}
     </div>
     <div className='menuFooter'>
     <div className='menuFooterData'>
     <p>Help</p>
       <p>Contact Us</p>
     </div>
      
     </div>
    </div>
  );
}

export default Menu;
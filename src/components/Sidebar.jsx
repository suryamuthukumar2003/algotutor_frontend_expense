import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  const[active,setActive]=useState(1);
  return (
    <div className='w-2/12 py-2 px-1 bg-gray-100 h-screen'>
        <div className='w-full py-4 flex justify-center items-center bg-lime-600 text-white mb-3'>
            <span className='font-display font-normal text-2xl'>Learning</span>
        </div>
        <div>
            <ul className='flex flex-col items-center space-y-5'>
                <li><Link className={`menu ${active==1 ?'border-b-4 border-lime-500':''}`} to={'/'} onClick={()=>setActive(1)}>Home Page</Link></li>
                <li><Link className={`menu ${active==2 ?'border-b-4 border-lime-500':''}`} to={'/about'} onClick={()=>setActive(2)}>About Page</Link></li>
                <li><Link className={`menu ${active==3 ?'border-b-4 border-lime-500':''}`} to={'/test'} onClick={()=>setActive(3)}>Test</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;

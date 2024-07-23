import React from 'react'
//  import { MdOutlineTranslate } from "react-icons/md";


function Navbar() {
  return (
   
    <nav class="bg-white w-full">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div> */}
          <input placeholder=' Recherchez n importe  quoi ici' className=' bg-slate-200 ' style={{width:"440px", height:"38px"}}></input>
          <div className='flex'>
          {/* <MdOutlineTranslate/>   */}
            <select name="" id="">
            <option value="">Français(France)</option>
            <option value="">Anglais</option>
            </select>
           </div>
           <div className='flex gap-2'>
            <span style={{width:"20px", height:"20px", backgroundColor:"#FED600", borderRadius:"50%"}}></span>
            <div>
            <p> Bonjour</p>
            <div className='flex  gap-2'>
           <p>14 janvier 2022</p>
           <p>22:45:04</p>
           </div>
            </div>
           </div>
           </div>
           

      </div>
    </nav>
    

  )
}

export default Navbar
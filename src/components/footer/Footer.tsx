import React from 'react'
import vector from "../../assets/images/vector3.svg"
import img1 from "../../assets/images/img1.svg"
import img2 from "../../assets/images/img2.svg"

const Footer = () => {
  return (
    <div className='h-11 bg-red text-center content-center'>
    <div className='flex justify-center box-border gap-x-1 h-5 '>
        

      <div className='flex border border-red h-5 w-fit '>
        <img className='bg-white'  src={img1}/>
        <div className='bg-black'>

        <img className='h-5' src={img2}/>
        </div>
        </div>

        <div className='content-center'>
          <img src={vector} className=''/>
        </div>
    
      </div>
      </div>
    
  )
}

export default Footer

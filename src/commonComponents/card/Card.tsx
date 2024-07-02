import React from 'react'
import { Link } from 'react-router-dom'

type CardProps ={
  text: string,
  img: string,
  path: string,
  size : string,
  onClick :()=>void
}


const Card = ({text, img, path, onClick, size} : CardProps) => {
  const sizeConstraints = {
    "small" : "xs:w-[90px] sm:w-[131px]",
    "medium" : "xs:w-[131px] lg:w-[181px] "
  }
  return (
    <Link to={path}>
    <div onClick={onClick} className={`${sizeConstraints[size]} h-[154.59px] grid border border-gray-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.051)] relative rounded-[10px] bg-white box-border`}>
      <div className='flex flex-col self-center box-border h-full justify-center'>
      <img src={img} className='h-[79px] xs:w-[60px] md:w-[79px] mb-4 mx-auto'/>
      <span className=' self-center text-black font-normal text-center'>{text}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card




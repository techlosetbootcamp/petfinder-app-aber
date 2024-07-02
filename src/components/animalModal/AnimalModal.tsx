import React from 'react'

import img from "../../assets/img5.svg"

import Card from '../../commonComponents/card/Card'

import { IoClose } from "react-icons/io5";



const cardData =[
    {
      img:img,
      text:"Rabbits",
      path:"/categories?slug=Rabbit",
    },
    {
      img:img,
      text:"Small & Furry",
      path:"/categories?slug=small-furry",
    },
    {
      img:img,
      text:"Horses",
      path:"/categories?slug=Horse",
    },
    {
      img:img,
      text:"Birds",
      path:"/categories?slug=Bird",
    },
    {
      img:img,
      text:"Scale, Fins & Other",
      path:"/categories?slug=scales-fins-other",
    },
    {
      img:img,
      text:"Barnyard",
      path:"/categories?slug=Barnyard",
    },
  ]

const AnimalModal = ({onClick}) => {
  
  return (
    <div className='w-auto bg-white h-fit rounded-3xl shadow-lg py-[30px]  sm:px-[20px] mx-[10px] '>

        <div onClick={onClick} className='flex justify-end py-[10px] px-[10px] '>
            <IoClose size={30}/>
        </div>

        <div className='grid xs:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-5 px-[10px]'>
        {
          cardData.map((item)=>{
            return(
              <Card key={item.text} img={item.img} text={item.text} path={item.path} onClick={onClick} size='small'/>

            )
          })
        }
        </div>
      
    </div>
  )
}

export default AnimalModal

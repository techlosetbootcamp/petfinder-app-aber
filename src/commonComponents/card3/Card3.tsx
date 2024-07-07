import React from 'react'
import Button from '../button/Button'
import { CardProps3 } from '../../@types/types'



const Card3 = ({btnText,heading,text, img} : CardProps3) => {
  return (
    <div>
      <div className='xs:w-auto lg:w-96 p-4 grid rounded-md bg-white box-border'>
      <div className='flex flex-col self-center box-border  h-full justify-center'>
      <img src={img} className='h-[100px] w-[100px] mb-4 mx-auto'/>
      <p className='text-primary text-[20px]'>{heading}</p>
      <p className='py-8'>{text}</p>
      <Button text={btnText} width={"medium"} radius={"medium"} textColor="primary" bgColor='white' border='primary'/>
      

      </div>
    </div>
    </div>
  )
}

export default Card3

import React from 'react'

import { CardProps4 } from '../../types/types'
import { ArticleCardSizeConstraints } from '../../constants/StylingConstraints'

const ArticleCard = ({text, btnText, size, heading,img} : CardProps4) => {
   
    return (
        <div className={`${ArticleCardSizeConstraints[size]}`}>


            <img src={img} alt="" className='w-full h-[260px] rounded-[8px] object-cover object-center' />


            <div className='relative bottom-3 bg-white xs:[10px] lg:px-[43px] py-[28px] h-[260px] rounded-lg text-center content-center'>
                {
                    size=="large" &&

                <div className=' w-full h-[100px] left-0 content-center absolute -top-12  block'>
                    <img src={img} alt="" className='h-[88px] w-[88px] border-[6px] mx-auto border-white rounded-full object-cover' />
                </div>
                }

                <div className='pt-5  h-full '>
                    <div className='flex flex-col justify-evenly h-[80%]'>
                    <p className='text-[20px] leading-8 text-black '>{heading}</p>
                    <p className='text-[16px] leading-8 text-black'>{text}</p>
                    </div>

                    <div className=' h-[55px] absolute bottom-0 w-full border-t left-0 right-0 mx-auto content-center '>
                        <p className='text-sm text-primary'>{btnText}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArticleCard

import React from 'react'
import { ButtonProps } from '../../@types/types'



const Button = ({bgColor, textColor,text, width, radius, border} : ButtonProps) => {
  const widthConstraints = {
    "medium" : "w-[200px]",
    "full" : "w-full",
    "fit" : "w-fit px-[5px]"
}

const radiusConstraints = {
  "medium" : "rounded-[23px]",
  "small" : "rounded-[5px]"

}



  return (
    <div className=''>

    <input 
    type="button" 
    value={text}
    className={`self-center ${widthConstraints[width]} ${radiusConstraints[radius]}  h-[45px] bg-${bgColor} text-[14px] border-2 border-${border} text-${textColor} `}
    
    />
    </div>
//     <div className='w-[200px] h-[45px] border-2 border-[#6504B5] rounded-3xl'>
      
//     </div>
  )
}

export default Button

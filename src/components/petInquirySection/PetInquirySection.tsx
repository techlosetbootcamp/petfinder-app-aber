import React from 'react'
import img from "../../assets/images/petCommon.png"
import { usePetDetailContext } from '../../pages/petDetail/PetDetail';

const PetInquirySection = () => {
    const obj = usePetDetailContext();
    return (
        <div className='bg-primary px-[60px] xs:hidden lg:block'>
            <div className='px-[50px] flex  py-[30px]'>
            <div className='h-[115px] w-[115px] bg-primary rounded-full border-[7px] border-white mx-[30px]'>
                <img src={obj?.pet?.photos?.[0]?.small ? obj?.pet?.photos?.[0]?.small : img} alt="" className='rounded-full object-center object-cover h-[103px] w-[103px]'/>
            </div>
            <div className='mt-[11.61px]'>
            <p className='text-[30px] leading-[36px] text-white'>Ask About {obj?.pet?.name}</p>
            <p className='text-[13.78px] leading-[22.4px] text-white py-[6px]'>{obj?.pet?.breeds.primary}</p>

            <div className='flex gap-[7.8px]'>
            <p className='text-[14px] leading-[22.4px] text-white'>{obj?.pet?.age}</p>
            <p className='text-[14px] leading-[22.4px] text-white'>•</p>
            <p className='text-[14px] leading-[22.4px] text-white'>{obj?.pet?.gender}</p>
            <p className='text-[14px] leading-[22.4px] text-white'>•</p>
            <p className='text-[14px] leading-[22.4px] text-white'>{obj?.pet?.size}</p>
            </div>
            </div>
            </div>

            <div className='py-[22px] mx-[80px] border-t border-gray-300 flex flex-col gap-[15px]'>
                <p className='text-[16px] text-white leading-[25.6px]'>Please note that {obj?.pet?.contact?.address?.state} Animals In Need is not able to answer inquiries via email through Petfinder at this time.</p>
                <div className='flex gap-14'>
                <p className='text-[16px] text-white leading-[25.6px]'>You may call them with your inquiry at: </p>
                <p className='text-[14px] text-white leading-[22.4px] mt-1'>{obj?.pet?.contact?.phone}</p>

                </div>
                <div className='flex gap-14'>
                
                </div>
                


            </div>

        
        </div>
    )
}

export default PetInquirySection

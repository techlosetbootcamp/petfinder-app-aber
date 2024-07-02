import React from 'react'
import Button from '../../commonComponents/button/Button'


const MainFooter = () => {
  return (
    <div className='w-full bg-primary text-white box-border xs:hidden lg:block lg:px-[20px]'>

      <div className='max-w-[1220px] mx-auto'>
        <div className='py-[18px]'>
          <img src="/logoWhite.svg" alt="" className='' />
        </div>

        <div className="relative flex lg:gap-[15px] xl:gap-[38px]">
          <div>
            <h3 className='py-3 uppercase  text-[14px] '>RESOURCES</h3>
            <p className='text-[13px]'>FAQs</p>
            <p className='text-[13px]'>Mobile App Download</p>
            <p className='text-[13px]'>Partnerships</p>
            <p className='text-[13px]'>News Center</p>
            <p className='text-[13px]'>Put Petfinder On Your Site</p>
            <p className='text-[13px]'>For Developers</p>
            <p className='text-[13px]'>Contact Us</p>
          </div>

          <div>
            <h3 className='py-3 uppercase  text-[14px] '>Adopt or Get Involved</h3>
            <p className='text-[13px]'>All Adopt Or Get Involved</p>
            <p className='text-[13px]'>Adopting Pets</p>
            <p className='text-[13px]'>Animal Shelters & Rescues</p>
            <p className='text-[13px]'>Other Types Of Pets</p>
          </div>

          <div>
            <h3 className='py-3 uppercase  text-[14px] '>About Dogs & Puppies</h3>
            <p className='text-[13px]'>All About Dogs & Puppies</p>
            <p className='text-[13px]'>Dog Adoption</p>
            <p className='text-[13px]'>Dog Breeds</p>
            <p className='text-[13px]'>Feeding Your Dog</p>
            <p className='text-[13px]'>Dog Behaviour</p>
            <p className='text-[13px]'>Dog Health & Wellness</p>
            <p className='text-[13px]'>Dog Training</p>
            <p className='text-[13px]'>Other Dog Information</p>
          </div>

          <div>
            <h3 className='py-3 uppercase  text-[14px] '>About Cats & Kittens</h3>
            <p className='text-[13px]'>All About Cats & Kittens</p>
            <p className='text-[13px]'>Cat Adoption</p>
            <p className='text-[13px]'>Cat Breeds</p>
            <p className='text-[13px]'>Feeding Your Cat</p>
            <p className='text-[13px]'>Cat Behaviour</p>
            <p className='text-[13px]'>Cat Health & Wellness</p>
            <p className='text-[13px]'>Cat Training</p>
            <p className='text-[13px]'>Other Cat Information</p>
          </div>
  
          <div className='absolute right-0'>
          <div className='bg-purple text-primary h-fit lg:w-[260px] xl:w-[330px] lg:p-[15px] xl:p-[26px] rounded-lg text-center '>
            <p className='text-[14px] leading-[24px]'>To get the latest on pet adoption and pet
              care, sign up for the Petfinder newsletter.</p>
              <div className='pt-[28px]'>

              <Button text="SIGN UP" width="full" radius='medium' bgColor={"primary"} textColor="white" border='primary'/>
              </div>

          </div>

          </div>



        </div>
        <div className='py-[18px] px-[89px] flex flex-wrap gap-[10px] justify-center text-[12px]'>
          <p>Shelter & Rescue Registration</p>
          <p>|</p>
          <p>Sitemap</p>
          <p>|</p>
          <p>Terms of Service</p>
          <p>|</p>
          <p>Notice at Collection</p>
          <p>|</p>
          <p>Privacy Policy (updated)</p>
          <p>|</p>
          <p>Do Not Sell Or Share My Personal Information</p>
          <p>|</p>
          <p>Accessibility</p>
          <p>|</p>
          <p>About Our Ads</p>
        </div>



      </div>
    </div>
  )
}

export default MainFooter




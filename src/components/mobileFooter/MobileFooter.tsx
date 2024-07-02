import React, { useState } from 'react'
import logo from "/logoWhite.svg"
import Button from '../../commonComponents/button/Button'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const footerLinks = [
  {
    text: "RESOURCES",
    subMenu : true, 
    sublinks : [
      {
        text : "FAQs",
        path : "#"
      },
      {
        text : "Mobile App Download",
        path : "#"
      },
      {
        text : "Partnerships",
        path : "#"
      },
      {
        text : "News Center",
        path : "#"
      },
      {
        text : "Put Petfinder On Your Site",
        path : "#"
      },
      {
        text : "For Developers",
        path : "#"
      },
      {
        text : "Contact Us",
        path : "#"
      },
    ]
  },
  {
    text: "Adopt or Get Involved",
    subMenu : true, 
    sublinks : [
      {
        text : "All Adopt Or Get Involved",
        path : "#"
      },
      {
        text : "Adopting Pets",
        path : "#"
      },
      {
        text : "Animal Shelters & Rescues",
        path : "#"
      },
      {
        text : "Other Types Of Pets",
        path : "#"
      },
     
    ]
  },
  {
    text: "About Dogs & Puppies",
    subMenu : true, 
    sublinks : [
      {
        text : "All About Dogs & Puppies",
        path : "#"
      },
      {
        text : "Dog Adoption",
        path : "#"
      },
      {
        text : "Dog Breeds",
        path : "#"
      },
      {
        text : "Feeding Your Dog",
        path : "#"
      },
      {
        text : "Dog Behaviour",
        path : "#"
      },
      {
        text : "Dog Health & Wellness",
        path : "#"
      },
      {
        text : "Dog Training",
        path : "#"
      },
      {
        text : "Other Dog Information",
        path : "#"
      },
    ]
  },
  {
    text: "About Cats & Kittens",
    subMenu : true, 
    sublinks : [
      {
        text : "All About Cats & Kittens",
        path : "#"
      },
      {
        text : "Cat Adoption",
        path : "#"
      },
      {
        text : "Cat Breeds",
        path : "#"
      },
      {
        text : "Feeding Your Cat",
        path : "#"
      },
      {
        text : "Cat Behaviour",
        path : "#"
      },
      {
        text : "Cat Health & Wellness",
        path : "#"
      },
      {
        text : "Cat Training",
        path : "#"
      },
      {
        text : "Other Cat Information",
        path : "#"
      },
    ]
  },
 

]
const MobileFooter = () => {
  const [heading, setHeading] = useState("")
  return (
    <div className='bg-primary border-2 w-full h-auto lg:hidden'>
        <div className='flex flex-col items-center px-[10px]'>
        <img src={logo} alt="" className='mx-auto' />

        <div className='bg-purple text-primary h-fit p-[26px] rounded-lg text-center '>
            <p className='text-[14px] leading-[24px]'>To get the latest on pet adoption and pet
              care, sign up for the Petfinder newsletter.</p>
              <div className='pt-[28px]'>

              <Button text="SIGN UP" bgColor={"primary"} textColor="white" width="full" radius='medium' border='primary'/>
              </div>

          </div>


          <div className='py-[40px] w-full'>
            {
              footerLinks.map((link)=>{
                return(
                  <div key={link.text} className=''>

                    <div onClick={()=> heading!==link.text ? setHeading(link.text) : setHeading('')} className='px-[20px] border-t border-white  py-[10px] flex justify-between'>

                    
                  <p 
                  className='text-[14px] leading-[22px] text-white uppercase'>
                    {link.text}
                    </p>

                    <div className='mt-1'>
                      {heading==link.text ?  <IoIosArrowUp color='white'/> : <IoIosArrowDown color='white'/>}
                    </div>
                    </div>
                    <div className={`px-[20px] py-[10px] flex flex-col ${heading===link.text ? "block" : "hidden" } transition-all ease-in-out translate-y-1 duration-700`}>
                      {
                        link.sublinks.map((mySubLinks)=>{
                          return(
                            <a key={mySubLinks.text} href="" className='text-white text-[12px]' >{mySubLinks.text}</a>
                          )

                        })

                      }
                    </div>
                    </div>
                  

                )
              })
            }
          </div>

          <div className='py-[10px] px-[2px] flex flex-wrap gap-[10px] justify-center text-[10px] text-white'>
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
          <p>About Our Ads</p>
          <p>|</p>
          <p>Do Not Sell Or Share My Personal Information</p>
        </div>


        </div>
      
    </div>
  )
}

export default MobileFooter

import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className = 'mt-20'>
      <div className = 'text-center'>
        <Image src = {assets.logo} alt = 'Yandisa Ndubela Logo' className = 'w-36 mx-auto mb-2'/>

        <div className = 'w-max flex items-center gap-2 mx-auto'>
            <Image src = {assets.mail_icon} alt = 'mail icon' className = 'w-6'/>
            yndubela07@gmail.com
        </div>
      </div>
      <div className = 'text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> copyright 2025 Yandisa Ndubela. All rights reserved.</p>
        <ul className = 'flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target = '_blank' href="https://github.com/Yandisa619">GitHub</a></li>
            <li><a target = '_blank' href="https://www.linkedin.com/in/yandisa-ndubela-000441276/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

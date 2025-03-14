import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Work = () => {
    return (
      <motion.div 
      initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        
        <motion.h4 
        initial = {{opacity: 0, y:-20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className="text-center mb-2 text-lg">My Portfolio</motion.h4>
        
        <motion.h2 
        initial = {{opacity: 0, y:-20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className="text-center text-5xl">My Latest Work</motion.h2>
  
        <motion.p 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my software development portfolio! Explore a collection of projects
          showcasing my expertise in software development.
        </motion.p>
  
        <motion.div 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] my-10 gap-5">
          {workData.map((project, index) => (
            <motion.div
            whileHover = {{scale: 1.05}}
            transition = {{ duration: 0.3}}
            key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="text-sm font-semibold">{project.title}</h2>
                  <p className="text-xs text-gray-700">{project.description}</p>
                </div>
                <div className = 'border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:1.1}}

        href="https://github.com/Yandisa619" className = 'w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover: duration-500'>
            Show More <Image src = {assets.right_arrow_bold} alt = 'Right Arrow Icon' className = 'w-4' />
        </motion.a>

      </motion.div>
    );
  };
  
export default Work

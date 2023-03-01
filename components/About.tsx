import { motion } from 'framer-motion'
import React from 'react'

 
type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
   transition={{
      opacity:1.5
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
    </h3>     
    <motion.img 
    initial={{
       x: -200,
       opacity:0,
    }}
    whileInView={{
       opacity:1,
       x: 0
    }}
    transition={{
       duration: 1.2,
    }}
    viewport={{
       once: true,
    }}
    src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/332056564_897795341363434_7548522386326054907_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=i-du40OMSRwAX9YY3K8&_nc_oc=AQlnE3rn2YievpSBAWcKkX-MVtSINSE0mzFJdNjLb-zkK9Ve5h-i0aqUrazMBWlpVnxKlIus1fp3k1rFPpy8ZeNc&tn=UNmMFK4R1nGY9DiX&_nc_ht=scontent-ham3-1.xx&oh=00_AfC7YYGTNkiUxKDNKxvdwiDgZ6PyiasEzHJgO-tZ2PpMUQ&oe=64041A0F" 
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
/>
     <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            Here is a {" "}some  <span className='underline decoration-[#F7AB0A]/50'>little</span> {" "} background
        </h4>
        <p className='text-base'>
        Hi! I'm M'barek. 😀 A highly competent IT professional with a proven track record in designing websites 💯, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I 🌟 am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.
        </p>
     </div>

   </motion.div>
  )
}

export default About
import React from 'react'
import myimg from '../assets/icon1.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row h-full'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I am a fullstack developer</h2>
                <p className=' text-gray-500 py-4 max-w-md'>I am an Information Technology Engineer with a strong passion for technology and innovation, actively seeking a challenging position within a progressive organization. My aim is to continuously enhance my skills and knowledge while gaining hands-on experience in diverse IT domains. I am dedicated to contributing my expertise and dedication to the organization's success, ultimately becoming a highly valuable and integral member of the team.</p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-300 hover:scale-105'>
                        Portfolio 
                        <span className='  group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={myimg} alt="IMG" className=' rounded-2xl  mx-auto w-2/3 md:w-full hover:scale-105 duration-300' />
            </div>
        </div>
    </div>
  )
}

export default Home
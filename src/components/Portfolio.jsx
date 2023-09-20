import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
// import installNode from '../assets/portfolio/installNode.jpg'
import JsBubble from '../assets/portfolio/JsBubble.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
// import textutils from '../assets/portfolio/TextUtils.jpg'
// import TicTacToe from '../assets/portfolio/TicTacToe.jpg'

const Portfolio = () => {

  return (
// IF YOU WANT TO ADD MORE PROJECTS UNCOMMENT THIS AND COMMENT THE USING ONE  
    
    // <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
    //     <div className=' max-w-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 max-w-[100%] text-white md:h-screen'>
        <div className=' max-w-lg p-4 mx-auto flex flex-col justify-center max-w-[60%] h-full'>
          <div className=' pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className=' py-6'>Check out some of my work right here</p>
          </div>
          <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px12 sm:px-0'> 
          
          
          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={arrayDestruct} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href='/'>
                <button target='_blank' rel='noreferrer' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='/' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>

          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={JsBubble} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href="https://ayush-nighot.github.io/JsGameBubble/" target='_blank' rel='noreferrer'>
                <button target='_blank' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='https://github.com/Ayush-Nighot/JsGameBubble' rel='noreferrer' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>

          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={navbar} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href='/'>
                <button target='_blank' rel='noreferrer' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='/' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>
           
          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={reactParallax} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href='/'>
                <button target='_blank' rel='noreferrer' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='/' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>
           
          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={reactSmooth} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href='/'>
                <button target='_blank' rel='noreferrer' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='/' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>
           
          <div className=' shadow-md shadow-gray-600 rounded-lg'>
              <img src={reactWeather} alt=""  className=' rounded-md duration-300 hover:scale-105'/>
              <div className=' flex items-center justify-center'>
                <a href='/'>
                <button target='_blank' rel='noreferrer' className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href='/' target='_blank'><button className=' w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105'>Code</button></a>
              </div>
            </div>
          
           

          </div>
        </div>
    </div>
  )
}

export default Portfolio
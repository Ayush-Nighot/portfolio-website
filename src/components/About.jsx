import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-300'>About</p>
            </div>
            <p className=' text-xl mt-20'> I'm Ayush Nighot, a passionate Developer. I'm thrilled to have you here and share a glimpse into my creative journey..</p>
            <br />
            <p className=' text-xl'>I'm a IT Engineer with a deep love for Web Development. I have always been drawn to the world of IT and continually seek opportunities to explore, learn, and create within this dynamic space.</p>
        </div>
    </div>
  )
}

export default About
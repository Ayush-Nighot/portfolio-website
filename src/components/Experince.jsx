import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import next from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'


const Experince = () => {
    const skills=[
       
{
    id:1,
    src:html,
    title:'HTML',
    style:' shadow-orange-500'
},
{
    id:2,
    src:css,
    title:'CSS',
    style:' shadow-blue-500'
},
{
    id:3,
    src: js,
    title:'JAVASCRIPT',
    style:' shadow-yellow-500'

},
{
    id:4,
    src:node,
    title:'NODE',
    style:' shadow-green-500'

},
{
    id:5,
    src:github,
    title:'GITHUB',
    style:' shadow-gray-500'

},
{
    id:6,
    src:react,
    title:'REACT',
    style:' shadow-blue-500'

},
{
    id:7,
    src: next,
    title:'NEXT',
    style:' shadow-white'
},
{
    id:8,
    src: tailwind,
    title:'TAILWIND',
    style:' shadow-sky-400'
}
    ]
  return (
    <div name='experince' className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
    <div  className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experince</p>
            <p className=' py-6'>These are the technologies I've worked on</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-3 text-center  gap-8  py-8 px-12 sm:px-0 '>

            {skills.map(({id,src,title,style})=>{
                return <div key={id} className={' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+style}>
                <img src={src} alt="" className=' w-20 mx-auto'/>
                <p className=' mt-4'>{title}</p>
            </div>
            })}
        </div>
    </div>
    </div>
  )
}

export default Experince



// {skills.map((id,src,title)=>{
//     return <div key={id} className=' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
//         <img src={src} alt="" className=' w-20 mx-auto'/>
//         <p className=' mt-4'>{title}</p>
//     </div>
// })}

import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div   >
     {/* top */}
     
     <div className='flex flex-col gap-6 p-28 px-3 max-auto' > 
      <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
        Discover Your <span className='text-slate-500'>Perfect</span>
        <br/> Stay
      </h1>

     <div className='text-gray-400 text-xs sm:text-sm'>
      NestSeeker is your trusted partner in space discovery.
      From city centers to quiet neighborhoods, explore with ease.
      Our intuitive design makes searching stress-free.
       <br/>
      Live where you feel most at home.
     </div>

     <Link to = {'/Search'} className ='text-xs sm:text-sm text-blue-800 font-bold hover:underline '> Get Started with NestSeeker  
     {/* Find Your Nest */}
     </Link>
     </div>


     {/* swipe */}



     {/* listing */}
    </div>
  )
}

import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex  flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>  
        <div className='flex flex-col gap-4'>

        <p>CLOCK IN!</p>        
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Gains <span>no games</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledge that I channel my inner <span className='text-blue-400 font-medium'>power</span> and <span className='text-blue-400 font-medium'> mental strength</span> to accept all risks of becoming the local strong person, shedding body fat, and the joy in fitting in my clothes differently. </p>
          <Button 
          func={() => {
            window.location.href = '#generate'
          }} text={"Get Started"}></Button>
      </div>

  )
}

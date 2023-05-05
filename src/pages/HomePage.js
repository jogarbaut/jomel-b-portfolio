import React from 'react'

const HomePage = () => {
  return (
    <section id="home">
      <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1>Jomel Bautista</h1>
        <div>Portfolio</div>
        <div className='flex gap-4'>
          <button>Resume</button>
          <button>Projects</button>
        </div>
      </div>
    </section>
  )
}

export default HomePage
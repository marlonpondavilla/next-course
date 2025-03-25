import React from 'react'

async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  })

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>About page</h1>
    </div>
  )
}

export default About

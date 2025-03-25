import Link from 'next/link'
import React from 'react'


function F1() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>F1 page</h1>
      <Link 
        href={"/f1/f2"}
        className='border bg-amber-300 text-black p-2'
      >F2 page</Link>
    </div>
  )
}

export default F1

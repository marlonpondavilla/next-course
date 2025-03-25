"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    alert('Order placed')
    router.push("/");
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Order product</h1>
      <button
      className='border border-blue-400 bg-blue-500 mt-2 p-2 rounded-full cursor-pointer' 
      onClick={handleClick}>Place order</button>
    </div>
  )
}


export default OrderProduct

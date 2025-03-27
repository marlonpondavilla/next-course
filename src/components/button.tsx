"use client";
import React from 'react'
import { useFormStatus } from 'react-dom'

const Submit = () => {
  const {pending} = useFormStatus();

  return (
    <button
    type='submit'
    disabled={pending}
    className='block py-2 px-8 text-white bg-blue-500 rounded-full disabled:bg-gray-400'
    >
      Submit
    </button>
  )
}

export default Submit

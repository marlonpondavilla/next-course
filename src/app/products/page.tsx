import React from 'react'
import Link from 'next/link'

function Products() {
  return (
  <div className='flex flex-col items-center justify-center h-screen space-y-4'>
    <h1 className='text-4xl'>ProductList</h1>
    <ul className='flex flex-col'>
      <Link href={`/products/1`} replace>Product 1</Link>
      <Link href={`/products/2`}>Product 2</Link>
      <Link href={`/products/3`}>Product 3</Link>
    </ul>
  </div>
  )
}

export default Products

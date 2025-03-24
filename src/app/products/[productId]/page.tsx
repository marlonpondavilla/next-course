import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productId

  return{
    title: `Product ${id}`,
  }
}

async function ProductDetails({
  params
} : Props) {
  const productId = (await params).productId;

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1>Details about product {productId}</h1>
    </div>
  )
}

export default ProductDetails

import React from 'react'
import { notFound } from 'next/navigation'

async function ReviewProduct({
  params
} : {
  params: Promise<{productId: string, reviewId: string}>
}) {
  const { productId, reviewId } = await params;

  if(parseInt(productId) > 1000){
    // if user try to access a product that does not exist
    notFound();
  }

  return (
    <div>
      <h1>Reviews {reviewId} for product {productId}</h1>
    </div>
  )
}

export default ReviewProduct

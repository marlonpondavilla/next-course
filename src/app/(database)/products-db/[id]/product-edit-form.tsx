"use client";

import Submit from "@/components/button";
import { useActionState } from "react";
import { FormState, updateProductAction } from "@/actions/products";
import { Product } from "@/app/(database)/products-db/page";

export default function UpdateProductForm({product}: {product: Product}){

  const initialState: FormState = {
    errors: {}
  }

  const editProductWithId = updateProductAction.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId, 
    initialState
  );  

  return (
    <form action={formAction}>
      <div className='flex flex-col items-center justify-center h-screen space-y-2'>
        <h2>{isPending ? "Submitting the Form" : "User Form"}</h2>
        <div className="">
          <input 
          type="text" 
          name="title"
          placeholder='Title'
          defaultValue={product.title}
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.title && state.errors.title}</p>
        </div>
        <div>
          <input 
          type="text" 
          placeholder='Description'
          name="description"
          defaultValue={product.description ?? ""}
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.description && state.errors.description}</p>
        </div>
        <div>
          <input 
          type="number" 
          placeholder='Price'
          name="price"
          defaultValue={product.price.toString()}
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.price && state.errors.price}</p>
        </div>
        <Submit />
      </div>
    </form>
  )
}
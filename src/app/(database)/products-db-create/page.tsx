"use client";

import Submit from "@/components/button";
import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";

export default function AddProductPage(){

  const initialState: FormState = {
    errors: {}
  }

  const [state, formAction, isPending] = useActionState(
    createProduct, 
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
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.title && state.errors.title}</p>
        </div>
        <div>
          <input 
          type="text" 
          placeholder='Description'
          name="description"
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.description && state.errors.description}</p>
        </div>
        <div>
          <input 
          type="number" 
          placeholder='Price'
          name="price"
          className='border border-blue-400 p-2'
          />
          <p className="text-red-500 text-sm py-2">{state.errors.price && state.errors.price}</p>
        </div>
        <Submit />
      </div>
    </form>
  )
}
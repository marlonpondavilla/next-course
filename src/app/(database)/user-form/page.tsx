"use client";
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter();

  const validateForm = () => {
    if(!title || !price || !description){
      setError("Please fill out all fields");
      return false;
    }

    return "";
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const validationError = validateForm();
    if(validationError){
      setError(validationError);
      setLoading(false);
      return;
    }

    try{
      const response = await fetch("/user-form/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, price, description})
      });

      if(response.ok){
        router.push("/products-db");
      }
    } catch (e: any) {
      setError(e.message);
    } finally{
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center justify-center h-screen space-y-4'>
        <h2 className={`${error ? "text-red-500" : "text-white"}`}>{error ? error : "User Form"}</h2>
        <input 
        type="text" 
        name="title"
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        className='border border-blue-400 p-2'
         />
        <input 
        type="text" 
        placeholder='Description'
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        className='border border-blue-400 p-2'
         />
        <input 
        type="number" 
        placeholder='Price'
        name="price"
        onChange={(e) => setPrice(e.target.value)}
        className='border border-blue-400 p-2'
         />
        <button 
        type='submit'
        className='bg-green-700 py-2 px-8 text-white rounded-full cursor-pointer hover:bg-green-600'
        >{loading ? "Submitting..." : "Submit"}</button>
      </div>
    </form>
  )
}

export default page

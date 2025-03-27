import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage(){

  async function createProduct(formData: FormData){
    "use server";

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    await addProduct(title, parseInt(price), description);
    redirect('/products-db');
  }

  return (
    <form action={createProduct}>
      <div className='flex flex-col items-center justify-center h-screen space-y-4'>
        <h2>User Form</h2>
        <input 
        type="text" 
        name="title"
        placeholder='Title'
        className='border border-blue-400 p-2'
         />
        <input 
        type="text" 
        placeholder='Description'
        name="description"
        className='border border-blue-400 p-2'
         />
        <input 
        type="number" 
        placeholder='Price'
        name="price"
        className='border border-blue-400 p-2'
         />
        <button 
        type='submit'
        className='bg-green-700 py-2 px-8 text-white rounded-full cursor-pointer hover:bg-green-600'
        >Submit</button>
      </div>
    </form>
  )
}
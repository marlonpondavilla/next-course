"use client";
import { useOptimistic } from "react";
import { deleteProductAction } from "@/actions/products";
import Link from "next/link";
import Form from "next/form";

export type Product = {
  id: number;
  title: string;
  price: bigint;
  description: string | null;
}


export function ProductDetail({products}: {products: Product[]}){
  const [optimisticProucts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await deleteProductAction(productId);
  }

  return(
    
      <ul className="space-x-4 space-y-4 p-4 m-8 flex flex-wrap justify-center items-center">
        {optimisticProucts.map((product) => (
          <li key={product.id} className="p-4 border border-gray-300 rounded space-y-4 w-1/2">
            <h2 className="text-lg font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-base text-blue-400">P{product.price.toString()}</p>
            <Form action={removeProductById.bind(null, product.id)}>
              <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400">Delete</button>
            </Form>
          </li>
        ))}
      </ul>
    
  )
}


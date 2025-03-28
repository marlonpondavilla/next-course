import { deleteProductAction } from "@/actions/products";
import { getProducts } from "@/prisma-db"
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: bigint;
  description: string | null;
}

export default async function ProductDBPage(){
  const products: Product[] = await getProducts();

  return(
    
      <ul className="space-x-4 space-y-4 p-4 m-8 flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <li key={product.id} className="p-4 border border-gray-300 rounded space-y-4 w-1/2">
            <h2 className="text-lg font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-base text-blue-400">P{product.price.toString()}</p>
            <form action={deleteProductAction.bind(null, product.id)}>
              <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    
  )
}


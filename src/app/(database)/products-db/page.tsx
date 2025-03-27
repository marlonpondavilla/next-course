import { getProducts } from "@/prisma-db"
import { Decimal } from "@prisma/client/runtime/client";

type Product = {
  id: number;
  title: string;
  price: Decimal;
  description: string | null;
}

export default async function ProductDBPage(){
  const products: Product[] = await getProducts();

  return(
    
      <ul className="space-x-4 space-y-4 p-4 m-8 flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <li key={product.id} className="p-4 border border-gray-300 rounded space-y-4 w-1/2">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-base text-blue-400">P{product.price.toString()}</p>
          </li>
        ))}
      </ul>
    
  )
}


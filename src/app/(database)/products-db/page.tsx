import { getProducts } from "@/prisma-db"
import { ProductDetail } from "./products-detail";

export type Product = {
  id: number;
  title: string;
  price: bigint;
  description: string | null;
}


export default async function ProductDBPage(){
  const products: Product[] = await getProducts();
  return(
    <ProductDetail products={products} />
  )
}


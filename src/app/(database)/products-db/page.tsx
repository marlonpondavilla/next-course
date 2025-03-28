import { getProducts } from "@/prisma-db"
import { ProductDetail } from "./products-detail";

export type Product = {
  id: number;
  title: string;
  price: bigint;
  description: string | null;
}


export default async function ProductDBPage({
  searchParams
}: {
  searchParams: Promise<{search?: string}>;
}){
  const {search} = await searchParams;
  const products: Product[] = await getProducts(search);
  
  return(
    <ProductDetail products={products} />
  )
}


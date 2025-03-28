import { getProduct } from "@/prisma-db";
import UpdateProductForm from "./product-edit-form";
import { Product } from "@/app/(database)/products-db/page";
import { notFound } from "next/navigation";

export default async function UpdateProductPage({
  params
}: {
  params: Promise<{ id: string}>
}){
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if(!product){
    notFound();
  }

  return (
    <UpdateProductForm product={product} />
  )
}
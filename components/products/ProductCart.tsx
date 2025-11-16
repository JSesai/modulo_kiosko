'use client'
import { Product } from "@/app/generated/prisma";
import { useStore } from "@/src/store";
import { formatCurrency } from "@/src/utils/helpers";
import Image from "next/image";
import AddProductButton from "./AddProductButton";


export default function ProductCard({ product }: { product: Product }) {

   

    return (
        <div className="shadow-sm rounded bg-white">

            <Image alt={product.name} src={'/products/' + product.image + '.jpg'} width={400} height={400} />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrency(product.price)}</p>
                <AddProductButton product={product} />
            </div>

        </div>

    )

}
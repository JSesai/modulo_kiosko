'use client'
import { Category } from "@/app/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


export function CategoryIcon({ category }: { category: Category }) {

    const params = useParams<{ category: string }>();

    return (
        <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${category.slug === params.category ? 'bg-amber-500' : ''}`}>

            <div className="w-16 h-16 relative">

                <Image
                    alt={'imagen ' + category.name}
                    src={`/icon_${category.slug}.svg`}
                    fill
                />

            </div>
            <Link
                className="text-xl font-bold"
                href={`/order/${category.slug}`}
                key={category.id}
            >
                {category.name}
            </Link>

        </div>

    )
}


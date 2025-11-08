import { prisma } from '@/src/prisma';



const prismaClient = prisma


async function getCategories() {
    const categories = await prismaClient.category.findMany();


}

export default async function OrderSidebar() {
    await getCategories();

    return (
        <aside className="md:w-72 md:h-screen bg-white">
            Order sidebaraa
        </aside>
    )
}
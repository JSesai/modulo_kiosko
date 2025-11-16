import { categories } from '@/prisma/data/categories';
import { prisma } from '@/src/prisma';
import { CategoryIcon } from './ui/CategoryIcon';



const prismaClient = prisma


async function getCategories() {
  const categories = await prismaClient.category.findMany();
  console.log(categories);


}

export default async function OrderSidebar() {
  await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white ">
      {categories.map(category => (
        <CategoryIcon key={category.id} category={category} />
      ))}
    </aside>
  )

}
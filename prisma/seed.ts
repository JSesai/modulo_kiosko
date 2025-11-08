// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../app/generated/prisma'
import { categories } from "./data/categories";
import { products } from "./data/products";


const prisma = new PrismaClient(); //instancia de prisma client


//fn encargada de ingresar datos a los modelos
export async function main() {
    try {
        await prisma.category.createMany({
            data: categories
        });
        await prisma.product.createMany({
            data: products
        });

    } catch (error) {
        console.log('error al crear el ingreso de la data', error);

    }
}

main()
    .then(async () => {
        prisma.$disconnect()
    })
    .catch(e =>{
        console.log('error al insertar registros en la bd');
        prisma.$disconnect();
        process.exit(1);        
    })
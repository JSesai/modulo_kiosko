import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@/app/generated/prisma";

interface Store {
    order: OrderItem[];
    addTocart: (product: Product) => void;
    increseQuantity: (id: Product['id']) => void;
    decreseQuantity: (id: Product['id']) => void;
    removeItem: (id: Product['id']) => void;

}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addTocart: (product) => {
        let updateOrder: OrderItem[] = [];

        const productIncart = get().order.find(item => item.id === product.id);

        if (productIncart) {
            const updateProductIncart = { ...productIncart, quantity: productIncart.quantity + 1, subtotal: (productIncart.quantity + 1) * productIncart.price };
            updateOrder = get().order.map(item => item.id === product.id ? updateProductIncart : item)
        } else {
            const { categoryId, image, ...rest } = product;
            updateOrder = [...get().order, { ...rest, quantity: 1, subtotal: 1 * product.price }]
        }

        set(() => ({
            order: updateOrder
        }))


    },
    increseQuantity: (id) => {
        set(() => ({
            order: get().order.map(item => item.id === id ?
                {
                    ...item,
                    quantity: item.quantity + 1,
                    subtotal: (item.quantity + 1) * item.price
                }
                :
                item
            )
        }))





    },
    decreseQuantity: (id) => {

        set(() => ({
            order: get().order.map(item => item.id === id ?
                {
                    ...item,
                    quantity: item.quantity - 1,
                    subtotal: (item.quantity - 1) * item.price
                }
                :
                item).
                filter(productIncart => productIncart.quantity > 0)

        }))

    },
    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter((item) => item.id !== id)
        }))
    }

}))
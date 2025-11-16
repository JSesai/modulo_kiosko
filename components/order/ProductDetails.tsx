import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils/helpers";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

const MAX_ITEMS = 5;
const MIN_ITEMS =1


export default function ProductDetails({ orderItem }: { orderItem: OrderItem }) {
    const { increseQuantity, decreseQuantity, removeItem } = useStore(store => store);
    const { quantity, subtotal, id, price, name } = orderItem;

    const disableButtonDecrese = useMemo(() => quantity === MIN_ITEMS, [quantity]);
    const disableButtonIncrement = useMemo(()=>quantity === MAX_ITEMS,[quantity]);

    return (
        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{name} </p>

                    <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => removeItem(id)}
                    >
                        <TrashIcon className="text-red-600 h-7 w-7 " />
                    </button>
                </div>
                <p className="text-2xl text-amber-500 font-black">
                    {formatCurrency(price)}
                </p>
                <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                    <button
                        type="button"
                        className="disabled:opacity-10"
                        disabled={disableButtonDecrese}
                        onClick={() => decreseQuantity(id)}
                    >
                        <MinusIcon className="h-6 w-6" />
                    </button>

                    <p className="text-lg font-black ">
                        {quantity}
                    </p>

                    <button
                        type="button"
                        disabled={disableButtonIncrement}
                        className="disabled:opacity-10"
                        onClick={() => increseQuantity(id)}
                    >
                        <PlusIcon className="h-6 w-6" />
                    </button>
                </div>
                <p className="text-xl font-black text-gray-700">
                    Subtotal: {formatCurrency(subtotal)}
                    <span className="font-normal">

                    </span>
                </p>
            </div>
        </div>
    )
}
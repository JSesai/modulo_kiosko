'use client'
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils/helpers"

export default function OrderSumary() {

	const order = useStore((store) => store.order)
	const total = useMemo(() => order.reduce((acum, item) => acum + item.subtotal, 0), [order]);

	if (order.length === 0) return <p className="text-center my-10">El carrito esta vacío</p>;

	return (
		<aside className="lg:h-screen lg:overflow-y-scroll md:w-84 lg:-96 p-5">
			<h1 className="text-4xl text-center font-black">Mi pedido</h1>
			<p className="text-xl">
					Total a pagar: {' '}
					<span className="font-black text-2xl">
						{formatCurrency(total)}
					</span>
				</p>

			<div className="mt-5">
				{
					order.map(item =>
						<ProductDetails key={item.id} orderItem={item} />
					)
				}
				{/* <p className="text-2xl">
					Total a pagar: {' '}
					<span>
						{formatCurrency(total)}
					</span>
				</p> */}
			</div>


		</aside>
	)
}
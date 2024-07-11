import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductDiv({ _id, title, images, price, index }) {
	return (
		<motion.div
			variants={fadeIn("down", "spring", 0.1 * index, 1)}
			initial="hidden"
			whileInView="show"
			className="box"
		>
			<div className="bg-white h-[200px] p-3 mb-2 rounded-lg flex justify-center items-center">
				<Link href={"/products/" + _id}>
					<img className="max-h-[150px]" src={images[0]} alt="" />
				</Link>
			</div>
			<div className="p-3">
				<Link href={"/products/" + _id}>
					<h3 className="text-lg hover:text-primary hover:decoration-primary decoration-gray-100 underline transition-all delay-150 duration-300">
						{title}
					</h3>
				</Link>
				<div className="flex gap-3 justify-between items-center mt-3">
					<p className="text-2xl font-bold">${price}</p>
					<button className="btn-outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
                        </svg>
                        Add to Cart
					</button>
				</div>
			</div>
		</motion.div>
	);
}

import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProducts, categories }) {
	return (
		<div className="flex flex-col">
			<div className="h-screen flex flex-col">
				<Header categories={categories} />
				<Featured product={featuredProduct} />
			</div>
			<NewProducts products={newProducts} />
		</div>
	);
}

export async function getServerSideProps() {
	const featuredProductId = "668ff17cb76dece20fc17974";
	await mongooseConnect();
	const featuredProduct = await Product.findById(featuredProductId);
	const newProducts = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	});
	const categories = await Category.find({}, null, { sort: { _id: -1 } });
	return {
		props: {
			featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
			newProducts: JSON.parse(JSON.stringify(newProducts)),
			categories: JSON.parse(JSON.stringify(categories)),
		},
	};
}

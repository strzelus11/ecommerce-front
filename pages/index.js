import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<div className="h-screen flex flex-col">
                <Header />
                <Featured />
            </div>
		</div>
	);
}

export async function getServerSideProps() {
    const featuredProductId = "hieahudfhwqeidhh"
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),

        }
    }
}

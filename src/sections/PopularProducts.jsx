import { products } from '../constants';

const PopularProducts = () => {
	return (
		<section
			id="products"
			className="max-container max-sm:mt-12n border-2 w-full min-h-screen  border-teal-700 "
		>
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					{' '}
					<span className=" text-coral-red">Popular </span> Products
				</h2>
				<p className="">
					{' '}
					Experience top notxh quality and style with our sought-after selections.
					Discover a world of comfort, design and value
				</p>
			</div>

			<div className="mt-16 grid lg:grid-cols-4">
				{products.map((product) => {
					return <div>{product.name} </div>;
				})}{' '}
			</div>
		</section>
	);
};

export default PopularProducts;

import {
	Hero,
	HeroBanner,
	PopularProducts,
	CustomerReviews,
	Footer,
	Services,
	SpecialOffers,
	Subscribe,
	SuperQuality,
	Header,
	FeaturedTrending,
	TedLasso,
} from './sections/index';
import Nav from './components/Nav';
const App = () => {
	return (
		<main className="relative">
			{/* <Nav /> */}
			<Header />
			<section className="  padding-b">
				<HeroBanner />
			</section>
			<section>
				{' '}
				<FeaturedTrending />
			</section>
			{/* <section className="padding">
				{' '}
				<PopularProducts />
			</section> */}
			<section className="py-10">
				{' '}
				<TedLasso />
			</section>
			<section className="padding">
				{' '}
				<SuperQuality />
			</section>
			<section className="padding-x padding-y">
				{' '}
				<Services />
			</section>
			<section className="padding">
				{' '}
				<SpecialOffers />
			</section>
			<section className="padding bg-pale-blue">
				{' '}
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				{' '}
				<Subscribe />
			</section>
			<section className="padding-x padding-t pb-8 bg-black ">
				<Footer />
			</section>{' '}
		</main>
	);
};

export default App;

import React from 'react';
import Carousel from '../components/Carousel';
import EmblaCarousel from '../components/EmblaCarousel';

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FeaturedTrending = () => {
	return (
		<section className="flex justify-center">
			{/* <Carousel /> */}

			<EmblaCarousel className="thisisit" slides={SLIDES} options={OPTIONS} />
		</section>
	);
};

export default FeaturedTrending;

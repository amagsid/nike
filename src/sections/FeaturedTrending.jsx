import React from 'react';
import Carousel from '../components/Carousel';
import EmblaCarousel from '../components/EmblaCarousel';

import { featuredProducts } from '../constants';

const OPTIONS = { dragFree: true, loop: true };

const FeaturedTrending = () => {
	return (
		<section className="flex justify-center">
			<EmblaCarousel slides={featuredProducts} options={OPTIONS} />
		</section>
	);
};

export default FeaturedTrending;

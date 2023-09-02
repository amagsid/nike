import { useEffect, useState } from 'react';
import { featuredProducts } from '../constants';

const CarouselComponent = () => {
	const [isHovered, setIsHovered] = useState(false);
	useEffect(() => {
		const slidesContainer = document.querySelector('.slides-container');
		const slideWidth = slidesContainer.querySelector('.slide').clientWidth;
		const prevButton = document.querySelector('.prev');
		const nextButton = document.querySelector('.next');
		nextButton.addEventListener('click', () => {
			slidesContainer.scrollLeft += slideWidth;
		});
		prevButton.addEventListener('click', () => {
			slidesContainer.scrollLeft -= slideWidth;
		});
	}, []);

	const handleHover = () => {
		setIsHovered(true);
	};
	const handleMouseLeve = () => {
		setIsHovered(false);
	};

	return (
		<div className=" max-w-full transition-all duration-500 ease-linear">
			<div className="relative">
				<div className="slides-container   flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth  before:shrink-0  after:shrink-0 md:before:w-0 md:after:w-0">
					{featuredProducts.map((product, index) => (
						<div className="slide aspect-square md:h-96  max-sm:h-36 flex-shrink-0 snap-center rounded overflow-hidden">
							<img
								onMouseOver={handleHover}
								onMouseLeave={handleMouseLeve}
								className=""
								src={product.imgURL}
								alt="mountain_image"
							/>
							{isHovered && (
								<h1
									onMouseOver={handleHover}
									onMouseLeave={handleMouseLeve}
									className="font-light bottom-8 mx-5 text-stone-50 relative"
								>
									{' '}
									{product.name}
								</h1>
							)}
						</div>
					))}
				</div>

				{/* 2 nav buttons */}

				<div className="absolute top-0 left-20 h-full items-center hidden md:flex">
					<button
						role="button"
						className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
						aria-label="prev"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
				</div>
				<div className="absolute top-0 right-20 h-full items-center hidden md:flex">
					<button
						role="button"
						className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
						aria-label="next"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CarouselComponent;

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { flushSync } from 'react-dom';
import { products } from '../constants';

const EmblaCarousel = (props) => {
	const { options, slides } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
		usePrevNextButtons(emblaApi);

	return (
		<div className="embla w-screen">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((product, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number">
								<span>{index + 1}</span>
							</div>
							<img
								className="embla__slide__img"
								src={product.imgURL}
								alt="Your alt text"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="embla__buttons w-screen">
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>

			<div className="embla__dots">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={'embla__dot'.concat(
							index === selectedIndex ? ' embla__dot--selected' : ''
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default EmblaCarousel;

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { flushSync } from 'react-dom';
import imageByIndex from './imageByIndex';

const TWEEN_FACTOR = 1.2;

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const [tweenValues, setTweenValues] = useState([]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;

		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
		});
		setTweenValues(styles);
	}, [emblaApi, setTweenValues]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onScroll();
		emblaApi.on('scroll', () => {
			flushSync(() => onScroll());
		});
		emblaApi.on('reInit', onScroll);
	}, [emblaApi, onScroll]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number">
								<span>{index + 1}</span>
							</div>
							<div className="embla__parallax">
								<div
									className="embla__parallax__layer"
									style={{
										...(tweenValues.length && {
											transform: `translateX(${tweenValues[index]}%)`,
										}),
									}}
								>
									<img
										className="embla__slide__img embla__parallax__img"
										src={imageByIndex(index)}
										alt="Your alt text"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<button onClick={scrollPrev} class="embla__prev">
				Prev
			</button>
			<button onClick={scrollNext} class="embla__next">
				Next
			</button>
		</div>
	);
};

export default EmblaCarousel;

import {
	CarouselItem1,
	CarouselItem2,
	CarouselItem3,
	CarouselItem4,
	CarouselItem5,
	CarouselItem6,
} from '../assets/images';

export const images = [CarouselItem1, CarouselItem2, CarouselItem3, CarouselItem4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

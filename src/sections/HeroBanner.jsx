import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import { bannerVideo } from '../assets/videos';
import { BannerImage, BannerDesktop } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const HeroBanner = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home"
			className="w-full flex full-scr-container flex-col justify-center min-h-screen "
		>
			<div className="relative flex flex-col justify-center ">
				<div className="relative">
					{/* Desktop banner */}
					<img
						className=" min-w-full h-72 max-md:hidden object-cover  "
						alt="shoe collection"
						src={BannerDesktop}
					/>
					{/* mobile banner */}
					<img
						className="min-w-full h-[80vh] md:hidden object-fit z-10"
						alt="shoe collection"
						src={BannerImage}
					/>
					<div className="flex w-full md:text-center absolute flex-col bottom-[2rem] md:gap-4 max-sm:gap-4 px-4 max-sm:max-w-[90%]">
						{' '}
						<h1 className="mt-10 main-heading max-sm:text-[42px]  z-10 leading-0 font-black">
							{' '}
							BUY 2, GET 25% OFF
						</h1>{' '}
						<p className="font-light">
							Nike Members, use code BTS23 on full-price styles. Exclusions apply.*
						</p>
						<div className="flex md:justify-center gap-3">
							<Button BgColor="bg-black" label="Shop" iconURL={arrowRight} />
							<Button BgColor="bg-black" label="*Promo Terms" />
						</div>
					</div>
				</div>

				<div className="flex w-full md:text-center my-11 flex-col bottom-[2rem] md:gap-6 px-4 ">
					{' '}
					<h1 className=" text-[4.25rem] leading-none main-heading  max-sm:text-[42px] z-10 leading-0 font-bold">
						{' '}
						YOU CAN'T STOP US
					</h1>{' '}
					<p className="tracking-wide text-2xl font-light max-md:w-[80%]">
						Engineered to the Exact Specifications of Championship Athletes
					</p>
					<div className="flex md:justify-center">
						<Button
							label="Shop"
							BgColor="bg-black"
							textColor="text-white"
							iconURL={arrowRight}
						/>
					</div>
				</div>

				{/* You Can't stop us video*/}
			</div>
			<div className=" flex ">
				<video
					src={bannerVideo}
					className="w-screen"
					name="media"
					width="400"
					height="200"
					autoPlay
					muted
					loop
				></video>
			</div>
			<div className=" flex flex-1 flex-contianer justify-center items-center relative z-11 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center max-sm:flex-col">
				<img
					className="object-contain relative z-10"
					alt="shoe collection"
					width={610}
					height={500}
					src={bigShoeImg}
				/>
				<div className=" flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%]">
					{shoes.map((shoe, index) => (
						<div key={shoe}>
							{' '}
							<ShoeCard
								imgURL={shoe}
								ChangeBigShoeImage={(shoe) => {
									setBigShoeImg(shoe);
								}}
								bigShoeImg={bigShoeImg}
							/>
							{/* <img src={shoe.thumbnail} />{' '} */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;

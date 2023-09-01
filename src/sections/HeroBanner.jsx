import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import { BannerImage, BannerDesktop } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const HeroBanner = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home"
			className="w-full gap-10 flex  full-scr-container flex-col justify-center min-h-screen "
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
					<div className="flex w-full md:text-center absolute flex-col bottom-[2rem] md:gap-6 px-4  ">
						{' '}
						<h1 className="mt-10 main-heading max-sm:text-[42px]  z-10 leading-0 font-black">
							{' '}
							BUY 2, GET 25% OFF
						</h1>{' '}
						<p>Nike Members, use code BTS23 on full-price styles. Exclusions apply.*</p>
						<div className="flex md:justify-center">
							<Button label="Shop" iconURL={arrowRight} />
							<Button label="*Promo terms" />
						</div>
					</div>
				</div>

				<div className="flex w-full md:text-center  flex-col bottom-[2rem] md:gap-6 px-4  ">
					{' '}
					<h1 className="mt-10 font-palanquin max-sm:text-[42px] text-4xl z-10 leading-0 font-bold">
						{' '}
						FIRSTS TOGETHER
					</h1>{' '}
					<p>Back-to-school essentials to start strong and go further.</p>
					<div className="flex md:justify-center">
						<Button label="Shop Kids" iconURL={arrowRight} />
						<Button label="Shop All" />
					</div>
				</div>

				{/* firsts together */}

				<div className="flex justify-items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className="text-4xl font-palanquin font-bold">{stat.value}</p>
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
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
					{/* <img /> <img /> <img />{' '} */}
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

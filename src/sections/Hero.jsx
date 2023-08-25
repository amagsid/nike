import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

// import { bigShoe1 } from '../assets/images';
// import { bigShoe1 } from '../assets/images';

const Hero = () => {
	return (
		// <section
		// 	id="home"
		// 	className="w-full flex max-container gap-10 xl:flex-row flex-col justify-center min-h-screen border-2 border-red-500 p-2 items-center"
		// >
		// 	<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
		// 		<p className="text-xl font-montserrat text-coral-red"> Our summer collection </p>
		// 		<div className=" flex  flex-col justify-center items-start mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
		// 			<h1 className=" font-bold">
		// 				{' '}
		// 				<span> The new </span> <br />{' '}
		// 			</h1>
		// 			<p className="leading-[150px] max-sm:text-[72px] text-[13rem]  text-coral-red ">
		// 				BLA
		// 				<br />
		// 				<span className="font-arizonia">Z</span>ER{' '}
		// 			</p>{' '}
		// 			<p className="font-bold ">
		// 				{' '}
		// 				since <span className="font-arizonia"> '77 </span>
		// 			</p>
		// 		</div>

		// 		<Button label="Shop now" icon={arrowRight}>
		// 			{' '}
		// 		</Button>
		// 		<div className="   w-full flex justify-start flex-wrap mt-20 gap-16 ">
		// 			{statistics.map((stat) => (
		// 				<div key={stat.label}>
		// 					{' '}
		// 					<p>{stat.value} </p> <p>{stat.label} </p>{' '}
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		// </section>
		<section
			id="home"
			className="w-full gap-10 flex xl:flex-row max-container flex-col justify-center min-h-screen  border-2 border-red-500 p-2"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
				<p className="text-xl font-montserrat text-coral-red"> Our summer collection </p>
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] z-10 max-sm:leading-[82px] font-bold">
					{' '}
					<span className="xl:bg-white xl:whitespace-nowrap relative z-11 pr-10">
						{' '}
						The new arrival{' '}
					</span>{' '}
					<br /> <span className="text-coral-red inline-block mt-3 "> Nike</span> shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					{' '}
					Discover stylish Nike arrivals, quality comfort and innovations for your active
					life
				</p>
				<Button label="Shop now" icon={arrowRight} />

				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
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
			<div className=" flex flex-1 flex-contianer justify-center items-center relative z-11 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					className="object-contain relative z-10"
					alt="shoe collection"
					width={610}
					height={500}
					src={bigShoe1}
				/>
				<div className=" flex justify-center align-center">
					{/* <img /> <img /> <img />{' '} */}
					{shoes.map((shoe, index) => (
						<div key={shoe}>
							{' '}
							<ShoeCard imgURL={shoe} ChangeBigShoeImage={() => {}} bigShoeImg="" />
							{/* <img src={shoe.thumbnail} />{' '} */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;

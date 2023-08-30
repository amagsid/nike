import Button from '../components/Button';
import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
	return (
		<section className="flex justify-center items-center max-m:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img className="object-contain w-full" width={773} height={687} src={offer} />
			</div>

			{/* text div */}
			<div className="flex flex-1  flex-col items-start  ">
				<h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
					<span className="text-coral-red">Summer </span> discounts
				</h2>
				<p className=" mt-6 info-text lg:max-w-l leading-7">
					Embark on a shopping journey that redefines your experience with unbeatable
					deals. From premier selections to incredible savings, we offer unparalleled
					value that sets us apart.
				</p>
				<p className="mt-6 lg:max-w-l info-text">
					Navigate a realm of possibilities designed to fulfill your unique desires,
					surpassing the loftiest expectations. Your journey with us is nothing short of
					exceptional.
				</p>
				<div className="mt-11 flex gap-4 w-full flex-wrap max-lg:justify-center">
					{' '}
					<Button label="Shop now" iconURL={arrowRight} />{' '}
					<Button
						label="Learn more"
						BgColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;

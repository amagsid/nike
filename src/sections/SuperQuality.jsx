import { shoe8 } from '../assets/images/index';
import Button from '../components/Button';

function SuperQuality() {
	return (
		<section id="about-us">
			<div className="flex max-container max-lg:flex-col max-lg:items-center  justify-center gap-4">
				{' '}
				<div className="flex flex-1  flex-col items-start  ">
					<h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
						{' '}
						We Provide you <span className="text-coral-red">Super Quality </span> Shoes
					</h2>
					<p className=" mt-6 info-text lg:max-w-l leading-7">
						{' '}
						Ensuring premium comfort and style, our maticulisly crafted footwear is
						designed to elavate your experience , providing you with unmatched quality,
						innovation, and a touch of elegenace
					</p>
					<p className="mt-6 lg:max-w-l info-text">
						{' '}
						Our dedicatiion to detail and excellence ensures your satisfaction
					</p>
					<div className="mt-11 flex w-full max-lg:justify-center">
						{' '}
						<Button label="view details" />{' '}
					</div>
				</div>
				<div>
					{' '}
					<img
						className="object-contain"
						src={shoe8}
						alt="shoe8"
						width={570}
						height={522}
					/>{' '}
				</div>
			</div>
		</section>
	);
}

export default SuperQuality;

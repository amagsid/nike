import Button from '../components/Button';

const Subscribe = () => {
	return (
		<section
			className="max-container flex flex-col justify-between items-center max-lg:flex-col gap-10"
			id="contact-us"
		>
			<h3 className="text-4xl leading-[68px] font-palanquin font-bold">
				Sign up and get <span className="text-coral-red"> 10%</span> on your first opurchase
			</h3>

			<div className="lg:max-w-[70%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
				<input type="text" placeholder="email@example.com" className="input" />
				<div className="flex  items-center max-sm:justify-end max-sm:w-full  ">
					{' '}
					<Button label="Sign Up" fullWidth />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;

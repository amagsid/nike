const Button = ({ label, icon }) => {
	return (
		<button className="flex justify-center items-center gap-2 rounded-full text-white bg-coral-red font-montserrat px-7 py-4 border border-coral-red text-lg leading-none">
			{label}

			<img className="ml-2 rounded-full w-5 h-5" src={icon} alt="arrow right icon" />
		</button>
	);
};

export default Button;

const Button = ({ label, iconURL }) => {
	return (
		<button className="flex justify-center items-center gap-2 rounded-full text-white bg-coral-red font-montserrat px-7 py-4 border border-coral-red text-lg leading-none">
			{label}

			{iconURL ? (
				<img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow right icon" />
			) : (
				<div></div>
			)}
		</button>
	);
};

export default Button;

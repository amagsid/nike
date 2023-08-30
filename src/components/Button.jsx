const Button = ({ label, iconURL, BgColor, textcolor, borderColor }) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 rounded-full   font-montserrat px-7 py-4 border  text-lg leading-none

			${
				BgColor
					? `${BgColor} ${textcolor} ${borderColor}`
					: `border-coral-red  bg-coral-red text-white  `
			}
			
			
			
			`}
		>
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

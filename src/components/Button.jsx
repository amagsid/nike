const Button = ({ label, iconURL, BgColor, textcolor, borderColor, fullWidth }) => {
	return (
		<button
			className={`flex items-center tracking-tight rounded-full font-montserrat font-normal px-5 py-2.5 text-md max-sm:text-sm text-green-100 max-sm:px-5 max-sm:py-  leading-none

			${
				BgColor
					? `${BgColor} ${textcolor} ${borderColor}`
					: `border-coral-red  bg-coral-red text-white  `
			}

			${fullWidth && `w-full`}
			
			
			
			`}
		>
			{label}

			{/* {iconURL ? (
				<img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow right icon" />
			) : (
				<div></div>
			)} */}
		</button>
	);
};

export default Button;

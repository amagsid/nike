import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className=" flex flex-col justify-center items-center">
			<img className="rounded-full object-vover w-[120px] h-[120px]  " src={imgURL} />
			<div className=" mt-6 text-center max-w-sm info-text ">{feedback} </div>
			<div className=" mt-3  gap-2.5 flex justify-center items-center">
				{' '}
				<img className=" object-contain m-0" width={24} src={star} />
				<p className=" text-xl font-montserrat text-slate-gray  ">{rating} </p>
			</div>
			<h3 className=" mt-1 font-palanquin text-3xl text-center font-bold  ">
				{customerName}{' '}
			</h3>
		</div>
	);
};

export default ReviewCard;

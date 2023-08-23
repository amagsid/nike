import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const Hero = () => {
	return (
		<section id="home" className="w-full gap-10 flex xl:flex-row max-container flex-col justify-center min-h-screen  border-2 border-red-500 p-2">
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p> Our summer collection </p>
				<h1>
					{' '}
					<span> The new arrival </span> <br /> <span> Nike</span> shoes
				</h1>
				<p> Discover stylish Nike arrivals, quality comfort and innovations for your active life</p>
				<Button label="Shop now" icon={arrowRight}>
					{' '}
				</Button>
			</div>
		</section>
	);
};

export default Hero;

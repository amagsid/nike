import { useRef } from 'react';

import { believe, believe1, believe2 } from '../assets/images/index';
import { motion, useScroll, useTransform } from 'framer-motion';

function TedLasso() {
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		// offset: ['end end', 'end start'],
	});

	// const believe1position = useTransform(scrollYProgress, [0, 0.3], ['-500px', '20px']);
	const believe1position = useTransform(scrollYProgress, [0, 0.3], [-500, 20]);
	// const believe2positon = useTransform(scrollYProgress, [0, 0.3], ['500px', '-20px']);
	const believe2positon = useTransform(scrollYProgress, [0, 0.3], [500, -20]);
	const believeRotation = useTransform(scrollYProgress, [0.2, 0.6], [0, 20]);
	return (
		<section id="fc-richmond">
			{/* <div className="flex justify-center">
				<img width={800} src={believe} />
			</div> */}
			<motion.div
				ref={targetRef.current}
				style={{ rotate: believeRotation }}
				className="w-[70%] items-center mx-auto my-0 flex justify-center"
			>
				<motion.div
					style={{ translateX: believe1position }}
					className="relative left-[30px]"
				>
					{' '}
					<img width={320} src={believe1} />
				</motion.div>

				<motion.div
					style={{ translateX: believe2positon }}
					className="relative right-[30px]"
				>
					{' '}
					<img className=" scale-110" width={320} src={believe2} />{' '}
				</motion.div>
			</motion.div>
		</section>
	);
}

export default TedLasso;

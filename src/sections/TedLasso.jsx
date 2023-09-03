import { useRef } from 'react';

import { believe, believe1, believe2 } from '../assets/images/index';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

function TedLasso() {
	const targetRef = useRef();
	const x = useMotionValue(0);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	// const believe1position = useTransform(scrollYProgress, [0, 0.3], ['-500px', '20px']);
	const believe1position = useTransform(scrollYProgress, [0, 0.3], [-250, 20]);
	// const believe2positon = useTransform(scrollYProgress, [0, 0.3], ['500px', '-20px']);
	const believe2positon = useTransform(scrollYProgress, [0, 0.3], [250, -20]);
	const believeRotation = useTransform(scrollYProgress, [0.2, 0.6], [-5, 10]);
	return (
		<section id="fc-richmond  ">
			<motion.div
				ref={targetRef}
				// style={{ rotate: believeRotation, x }}
				className="overflow-hidden max-w-screen   items-center flex justify-center"
			>
				<motion.div style={{ translateX: believe1position }} className=" ">
					{' '}
					<img className="relative left-[11px]" width={200} src={believe1} />
				</motion.div>
				<motion.div style={{ translateX: believe2positon }} className=" ">
					{' '}
					<img className="relative right-[11px] scale-110" width={200} src={believe2} />
				</motion.div>
			</motion.div>
		</section>
	);
}

export default TedLasso;

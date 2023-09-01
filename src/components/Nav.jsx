import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
	return (
		<header className="flex items-center px-8  z-12 w-full">
			<nav className=" h-[50px] w-full flex items-center justify-between ">
				<a href="/">
					{' '}
					<img
						// className="absolute left-2 top-[-16px]"
						width={90}
						height={60}
						alt="Logo"
						src={headerLogo}
					/>{' '}
				</a>

				<ul className=" flex items-between gap-6 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							{' '}
							<a
								className="font-oswald tracking-wider font-normal text-md "
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div>
					<h1 className="max-lg:hidden">search</h1>
				</div>
				<div className=" hidden max-lg:block">
					<img height={25} width={25} alt={hamburger} src={hamburger} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;

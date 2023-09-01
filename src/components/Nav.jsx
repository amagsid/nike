import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
	return (
		<header className="padding-x  z-10 w-full">
			<nav className=" h-[50px] flex justify-between items-center max-container">
				<a href="/">
					{' '}
					<img width={100} height={60} alt="Logo" src={headerLogo} />{' '}
				</a>
				<ul className="flex-1 flex justify-end items-between gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							{' '}
							<a
								className="font-montserrat leading-normal text-lg text-slate-gray"
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className=" hidden max-lg:block">
					<img height={25} width={25} alt={hamburger} src={hamburger} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;

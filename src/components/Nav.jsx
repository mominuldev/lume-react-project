import Logo from "../assets/site-logo.png";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
	// Correct destructuring of useState
	const [toggleMenu, setToggleMenu] = useState(false);

	console.log(toggleMenu);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu); // Toggle the menu state
		console.log(toggleMenu);
	};

	return (
		<>
			<header className="pt-[58px] pb-[18px] md:py-10 absolute w-full top-0 left-0 z-40">
				<div className="container">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-[50px] 2xl:gap-[100px]">
							<div>
								<img src={Logo.src} alt="site logo" />
							</div>
							<nav
								className={`${
									toggleMenu ? "block" : "hidden"
								} absolute w-full top-[100%] lg:block left-0 bg-[#051413] px-[2rem] md:static md:bg-transparent md:px-0`}
							>
								<ul className="flex flex-col py-5 md:flex-row md:py-0 space-y-4 md:space-y-0 md:space-x-8 container">
									<li>
										<a
											href="/"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="/about"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="/pricing"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											Pricing
										</a>
									</li>
									<li>
										<a
											href="/docs"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											Docs
										</a>
									</li>
									<li>
										<a
											href="/contact"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											Contact
										</a>
									</li>

									<li>
										<a
											href="/sia"
											className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-gray-300"
										>
											❤️ SIA
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div className="flex items-center space-x-5 hidden lg:block">
							<a
								href="#"
								className="text-[#F8F8F8] font-medium text-lg"
							>
								Sign In
							</a>
							<Button label="Get 1TB for free → " url="#" />
						</div>

						<div className="lg:hidden flex items-center space-x-4">
							<Button label="Sign In → " size="sm" url="#" />
							<div
								className="relative cursor-pointer" // Added cursor for better UX
								onClick={handleToggleMenu}
							>
								<span className="block w-6 h-0.5 bg-white my-1.5"></span>
								<span className="block w-6 h-0.5 bg-white my-1.5"></span>
								<span className="block w-6 h-0.5 bg-white my-1.5"></span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Nav;

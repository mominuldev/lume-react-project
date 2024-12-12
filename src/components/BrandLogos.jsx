const logos = [
	{
		id: 1,
		image: "./images/brand-logo-1.png",
	},
	{
		id: 2,
		image: "./images/brand-logo-2.png",
	},
	{
		id: 3,
		image: "./images/brand-logo-3.png",
	},
	{
		id: 4,
		image: "./images/brand-logo-1.png",
	},
	{
		id: 5,
		image: "./images/brand-logo-2.png",
	},
	{
		id: 6,
		image: "./images/brand-logo-3.png",
	},
];

const BrandLogos = () => {
	return (
		<div className="flex flex-wrap gap-7 md:gap-10 flex-2 items-center justify-start md:justify-between">
			{logos.map((logo) => (
				<img key={logo.id} src={logo.image} alt="brand logo" />
			))}
		</div>
	);
};

export default BrandLogos;

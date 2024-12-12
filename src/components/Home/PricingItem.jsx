import Button from "../Button";

const PricingItem = ({ items }) => {
	const {
		title,
		description,
		price,
		features,
		buttonText,
		url,
		buttonStyle,
	} = items;

	return (
		<div>
			<h3 className="text-[#F8F8F8] text-[21px] md:text-[40px] font-medium leading-10 mb-3 mb:mb-1">
				{title}
			</h3>
			<p className="text-[#F8F8F8] text-[17px] md:text-[21px] font-medium mb-2 mb:mb-6">
				{description}
			</p>

			<h4 className="text-[#F8F8F8] text-[21px] md:text-[40px] font-medium flex items-center gap-2 mb-3 md:mb-5">
				${price}{" "}
				<span className="text-[15px] md:text-base">/month</span>
			</h4>

			<ul className="mb-5 md:mb-11">
				{features.map((feature) => (
					<li
						key={feature.id}
						className="flex items-center gap-2 md:gap-4 text-[#E9EBEA] text-[13px] md:text-lg leading-8"
					>
						<img src={feature.icon} alt="user icon" />
						<span>{feature.text}</span>
					</li>
				))}
			</ul>

			<Button label={buttonText} url={url} style={buttonStyle} />
		</div>
	);
};

export default PricingItem;

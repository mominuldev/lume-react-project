import React from "react";

const Heading = ({
	title,
	highligtText,
	align = "text-center",
	description,
}) => {
	return (
		<div className={`mb-8 md:mb-[60px] ${align}`}>
			<h2
				className={`text-[28px] 2xl:text-[60px] md:text-5xl sm:text-4xl font-medium mb-3 md:mb-[36px] text-white leading-tight`}
			>
				{title} <span className="underline">{highligtText}</span>
			</h2>

			{description && (
				<p className="text-[#BDC2C1] text-base md:text-xl">
					{description}
				</p>
			)}
		</div>
	);
};

export default Heading;
const Button = ({ label, url, style, size = "md" }) => {
	return (
		<a
			href={url}
			className={`inline-flex text-[#F8F8F8] rounded-full border border-transparent bg-[#0D2D2A] text-[13px] md:text-lg font-medium transition ease-in-out duration-300 hover:bg-white hover:text-[#0D1D1C]
                ${
					style === "outline"
						? "border !border-white bg-transparent hover:bg-white hover:text-black"
						: style === "btn-light"
						? "!bg-white !text-[#0D1D1C] hover:!bg-transparent hover:!text-white !border-white"
						: style === "gray"
						? "bg-[#E4E0D4] text-[#0D1D1C] hover:bg-[#0D2D2A] hover:text-white"
						: style === "light"
						? "bg-white text-[#0D1D1C] hover:bg-[#0D2D2A] hover:text-white"
						: ""
				}
				
				${
					size === "sm"
						? "py-2 px-6 text-[13px] leading-none"
						: size === "lg"
						? "text-xl"
						: "py-[11px] px-4 lg:py-4 lg:px-6"
				}

				`}
		>
			{label}
		</a>
	);
};

export default Button;

interface ActionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
}

export default function ActionButton({
	children,
	className,
	variant = "primary",
	size = "medium",
	...props
}: ActionButtonProps) {
	const baseStyles = "group flex items-center";
	const variantStyles = {
		primary: {
			bracket: "text-sm font-bold text-[#AD1AAF]",
			button: "font-medium text-white bg-[#AD1AAF] hover:bg-[#8A1589] transition-colors duration-300",
		},
		secondary: {
			bracket: "text-sm font-bold text-[#AD1AAF]",
			button: "border border-[#AD1AAF] font-medium text-white bg-transparent hover:bg-gray-700 transition-colors duration-300",
		},
	};

	const sizeStyles = {
		small: {
			bracket: "text-xs",
			button: "px-2 py-0.5 text-xs",
		},
		medium: {
			bracket: "text-sm",
			button: "px-3 py-1 text-xs",
		},
		large: {
			bracket: "text-base",
			button: "px-4 py-2 text-sm",
		},
	};

	return (
		<button className={`${baseStyles} ${className || ""}`} {...props}>
			<span
				className={`${variantStyles[variant].bracket} ${sizeStyles[size].bracket}`}
			>
				[{" "}
			</span>
			<span
				className={`${variantStyles[variant].button} ${sizeStyles[size].button}`}
			>
				{children}
			</span>
			<span
				className={`${variantStyles[variant].bracket} ${sizeStyles[size].bracket}`}
			>
				{" "}
				]
			</span>
		</button>
	);
}

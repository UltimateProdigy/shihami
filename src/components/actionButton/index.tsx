export default function ActionButton({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={className}>
			<button className="group flex items-center text-white">
				<span className="text-sm font-bold text-[#AD1AAF]">[ </span>
				<span className="px-3 py-1 font-medium text-xs bg-[#AD1AAF] hover:bg-[#AD1AAF] transition-colors duration-300">
					{children}
				</span>
				<span className="text-sm font-bold text-[#AD1AAF]"> ]</span>
			</button>
		</div>
	);
}

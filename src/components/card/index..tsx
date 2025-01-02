export default function Card({
	img,
	title,
	description,
	className,
}: {
	img: string;
	title: string;
	description: string;
	className?: string;
}) {
	return (
		<div
			className={`bg-white/10 backdrop-blur-md rounded-[40px] p-6 flex flex-col items-center text-center shadow-lg border-t-[2px] border-b-[2px] border-t-gray-400 border-b-gray-400 w-[210px] h-[280px] ${className}`}
		>
			<img
				src={img}
				alt="card"
				className="w-full h-auto rounded-xl mb-4"
			/>
			<div className="w-full">
				<h3 className="mb-2 font-[20px]">{title}</h3>
				<p className="font-[20px]">{description}</p>
			</div>
		</div>
	);
}

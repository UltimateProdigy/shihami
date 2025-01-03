import { instructions } from "./data";

export default function Instructions() {
	return (
		<section className="mt-[200px] px-4 max-w-7xl mx-auto">
			<h2 className="text-3xl text-center mb-12">How it works</h2>
			<div className="flex flex-wrap gap-[100px] justify-center mt-6 relative">
				{instructions.map((data, index) => (
					<div key={data.description} className="relative">
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 h-[50px] w-[50px] p-3 rounded-full flex items-center justify-center">
								<img
									src={data.img}
									alt={data.description}
									className="w-6 h-6 object-contain"
								/>
							</div>
							<p className="mt-4">{data.description}</p>
						</div>
						{index < instructions.length - 1 && (
							<svg
								width="132"
								height="12"
								viewBox="0 0 132 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute font-thin top-5 -right-[116px] hidden md:block"
							>
								<path
									d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7L1 5ZM131.773 6L126 0.226497L120.226 6L126 11.7735L131.773 6ZM7.25 7C7.80228 7 8.25 6.55228 8.25 6C8.25 5.44772 7.80228 5 7.25 5V7ZM19.75 5C19.1977 5 18.75 5.44772 18.75 6C18.75 6.55228 19.1977 7 19.75 7V5ZM32.25 7C32.8023 7 33.25 6.55228 33.25 6C33.25 5.44772 32.8023 5 32.25 5V7ZM44.75 5C44.1977 5 43.75 5.44772 43.75 6C43.75 6.55228 44.1977 7 44.75 7V5ZM57.25 7C57.8023 7 58.25 6.55228 58.25 6C58.25 5.44772 57.8023 5 57.25 5V7ZM69.75 5C69.1977 5 68.75 5.44772 68.75 6C68.75 6.55228 69.1977 7 69.75 7V5ZM82.25 7C82.8023 7 83.25 6.55228 83.25 6C83.25 5.44772 82.8023 5 82.25 5V7ZM94.75 5C94.1977 5 93.75 5.44772 93.75 6C93.75 6.55228 94.1977 7 94.75 7V5ZM107.25 7C107.802 7 108.25 6.55228 108.25 6C108.25 5.44772 107.802 5 107.25 5V7ZM119.75 5C119.198 5 118.75 5.44772 118.75 6C118.75 6.55228 119.198 7 119.75 7V5ZM1 7L7.25 7V5L1 5L1 7ZM19.75 7L32.25 7V5L19.75 5V7ZM44.75 7L57.25 7V5L44.75 5V7ZM69.75 7L82.25 7V5L69.75 5V7ZM94.75 7L107.25 7V5L94.75 5V7ZM119.75 7L126 7V5L119.75 5V7Z"
									fill="white"
								/>
							</svg>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

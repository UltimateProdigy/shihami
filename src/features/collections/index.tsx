import { collections } from "./data";

export const Collections = () => {
	return (
		<section className="mt-[200px]">
			<div className="flex flex-col items-center text-center">
				<p className="text-[15px] bg-gradient-to-r from-white to-[#AD1AAF] text-transparent bg-clip-text">
					Explore Our Newly Released NFT Collections
				</p>
				<p className="text-[50px] mt-5">Our Collection</p>
			</div>
			<div className="flex flex-wrap justify-center mt-10 gap-5">
				{collections.map((collection) => (
					<div
						key={collection.id}
						className="border border-[#AD1AAF] w-[250px] bg-[#1B1B1B] rounded-xl p-4 hover:transform hover:scale-105 transition-transform duration-300"
					>
						<div className="relative">
							<img
								src={collection.image}
								alt={`Collection ${collection.id}`}
								className="w-full h-[300px] object-cover rounded-lg"
							/>
							<div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
								<h3 className="text-xl font-bold">
									{collection.name}
								</h3>
								<div className="flex justify-between items-center mt-2">
									<div>
										<p className="text-sm text-gray-400">
											Floor Price
										</p>
										<p className="font-semibold">
											{collection.floorPrice} ETH
										</p>
									</div>
									<div className="text-right">
										<p className="text-sm text-gray-400">
											Volume
										</p>
										<p className="font-semibold">
											{collection.volume} ETH
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

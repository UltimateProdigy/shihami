import { wallets } from "./data";

export default function Support() {
	return (
		<section className="mt-[150px]">
			<div className="flex flex-col items-center justify-center">
				<p className="text-[15px] bg-gradient-to-r from-white to-[#AD1AAF] text-transparent bg-clip-text">
					Trade With World's Most Trusted And Fastest Wallets
				</p>
				<p className="text-[50px] mt-5">Wallets We Support</p>
			</div>
			<div className="flex flex-wrap gap-10 justify-center mt-6">
				{wallets.map((wallet) => (
					<div className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300">
						<div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
							<img
								src={wallet.img}
								alt={wallet.name}
								className="w-12 h-12 object-contain"
							/>
						</div>
						<p className="mt-3 font-medium">{wallet.name}</p>
					</div>
				))}
			</div>
		</section>
	);
}

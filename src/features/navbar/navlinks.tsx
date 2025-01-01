export default function Navlinks() {
	const links = [
		{ id: 1, name: "EXPLORE", href: "/" },
		{ id: 2, name: "TRENDING NFTs", href: "/trending" },
		{ id: 3, name: "AUDITIONED NFTs", href: "/auditioned" },
		{ id: 4, name: "INFLUENCERS", href: "/influencers" },
	];
	return (
		<div className="py-1 px-3 flex gap-4 bg-gradient-to-b from-purple-950 via-purple-950 to-[#140C1F]">
			{links.map((link) => (
				<div className="hover:bg-[#AD1AAF] px-4 py-2 rounded-md cursor-pointer transition-colors duration-300">
					<p className="text-white text-sm font-medium">
						{link.name}
					</p>
				</div>
			))}
		</div>
	);
}

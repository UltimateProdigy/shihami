export interface Collection {
	id: number;
	image: string;
	name: string;
	floorPrice: number;
	volume: number;
}

export const collections: Collection[] = [
	{
		id: 1,
		image: "/nft1.svg",
		name: "Bored Ape Collection",
		floorPrice: 70.2,
		volume: 1205.4,
	},
	{
		id: 2,
		image: "/nft2.svg",
		name: "Crypto Punks",
		floorPrice: 45.5,
		volume: 890.2,
	},
	{
		id: 3,
		image: "/nft3.svg",
		name: "Doodles Collection",
		floorPrice: 23.8,
		volume: 420.6,
	},
	{
		id: 4,
		image: "/nft4.svg",
		name: "Azuki Collection",
		floorPrice: 32.1,
		volume: 650.3,
	},
	{
		id: 5,
		image: "/nft5.svg",
		name: "Cool Cats NFT",
		floorPrice: 15.7,
		volume: 280.9,
	},
	{
		id: 6,
		image: "/nft6.svg",
		name: "Moonbirds",
		floorPrice: 28.4,
		volume: 520.8,
	},
	{
		id: 7,
		image: "/nft7.svg",
		name: "World of Women",
		floorPrice: 18.9,
		volume: 340.5,
	},
];

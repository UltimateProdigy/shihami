import { useRef } from "react";
import { TweenMax } from "gsap";
import { useEffect } from "react";
import Logo from "../../components/logo";
import Navlinks from "./navlinks";
import ActionButton from "../../components/actionButton";

export default function Navbar() {
	const NavbarRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		TweenMax.to(NavbarRef.current, {
			duration: 1,
			opacity: 1,
			ease: "power3.easeInOut",
			y: -20,
		});
	}, []);

	return (
		<div
			ref={NavbarRef}
			className="flex justify-between items-center px-10 pt-6"
		>
			<Logo />
			<Navlinks />
			<div className="flex gap-4">
				<ActionButton>Connect Wallet</ActionButton>
				<img className="w-8 mt-[-3px]" src="/user.svg" alt="user" />
			</div>
		</div>
	);
}

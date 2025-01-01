import ActionButton from "../../components/actionButton";
import Logo from "../../components/logo";
import Navlinks from "./navlinks";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center px-10 py-2">
			<Logo />
			<Navlinks />
			<div className="flex gap-4">
				<ActionButton>Connect Wallet</ActionButton>
				<img className="w-8 mt-[-3px]" src="/user.svg" alt="user" />
			</div>
		</div>
	);
}

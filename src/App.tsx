import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./App.css";
import Hero from "./features/hero";
import Support from "./features/support";
import Instructions from "./features/instructions";
import { Collections } from "./features/collections";

function App() {
	const sr = ScrollReveal({
		origin: "bottom",
		distance: "80px",
		duration: 2000,
		reset: false,
	});
	useEffect(() => {
		sr.reveal(".hero-section", {});
		sr.reveal(".support-section", { delay: 200 });
		sr.reveal(".instructions-section", { delay: 300 });
		sr.reveal(".collections-section", { delay: 400 });
		return () => sr.destroy();
	}, []);

	return (
		<div className="px-[51px]">
			<div className="hero-section">
				<Hero />
			</div>
			<div className="support-section">
				<Support />
			</div>
			<div className="instructions-section">
				<Instructions />
			</div>
			<div className="collections-section">
				<Collections />
			</div>
		</div>
	);
}

export default App;

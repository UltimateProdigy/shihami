import "./App.css";
import Hero from "./features/hero";
import Support from "./features/support";
import Instructions from "./features/instructions";
import { Collections } from "./features/collections";

function App() {
	return (
		<div className="px-[50px]">
			<Hero />
			<Support />
			<Instructions />
			<Collections />
		</div>
	);
}

export default App;

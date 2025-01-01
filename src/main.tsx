import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./features/layout/index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Layout>
			<App />
		</Layout>
	</StrictMode>
);

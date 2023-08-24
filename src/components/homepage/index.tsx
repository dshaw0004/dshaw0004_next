import React from "react";
import AboutSection from "./about";
import Contact from "./contact";

export default function HomePage(): React.JSX.Element {
	return (
		<>
			<AboutSection />
			<Contact />
		</>
	);
}

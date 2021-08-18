import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
	children?: Object;
	translations?: Array<string>;
}

const Layout: React.FC<LayoutProps> = ({ children, translations = [] }) => {
	console.log(translations);

	return (
		<div className="grid grid-cols-3 h-screen justify-between font-content antialiased">
			<div className="bleed"></div>
			<div className="global">
				<Header translations={translations} />
				<main className="mb-auto">{children}</main>
				<Footer />
			</div>
			<div className="bleed"></div>
			<style jsx>{`
				.grid {
					grid-template-columns: 1fr 1600px 1fr;
				}

				.bleed {
					background-color: #dfe3e8;
				}

				.global {
					max-width: 100vw;
				}

				@media (max-width: 1200px) {
					.global {
						max-width: 80vw;
					}
				}
			`}</style>
		</div>
	);
};

export default Layout;

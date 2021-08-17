import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
	return (
		<div className="grid grid-cols-3 h-screen justify-between font-content antialiased">
			<div className="bleed"></div>
			<div className="global">
				<Header />
				<main className="mb-auto">{children}</main>
				<Footer />
			</div>
			<div className="bleed"></div>
		</div>
	);
};

export default Layout;

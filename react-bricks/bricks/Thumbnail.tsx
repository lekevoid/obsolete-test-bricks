import React from "react";
import { types, Text, RichText } from "react-bricks";

const Thumbnail: types.Brick = () => {
	const { Bold, Highlight } = types.RichTextFeatures;

	return (
		<div className="p-6 text-center">
			<Text propName="title" renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>} placeholder="Type a title please" />
			<RichText
				propName="description"
				renderBlock={({ children }) => <p className="text-lg text-gray-500">{children}</p>}
				placeholder="Type a description"
				allowedFeatures={[Bold, Highlight]}
				renderHighlight={({ children }) => <span className="px-1 rounded bg-blue-200 text-blue-900">{children}</span>}
			/>
		</div>
	);
};

Thumbnail.schema = {
	name: "thumbnail",
	label: "Thumbnail",
	getDefaultProps: () => ({
		title: "Hello, world!",
		description: "Lorem ipsum dolor sit amet.",
	}),
	sideEditProps: [],
};

export default Thumbnail;

import React from "react";
import { types, Text, RichText } from "react-bricks";

const Thumbnail: types.Brick = () => {
	return (
		<div className="p-6 text-center">
			<Text propName="title" renderBlock={({ children }) => <h1>{children}</h1>} placeholder="Light up the World" />
			<RichText
				propName="description"
				renderBlock={({ children }) => <p className="text-lg text-gray-500">{children}</p>}
				placeholder="Type a description"
				allowedFeatures={[
					types.RichTextFeatures.Bold,
					types.RichTextFeatures.Highlight,
					types.RichTextFeatures.Code,
					types.RichTextFeatures.Link,
					types.RichTextFeatures.UnorderedList,
				]}
				renderHighlight={({ children }) => <span className="px-1 rounded bg-blue-200 text-blue-900">{children}</span>}
			/>
		</div>
	);
};

Thumbnail.schema = {
	name: "thumbnail",
	label: "Thumbnail",
	getDefaultProps: () => ({
		title: "Light up the World",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie lacinia posuere.",
	}),
	sideEditProps: [],
};

export default Thumbnail;

import React from "react";
import { types, Image, Text, RichText } from "react-bricks";
import CTA from "components/CTA";
import Tank from "components/Tank";

type CTAColors = "blue" | "red" | "teal";
type TextColors = "blue" | "white";
type ImagePlacement = "left" | "right";
type ImageAlignment = "top" | "middle" | "bottom";

interface HeroProps {
	cta: string;
	ctaColor: CTAColors;
	imageAlignment: ImageAlignment;
	imagePlacement: ImagePlacement;
	tagline: string;
	title: string;
	titleColor: TextColors;
	taglineColor: TextColors;
}

const Hero: types.Brick<HeroProps> = ({ ctaColor = "red", cta, imageAlignment, imagePlacement, taglineColor, titleColor }) => {
	let tankPaddingY = "py-36";
	let txtPadding = "py-0";

	switch (imageAlignment) {
		case "top":
			tankPaddingY = "pb-36";
			txtPadding = "pt-36";
			break;
		case "bottom":
			tankPaddingY = "pt-36";
			txtPadding = "pb-36";
			break;
	}

	return (
		<div className="flex items-center justify-start">
			<Tank className={`flex ${imagePlacement === "left" ? "flex-row" : "flex-row-reverse"} ${tankPaddingY}`}>
				<div className="hero_img flex w-6/12">
					<Image propName="hero_feature" alt="Feature" imageClassName="w-full" />
				</div>
				<div className={`hero_txt flex flex-wrap align-center content-center w-6/12 ${txtPadding}`}>
					<div className={`w-full flex-full text-${titleColor}`}>
						<Text propName="title" renderBlock={({ children }) => <h1>{children}</h1>} placeholder="Light up the World" />
					</div>
					<div className={`w-full flex-full text-${taglineColor}`}>
						<RichText
							propName="description"
							renderBlock={({ children }) => <p>{children}</p>}
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
					<CTA className={`bg-${ctaColor}`} href="/">
						<Text propName="cta" renderBlock={({ children }) => <>{children}</>} placeholder="Click here" />
					</CTA>
				</div>
			</Tank>
		</div>
	);
};

Hero.schema = {
	name: "hero",
	label: "Hero",
	getDefaultProps: () => ({
		title: "Light up the World",
		tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie lacinia posuere.",
		cta: "Click here",
	}),
	sideEditProps: [
		{
			name: "imagePlacement",
			label: "Image Placement",
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Select,
				options: [
					{ value: "left", label: "Left" },
					{ value: "right", label: "Right" },
				],
			},
		},
		{
			name: "imageAlignment",
			label: "Image Alignment",
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Select,
				options: [
					{ value: "top", label: "Top" },
					{ value: "middle", label: "Middle" },
					{ value: "bottom", label: "Bottom" },
				],
			},
		},
		{
			name: "titleColor",
			label: "Title Color",
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Select,
				options: [
					{ value: "blue", label: "Blue" },
					{ value: "white", label: "White" },
				],
			},
		},
		{
			name: "taglineColor",
			label: "Tagline Color",
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Select,
				options: [
					{ value: "blue", label: "Blue" },
					{ value: "white", label: "White" },
				],
			},
		},
		{
			name: "ctaColor",
			label: "CTA Color",
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Select,
				options: [
					{ value: "blue", label: "Blue" },
					{ value: "red", label: "Red" },
					{ value: "teal", label: "Teal" },
				],
			},
		},
	],
};

export default Hero;

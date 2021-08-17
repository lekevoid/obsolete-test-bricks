import { types } from "react-bricks";

const pageTypes: types.IPageType[] = [
	{
		name: "page",
		pluralName: "pages",
		defaultLocked: false,
		defaultStatus: types.PageStatus.Published,
		getDefaultContent: () => [],
	},
	{
		name: "post",
		pluralName: "posts",
		defaultLocked: true,
		defaultStatus: types.PageStatus.Draft,
		getDefaultContent: () => [],
	},
	{
		name: "redirect",
		pluralName: "redirects",
		defaultLocked: true,
		defaultStatus: types.PageStatus.Published,
		getDefaultContent: () => [],
	},
];

export default pageTypes;

import fs from "fs";

const folder = "./src/blogPosts/";
const getPostFileNames = (): Array<string> => {
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
	const slugs = markdownPosts.map((file) => file.replace(".mdx", ""));
	return slugs;
};

export function getPostMetaData(): Array<{
	frontmatter: {
		slug?: string | undefined;
		title?: string | undefined;
		description?: string | undefined;
		date?: string | undefined;
	};
	routeSlug: string;
}> {
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
	const slugs = markdownPosts.map((file) => file.replace(".mdx", ""));
	let metaData: {
		frontmatter: {
			slug?: string | undefined;
			title?: string | undefined;
			description?: string | undefined;
			date?: string | undefined;
		};
		routeSlug: string;
	}[] = [];
	slugs.map((slug) => {
		const frontMatter = getPostFrontMatter(slug);
		const obj = {
			frontmatter: frontMatter,
			routeSlug: slug,
		};
		metaData.push(obj);
	});
	return metaData;
}

export const getPostContent = (slug: string): string => {
	const file = `${folder}/${slug}.mdx`;
	const innerContent = fs.readFileSync(file, "utf8");
	return innerContent;
};

type extractDataTyping<T> = T extends "CONLY" | "FMONLY "
	? string
	: Array<string>;

export function extractData(
	text: string,
	returnedData: "FMONLY" | "CONLY" | "BOTH" = "FMONLY"
): extractDataTyping<typeof returnedData> {
	const matches = text.split("---");
	if (returnedData === "CONLY") {
		if (matches[2]) return matches[2];
		else return "no data";
	}

	if (returnedData === "FMONLY") return matches[1];
	return matches;
}

export function getPostAllData(slug: string): {
	frontmatter: {
		slug?: string;
		title?: string;
		description?: string;
		date?: string;
	};
	content: string;
} {
	const innerContent = getPostContent(slug);
	const matches = extractData(innerContent, "BOTH");
	const frontMatter = formatFrontMatter(matches[1]);
	return {
		frontmatter: frontMatter,
		content: matches[2],
	};
}

const formatFrontMatter = (data: string) => {
	let frontMatter: {
		[key: string]: string;
	} = {};
	let frontMatterTextArray = data.split("\r\n");

	frontMatterTextArray = frontMatterTextArray.filter((seg) => seg);
	frontMatterTextArray.map((d: string) => {
		const newText = d.replace(" ", "");
		const newTextArray = newText.split(":");

		frontMatter[newTextArray[0]] = newTextArray[1];
	});
	return frontMatter;
};

export const getPostFrontMatter = (
	slug: string
): {
	slug?: string;
	title?: string;
	description?: string;
	date?: string;
} => {
	const innerContent = getPostContent(slug);
	const matches = extractData(innerContent, "FMONLY");
	if (typeof matches == "string") {
		const frontMatter = formatFrontMatter(matches);

		return frontMatter;
	} else {
		return {
			slug: "demo slug",
			title: "demo title",
			description: "some description for demo",
			date: "69/69/69",
		};
	}
};
export default getPostFileNames;

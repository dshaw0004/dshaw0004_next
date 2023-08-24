import { getPostAllData, getPostMetaData } from "@/hook/getBlogData";
import globalcss from "@/styles/globalStyles.module.css";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import slugcss from "./slug.module.css";
// import { useRouter } from "next/navigation";

export async function generateStaticParams() {
	const metaData = getPostMetaData();
	return metaData.map((mata) => ({
		slug: mata.routeSlug,
	}));
}

export default function IndividualBlogs(props: { params: { slug: any } }) {
	const slug = props.params.slug;
	const alldata = getPostAllData(slug);
	// const router = useRouter();

	return (
		<>
			<header className={`${slugcss.header}`}>
				<Link href={"/blogs"} type="button" className={`${slugcss.backBtn}`}>
					&lt;--
				</Link>
				<h1 className={`${globalcss.title} ${slugcss.heading}`}>
					{alldata.frontmatter.title}
				</h1>
			</header>
			<main className={`${slugcss.mainContent} mx-auto `}>
				<p className={`my-2`}>
					published on : <b>{alldata.frontmatter?.date}</b>
				</p>
				<Markdown>{alldata.content}</Markdown>
			</main>
		</>
	);
}

import { getPostMetaData } from "@/hook/getBlogData";
import Link from "next/link";
import blogcss from "./blog.module.css";

export default function Blogs() {
	const postMetaData = getPostMetaData();
	return (
		<main className={`${blogcss.blogPage}`}>
			my blogs
			<ul>
				{postMetaData.map(({ frontmatter, routeSlug }) => (
					<li
						key={routeSlug}
						className={`${blogcss.blogLinkCard} px-4 py-2 rounded-lg`}
					>
						<Link href={"/blogs/" + routeSlug}>
							<p className="text-gray-300 text-sm">{frontmatter.date}</p>
							<strong className="text-2xl"> {frontmatter?.title}</strong>
							<p className="text-md text-gray-200">{frontmatter.description}</p>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dshaw0004",
	description: "my personal website",
	applicationName: "dshaw0004",
	authors: [{ name: "dshaw0004", url: "https://dshaw0004.netlify.com" }],
	keywords: ["dshaw0004", "dipankar shaw"],
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#123456" },
		{ media: "(prefers-color-scheme: light)", color: "#faebd7" },
	],
	colorScheme: "dark",
	creator: "dshaw0004",
	openGraph: {
		type: "website",
		url: "https://dshaw0004.vercel.com",
		title: "dshaw0004",
		description: "",
		siteName: "dshaw0004",
		images: [
			{
				url: "./next.svg",
			},
		],
	},
	appleWebApp: {
		capable: true,
		title: "dshaw0004",
		statusBarStyle: "black-translucent",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

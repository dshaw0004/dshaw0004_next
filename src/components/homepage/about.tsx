import Image from "next/image";
import React from "react";
import image from "../../../public/next.svg";
import "./homepage.css";

export default function AboutSection() {
	return (
		<>
			<section id="about" className={`section aboutSection`}>
				<div>
					<Image src={image} alt="placeholder" className={`img`} />
				</div>
				<div>
					<h2 className="title">
						<em>About Me</em>
					</h2>
					<p className={`bio`}>
						Hi, my name is <strong>Dipankar Shaw</strong>, <wbr /> I&apos;m a{" "}
						<strong>Web Developer</strong> with a good knowledge in{" "}
						<strong>NodeJs</strong> and <strong>Python</strong>.<wbr /> Over the
						time I developed a skill set in a range of technologies and
						frameworks, including React, ExpressJs, Firebase and SCSS.
						<wbr /> Where I really value clean and readable code. Also I&apos;m
						passionate about UX / UI.
					</p>
				</div>
			</section>
		</>
	);
}

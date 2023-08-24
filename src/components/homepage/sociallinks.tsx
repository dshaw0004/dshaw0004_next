import React from "react";
import "./homepage.css";
export default function SocialLinks(): React.JSX.Element {
	return (
		<div className="contactInfo">
			<div>
				<div>
					<i className="icon">{/* <GithubIcon /> */}</i>
					<a
						href="http://github.com/dshaw0004"
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						Github
					</a>
				</div>
				<div>
					<i className="icon">{/* <LinkedinIcon /> */}</i>
					<a
						href="https://www.linkedin.com/in/dshaw0004"
						target="_blank"
						rel="nofollow"
					>
						LinkedIn
					</a>
				</div>
				<div>
					<i className="icon">{/* <TwitterIcon /> */}</i>
					<a
						href="https://twitter.com/dshaw0004"
						target="_blank"
						rel="nofollow"
					>
						Twitter
					</a>
				</div>
				<div>
					<i className="icon">{/* <DevIcon height="1rem" width="1rem" /> */}</i>
					<a href="https://dev.to/dshaw0004" rel="nofollow" target="_blank">
						Dev.to
					</a>
				</div>
				<div>
					<i className="icon">{/* <ReplitIcon /> */}</i>
					<a href="https://replit.com/@dsx4" rel="nofollow" target="_blank">
						Replit
					</a>
				</div>
				<div>
					<i className="icon">{/* <MailIcon /> */}</i>
					<a
						href="mailto:dipankarshaw692+fromsite@gmail.com"
						rel="nofollow"
						target="_blank"
					>
						Mail
					</a>
				</div>
			</div>
		</div>
	);
}

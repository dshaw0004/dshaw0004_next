import React from "react";
import "./homepage.css";
import SocialLinks from "./sociallinks";
export default function Contact(): React.JSX.Element {
	return (
		<div className="contactSection section" id="contact">
			<h2 className="title">
				<em>Contact Me</em>
			</h2>
			<div className="message_area" aria-labelledby="dm-form-heading">
				<h3 id="dm-form-heading text-center">
					send me message directly from here
				</h3>
				<form>
					<label htmlFor="message">Enter your message</label>
					<textarea
						name="message"
						id="message"
						cols={30}
						rows={10}
						placeholder="enter your message"
					></textarea>
					<label htmlFor="send-name"> Enter your name</label>
					<input
						type="text"
						name="sender-name"
						id="send-name"
						placeholder="enter your name"
					/>
					<label htmlFor="sender-email"> Enter your e-mail</label>
					<input
						type="email"
						name="sender-email"
						id="sender-email"
						placeholder="enter your email"
					/>
					<div>
						<input type="submit" value="submit" />
					</div>
				</form>
			</div>

			<SocialLinks />

			<div className="textCenter chat_bot_link_container">
				<b>Want a different way to talk to me</b>
				<br />
				<strong className="chat_bot">
					<a
						href="https://telegram.me/dshawpersonalbot"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="link to my telegram chat bot"
					>
						chat with my bot
					</a>
				</strong>
			</div>
		</div>
	);
}

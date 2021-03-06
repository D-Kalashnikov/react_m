import React from "react";
import "./App.scss";
import { TdIconHome, DetailIcon } from "@app/media";

function App() {
	return (
		<div className="App">
			<p>svg inline</p>
			<p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="52"
					height="52"
					viewBox="0 0 52 52"
					fill="none"
				>
					<path
						d="M26 4.875C14.3521 4.875 4.875 14.3521 4.875 26C4.875 37.6479 14.3521 47.125 26 47.125C37.6479 47.125 47.125 37.6479 47.125 26C47.125 14.3521 37.6479 4.875 26 4.875ZM24.1719 8.22656C24.2417 8.22022 24.3052 8.23291 24.375 8.22656V26.6602L24.832 27.168L37.4766 39.7617C34.3789 42.3516 30.3672 43.875 26 43.875C16.1104 43.875 8.125 35.8896 8.125 26C8.125 16.7261 15.1455 9.14062 24.1719 8.22656ZM27.625 8.22656C36.2134 9.00098 42.999 15.7866 43.7734 24.375H27.625V8.22656ZM29.9609 27.625H43.7734C43.437 31.3511 42.0278 34.7661 39.7617 37.4766L29.9609 27.625Z"
						fill="#DB4437"
					/>
				</svg>
			</p>

			<p>svg img src</p>
			<p>
				<img src={DetailIcon} />
			</p>
			<p>png img src</p>
			<p>
				<img src="./src/icons/detail/dtd-icon-home.png" />
				<img src={TdIconHome} alt="" />
			</p>
		</div>
	);
}

export default App;

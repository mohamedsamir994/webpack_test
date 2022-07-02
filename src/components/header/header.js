import "./style.css";
import logo from "../../assets/trustpilot-brandmark.png";

function header() {
	const body = document.body,
		header = document.createElement("header"),
		headerLogo = document.createElement("img");

	headerLogo.src = logo;
	header.appendChild(headerLogo);
	body.appendChild(header);
}

export default header;

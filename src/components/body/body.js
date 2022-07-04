function greet() {
	const body = document.body,
		greet = `Hello, World`,
		heading = document.createElement('h2');

	heading.innerText = greet;
	body.appendChild(heading);
}

export default greet;

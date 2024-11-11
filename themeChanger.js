const colors = {
	gray: "#31363f",
	white: "#FAF9F6",
	graydarker: "#222831",
	offwhite: "#EEEEEE",
}
// const headers = Array.from([
// 	document.getElementById("acessibilidade"),
// 	 document.getElementById("principal"),
// 	 document.getElementById("categoria")
// 	])
// 	console.log(headers)

let btnThemeDark = document.getElementById("theme-dark")
let btnThemeLight = document.getElementById("theme-light")

let searchbar = document.getElementById("searchbar")

// console.log(lightElements)

function checkCurrentTheme() {
	let currentTheme = localStorage.getItem("currentTheme")
	if (currentTheme === null) {
		setCurrentTheme("light")
		currentTheme = "light"
		return currentTheme
	} else return currentTheme === "light" ? "light" : "dark"
}
function setCurrentTheme(theme) {
	localStorage.setItem("currentTheme", theme)
}

function setDarkTheme() {
	const lightElements = Array.from(document.querySelectorAll(".lightdefault, .lightspecial"))
	searchbar.style.borderRadius = "4px"
	lightElements.forEach((element) => {
		// console.log(element,element.classList)
		if ([...element.classList].includes("lightspecial")) {
			// element.classList.add("darker")
			// element.classList.remove("lightspecial")
			element.classList.replace("lightspecial", "dark")
		} else {
			// 	element.classList.add("dark")
			// element.classList.remove("lightdefault")
			element.classList.replace("lightdefault", "darker")
		}
	})
	return setCurrentTheme("dark")
}
function setLightTheme() {
	const darkElements = Array.from(document.querySelectorAll(".dark, .darker"))
	searchbar.style.borderBottom = "1px solid var(--gray-dark)"
	searchbar.style.borderRadius = "0"
	darkElements.forEach((element) => {
		if ([...element.classList].includes("darker")) {
			// element.classList.remove("darker")
			// element.classList.add("lightdefault")
			element.classList.replace("darker", "lightdefault")
		} else {
			// element.classList.remove("dark")
			// element.classList.add("lightspecial")
			element.classList.replace("dark", "lightspecial")
		}
	})
	// headers.forEach(h =>{
	// 	h.classList.remove("dark","darker","lightspecial","lightdefault")
	// })
	// headers[0].classList.add("acessibilidadeTheme")
	// return setCurrentTheme("light")
	return setCurrentTheme("light")
}

btnThemeDark.addEventListener("click", (e) => {
	e.preventDefault()
	return setDarkTheme()
})

btnThemeLight.addEventListener("click", (e) => {
	e.preventDefault()
	return setLightTheme()
})

document.addEventListener("DOMContentLoaded", (e) => {
	const currentTheme = checkCurrentTheme()
	if (currentTheme === "dark") {
		setDarkTheme()
	} else {
		setLightTheme()
	}
})

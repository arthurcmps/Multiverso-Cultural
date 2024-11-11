let links = document.querySelectorAll("[ajax-link]")

let mainContent = document.querySelector("[mainContent]")
let contentContainer = document.querySelector("[contentContainer]")
// console.log(mainContent)

links.forEach((link) => {
	const path = link.getAttribute("href")
	link.addEventListener("click", (e) => {
		e.preventDefault()
		try {
			fetch(path)
				.then((res) => res.text())
				.then((html) => (contentContainer.innerHTML = html))
				.then((_) => {
					const currentTheme = checkCurrentTheme()
					if (currentTheme === "dark") {
						setDarkTheme()
					} else {
						setLightTheme()
					}
				})
		} catch (err) {
			console.error({ Error: err })
		}
	})
})

function setLightTheme() {
	const darkElements = Array.from(document.querySelectorAll(".dark, .darker"))
	searchbar.style.borderBottom = "1px solid var(--gray-dark)"
	searchbar.style.borderRadius = "0"
	darkElements.forEach((element) => {
		if ([...element.classList].includes("darker")) {
			element.classList.replace("darker", "lightdefault")
		} else {
			element.classList.replace("dark", "lightspecial")
		}
	})

	return setCurrentTheme("light")
}
function setDarkTheme() {
	const lightElements = Array.from(document.querySelectorAll(".lightdefault, .lightspecial"))
	searchbar.style.borderRadius = "4px"
	lightElements.forEach((element) => {
		if ([...element.classList].includes("lightspecial")) {
			element.classList.replace("lightspecial", "dark")
		} else {
			element.classList.replace("lightdefault", "darker")
		}
	})
	return setCurrentTheme("dark")
}

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

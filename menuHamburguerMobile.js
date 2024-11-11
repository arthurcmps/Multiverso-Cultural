let queryElem = (selector) => {
	let selection = document.querySelectorAll(selector)
	return selection.length > 1 ? selection : selection[0]
}

let principalElem = queryElem("#principal")
// let categoriaElem = queryElem(".categoria")
let toggleButton = queryElem(".menu-toggle")

document.addEventListener("DOMContentLoaded", function () {
	menuMobileHelper()

	window.addEventListener("resize", function () {
		menuMobileHelper()
		console.log('paoskdpasokdjas')
	})

	function menuMobileHelper() {
		if (window.matchMedia("(max-width: 886px)").matches) {
			principalElem.classList.replace("desktop", "mobile")
			if (principalElem.classList.contains("open") ) return
			else principalElem.classList.add("closed")
			
		} else {
			principalElem.classList.replace("mobile", "desktop")
			principalElem.classList.replace("closed", "open")
		}
	}

	let menuIsClosed = () => principalElem.classList.contains("closed")

	toggleButton.addEventListener("click", function () {
		if (menuIsClosed()) {
			return principalElem.classList.replace("closed", "open")
		} else {
			return principalElem.classList.replace("open", "closed")
		}
	})
})

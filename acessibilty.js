
const btnPlus = document.getElementById("btnPlus")
const btnMinus = document.getElementById("btnMinus")
const acessibilidadeElem = document.getElementById("acessibilidade")

let root = document.documentElement

let rootStyles = getComputedStyle(root)
let html = document.getElementsByTagName("html")[0]
btnPlus.addEventListener("click", function (e) {
    let currentSMSize = Number(rootStyles.getPropertyValue("--sm-txt").replace("rem", ""))
    let currentSize = Number(rootStyles.getPropertyValue("--txt-size").replace("rem", ""))
    let currentBIGSize = Number(rootStyles.getPropertyValue("--big-txt").replace("rem", ""))
    let newSizes = [
        ["--txt-size", (currentSize + 0.25).toString() + "rem"],
        ["--sm-txt", (currentSMSize + 0.25).toString() + "rem"],
        ["--big-txt", (currentBIGSize + 0.125).toString() + "rem"]

    ]
    if (currentSize === 2.5) return
    else return newSizes.map((element) => {
        html.style.setProperty(element[0], element[1])
    });
})

btnMinus.addEventListener("click", function (e) {
    let currentSMSize = Number(rootStyles.getPropertyValue("--sm-txt").replace("rem", ""))
    let currentSize = Number(rootStyles.getPropertyValue("--txt-size").replace("rem", ""))
    let currentBIGSize = Number(rootStyles.getPropertyValue("--big-txt").replace("rem", ""))
    let newSizes = [
        ["--txt-size", (currentSize - 0.25).toString() + "rem"],
        ["--sm-txt", (currentSMSize - 0.25).toString() + "rem"],
        ["--big-txt", (currentBIGSize - 0.125).toString() + "rem"]

    ]
    if (currentSize === 1) return
    else return newSizes.map((element) => {
        html.style.setProperty(element[0], element[1])
    })
});

let modal = document.getElementsByClassName('modal-wrapper')[0]
let button_close = document.getElementsByClassName('close-modal')[0]
// document.addEventListener('DOMContentLoaded', (e) => {
//     modal.classList.add('active')
// })

button_close.addEventListener('click', (e)=> {
    e.preventDefault()
    modal.classList.remove('active')
    setCookie("modalAcessibilidadeShow" ,0)
    acessibilidadeElem.classList.add("animar-area-acessibilidade")
    acessibilidadeElem.focus()

})

document.addEventListener("DOMContentLoaded",function(){

    if (getCookieValue() || getCookieValue() == null) {
		setCookie("modalAcessibilidadeShow", 1)

		return modal.classList.add("active")
	} else if (!getCookieValue()) {
		acessibilidadeElem.classList.add("animar-area-acessibilidade")
        acessibilidadeElem.focus()
		return setCookie("modalAcessibilidadeShow", 0) // ao carregar se o cookie existir reseta o cookie para nao aparecer por mais 1 dia
	}

})

function getCookieValue(cookie = "modalAcessibilidadeShow") {
	let cookieValue = document.cookie
		.split(";")
		.find((cookieItem) => cookieItem.trimStart().startsWith(cookie))
		?.split("=")[1]
        console.log(cookieValue == undefined ? null : cookieValue == 1)
        return cookieValue == undefined ? null : cookieValue == 1

}

function setCookie(cookie = "modalAcessibilidadeShow",value = 1,expires = 86400000){ //expires default is 1 day

    	return document.cookie = `${cookie}=${value} ;max-age=${expires}`
}
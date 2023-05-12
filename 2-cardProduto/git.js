const gifPlay = document.getElementById("sofagif")
const icon360 = document.getElementById("icon360")
const iconX = document.getElementById("iconX")

icon360.addEventListener("click", () => {
  document.getElementById("sofagif").src="img/sofa.gif"
  icon360.style.display = "none"
  iconX.style.display = "block"
  iconX.style.float = "right"
  iconX.style.margin = "0"
})

iconX.addEventListener("click", () => {
  document.getElementById("sofagif").src="img/sofa-img.jpg"
  iconX.style.display = "none"
  icon360.style.display = "block"
})

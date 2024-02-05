const image = document.querySelector("img")
let ROTATE_SPEED = 0
window.addEventListener("wheel", e => {
  console.log(e.deltaY == 100)
  if(e.deltaY > 0) {
    ROTATE_SPEED -= 10
    image.style.rotate = `${ROTATE_SPEED}deg`
  } else {
    ROTATE_SPEED += 10
    image.style.rotate = `${ROTATE_SPEED}deg`
  }
})
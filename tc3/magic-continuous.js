let numberSpeed = document.querySelector('.number')
let pointerSpeed = document.querySelector('.pointer.speed')

let isRightKeyPressed = false
let isLeftKeyPressed = false

let speed = 100

setInterval(update,40)

function update () {
    updateSpeed()
    updatePointerSpeed()
}

function updateSpeed() {
    if (isRightKeyPressed) speed=speed+1
    if (isLeftKeyPressed) speed =speed-1
    numberSpeed.textContent = `${Math.floor(speed)} km/h`
}

function updatePointerSpeed() {
    let speedAangle=Math.max(180,speed-90)
    pointerSpeed.style["transform"] = `rotate(${speedAngle}deg)`
}





document.addEventListener('keydown', function (e) {
    if (e.which === 39) { // key = rightArrow
        isRightKeyPressed = true
    }
    if (e.which ===  37) { // key = leftArrow
        isLeftKeyPressed = true
    }
})
document.addEventListener('keyup', function (e) {
    if (e.which === 39) { // key = rightArrow
        isRightKeyPressed = false
    }
    if (e.which ===  37) { // key = leftArrow
        isLeftKeyPressed = false
    }
})
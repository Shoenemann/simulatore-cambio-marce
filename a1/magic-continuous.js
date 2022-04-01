let wheelImage = document.querySelector('.wheel')
let spurImage = document.querySelector('.spur')
let pistonLeftImage = document.querySelector('.piston.left')
let pistonRightImage = document.querySelector('.piston.right')
let numberSpeed = document.querySelector('.number')

let isRightKeyPressed = false
let isLeftKeyPressed = false

let speed = 100

let spurDents = 6
let RATIO_SpeedToWheel = 50
let RATIO_WheelToGear = 1
let RATIO_GearToSpur = spurDents/18
let RATIO_SpurToEngine = 3

const durationWheel = () => RATIO_SpeedToWheel/speed
const durationGear = () => RATIO_WheelToGear*durationWheel()
const durationSpur = () => RATIO_GearToSpur*durationGear()
const durationEngine = () => RATIO_SpurToEngine*durationSpur()

setInterval(update,40)

function update () {
    updateSpeed()
}

function updateSpeed() {
    if (isRightKeyPressed) speed=speed+1
    if (isLeftKeyPressed) speed =speed-1
    numberSpeed.textContent = `${Math.floor(speed)} km/h`
}



wheelImage.addEventListener('animationiteration', function() {
    wheelImage.style["animation"] = `rotate ${durationWheel()}s infinite linear`
})
spurImage.addEventListener('animationiteration', function() {
    spurImage.style["animation"] = `rotate ${durationSpur()}s infinite linear`
})
pistonLeftImage.onanimationiteration = function() {
    pistonLeftImage.style["animation"] = `pump ${durationEngine()}s ease-in-out infinite`
    pistonRightImage.style["animation"] = `pump ${durationEngine()}s ease-in-out infinite`
    pistonRightImage.style["animation-delay"] = `-${durationEngine()/2}s`
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
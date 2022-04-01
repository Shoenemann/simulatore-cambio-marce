let wheelImage = document.querySelector('.wheel')
let spurImage = document.querySelector('.spur')
let gearImage = document.querySelector('.gear')
let pistonLeftImage = document.querySelector('.piston.left')
let pistonRightImage = document.querySelector('.piston.right')

let pointerSpeed = document.querySelector('.pointer.speed')
let pointerTach = document.querySelector('.pointer.tach')
let numberSpeed = document.querySelector('.number.kmh')
let numberGear = document.querySelector('.number.cambio')

let isRightKeyPressed = false
let isLeftKeyPressed = false

let currentSpeed = 20

let currentGear = 2
let spurDents = [6,9,18,24,30]
let filesSpurImages = spurDents.map((v) => `../images/spur${v}.svg`)
const currentSpurDents = () => spurDents[currentGear-1]


let RATIO_SpeedToWheel = 20
let RATIO_WheelToGear = 1
const RATIO_GearToSpur = () => currentSpurDents()/18
let RATIO_SpurToEngine = 0.6
let RATIO_EngineToTach = 8

const durationWheel = () => RATIO_SpeedToWheel/currentSpeed
const durationGear = () => RATIO_WheelToGear*durationWheel()
const durationSpur = () => RATIO_GearToSpur()*durationGear()
const durationEngine = () => RATIO_SpurToEngine*durationSpur()

setInterval(update,40)

function update () {
    updateSpeed()
    updateGauges()
}

function updateSpeed() {
    if (isRightKeyPressed) currentSpeed+=0.5
    if (isLeftKeyPressed) currentSpeed-=0.5
    numberSpeed.textContent = `${Math.floor(currentSpeed)} km/h`
}



wheelImage.addEventListener('animationiteration', function() {
    wheelImage.style["animation"] = `rotate ${durationWheel()}s infinite linear`
})
spurImage.addEventListener('animationiteration', function() {
    spurImage.style["animation"] = `rotateLarge ${durationSpur()}s infinite linear reverse`
})
gearImage.addEventListener('animationiteration', function() {
    gearImage.style["animation"] = `rotateLarge ${durationGear()}s infinite linear`
})
pistonLeftImage.onanimationiteration = function() {
    pistonLeftImage.style["animation"] = `pump ${durationEngine()}s linear infinite`
    pistonRightImage.style["animation"] = `pump ${durationEngine()}s linear infinite reverse`
}


document.addEventListener('keydown', function (e) {
    switch(e.key) {
        case "ArrowRight":
            isRightKeyPressed = true
            break
        case "ArrowLeft":
            isLeftKeyPressed = true
            break
        case "ArrowUp":
            increaseGear()
            updateGear()
            break
        case "ArrowDown":
            decreaseGear()
            updateGear()
            break
    }
})
document.addEventListener('keyup', function (e) {
    switch(e.key) {
        case "ArrowRight":
            isRightKeyPressed = false
            break
        case "ArrowLeft":
            isLeftKeyPressed = false
            break
    }
})

function decreaseGear() {
    if (currentGear === 1) return 1
    else currentGear--
}
function increaseGear() {
    if (currentGear === 5) return 5
    else currentGear++
}
function updateGear() {
    console.log("ciao")
    spurImage.src = filesSpurImages[currentGear-1]
    spurImage.style.marginLeft = positionSpur(currentSpurDents())
    numberGear.textContent = currentGear.toString()
}
updateGear()

function positionSpur(numSpurDents) {
    switch(numSpurDents) {
        case 6:
            return "40px"
        case 9:
            return "47px"
        case 18:
            return "63px"
        case 24:
            return "75px"
        case 30:
            return "85px"
            
    }
}



function updateGauges() {
    console.log('gauges')
    let currentTach = RATIO_EngineToTach/durationEngine()
    let speedAngle=Math.min(90,Math.max(-90,currentSpeed-90))
    let tachAngle =Math.min(90,Math.max(-90,currentTach-90))
    pointerSpeed.style["transform"] = `rotate(${speedAngle}deg)`
    pointerTach.style["transform"] = `rotate(${tachAngle}deg)`
}

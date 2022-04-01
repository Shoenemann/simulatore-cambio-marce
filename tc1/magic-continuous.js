let wheelImage = document.querySelector('.wheel')
let wrapperLeft = document.querySelector('.wrapperWheel.left')
let wrapperRight = document.querySelector('.wrapperWheel.right')

wheelImage.style.left='100px'
let isRightKeyPressed = false
let isLeftKeyPressed = false

function addPixels (firstPixels,secondPixels) {
    let numberFirstPixels = parseInt(firstPixels.replace('px',''))
    let numberSecondPixels = parseInt(secondPixels.replace('px',''))
    console.log(numberFirstPixels,numberSecondPixels)
    let sumPixels = numberFirstPixels + numberSecondPixels
    return sumPixels.toString().concat('px')
}

function move() {
    if (isRightKeyPressed) {
        let oldPosition = wheelImage.style.left
        let newPosition = addPixels (oldPosition,'10px')
        wheelImage.style.left = newPosition
    }
    if (isLeftKeyPressed) {
        console.log(wheelImage.style.left)
        let oldPosition = wheelImage.style.left
        let newPosition = addPixels (oldPosition,'-10px')
        wheelImage.style.left = newPosition
        console.log(wheelImage.style.left)
    }
}

setInterval(move,20)





document.addEventListener('keydown', function (e) {
    console.log(e.which)
    if (e.which === 39) { // key = rightArrow
        isRightKeyPressed = true
        // wrapperRight.classList.remove('paused')
    }
    if (e.which ===  37) { // key = leftArrow
        isLeftKeyPressed = true
        //wrapperLeft.webkitAnimationPlayState = 'running'
    }
})

document.addEventListener('keyup', function (e) {
    console.log("hello")
    if (e.which === 39) { // key = rightArrow
        isRightKeyPressed = false
        //wrapperRight.webkitAnimationPlayState = 'paused'
    }
    if (e.which ===  37) { // key = leftArrow
        isLeftKeyPressed = false
        //wrapperLeft.webkitAnimationPlayState = 'paused'
    }
})
let imageSpur = document.querySelector('.spur')
let numberDiv = document.querySelector('.cambio')
let engineLeft = document.querySelector('.engine.piston.left')
let engineRight = document.querySelector('.engine.piston.right')

let numberGear = 1

let spurDents = [6,9,18,24,30]
let filesSpurImages = spurDents.map((v) => `../images/spur${v}.svg`)



function updateSpeed() {
    let newDuration = Math.floor(20*spurDents[numberGear-1])
    engineLeft.style["-webkit-animation-duration"] = `${newDuration}ms`
    engineRight.style["-webkit-animation-duration"] = `${newDuration}ms`
    engineRight.style["-webkit-animation-delay"] = `-${newDuration}ms`
    imageSpur.style["-webkit-animation-duration"] = `${newDuration*8}ms`
}



function updateImageSpur() {
    imageSpur.src = filesSpurImages[numberGear-1]
}



function updateDiv() {
    numberDiv.textContent = numberGear.toString()
}
function decreaseGear() {
    if (numberGear === 1) return 1
    else numberGear--
}
function increaseGear() {
    if (numberGear === 5) return 5
    else numberGear++
}
document.addEventListener('keydown', function (e) {
    switch (e.which) {
        case 40: //key=arrowDown
            decreaseGear()
            break
        case 38: //key=arrowUp
            increaseGear()
            break
        default: 
            return
    }
    updateDiv()
    updateImageSpur()
    updateSpeed()
})
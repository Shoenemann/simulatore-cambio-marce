let numberDiv = document.querySelector('.cambio')

let numberGear = 1

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
    }
    updateDiv()
})
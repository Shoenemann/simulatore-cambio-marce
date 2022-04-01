# simulatore-cambio-marce
Simulator: change gears in a car - Self-thought exercise in CSS animation

## Step 0: draw images

Objectives:
- design and draw simple images for the project

Required images:
- wheel
- gear0, gear1, ..., gear5
- engine-cylinder (static part)
- engine-piston (moving part)
- emoticon-low (xx eyes)
- emoticon-high (fire eyes)
- speedometer-background
- tachometer-background
- tachometer-pointer
- speedometer-pointer

Useful resources:
- Inkscape
- [svg gear generator](https://evolventdesign.com/pages/spur-gear-generator) 

## Step 1: learn with miniprojects

Objectives: 
- learn the required syntax, mostly CSS animation
- create a miniproject for each feature I would like to implement

**Static** tests:
- ts1: positioning of elements on the page
- ts2: simple infinite rotation animation
- ts3: simple loop up-and-down animation

**Discrete dynamic** tests: \
*(change status-value with keys up/down)*
- td1: element-change numbers 1 to 5
- td2: element-change images img1 to img5
- td3: element-change animation-speed speed1 to speed5

**Continuous dynamic** tests: \
 *(adjust parameter-value with keys left/right)*
- tc1: element-adjust position x-value
- tc2: element-adjust animation speed
- tc3: element-adjust position-rotated angle

**Logic** tests: (trigger event under specified conditions)
- tl1: element-display only when parameter-value is adjusted to some range

## Step2: working product

Objectives: 
- display the functioning of the gear system
- be a useful learning resource

**Animations** required:
- A1: wheel and speedometer
- A2: engine and tachometer
- A3: wheel, engine and static gears
- A4: complete static gears system
- A5: changing gears
- A6: wheel, engine and changing gears
- A7: complete changing gears system

## Step3: final touch
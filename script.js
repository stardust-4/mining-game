const container = document.querySelector('.container')
const cellArray = []
let cellIdCount = -1
const miner = document.querySelector('.miner')
const minerMining = document.querySelector('.minerMining')
let keySCount = 1
let keyDnACount = 1
let currentLocation = 0
let pointingUp = false
let pointingRight = true
let pointingDown = false
let pointingLeft = false

const createCell = (cell) => {
  for (i = 0; i < cell; i++) {
    const div = document.createElement('div')
    container.appendChild(div).className = 'cell'
    cellArray.push(div)
    cellIdCount += 1
    container.appendChild(div).id = `${cellIdCount}`
  }
}
const animateMiner = (event) => {
  if (event.code == 'KeyM') {
    miner.style.display = 'none'
    minerMining.style.display = 'block'
    const revertDisplay = () => {
      miner.style.display = 'block'
      minerMining.style.display = 'none'
    }
    setTimeout(revertDisplay, 137)
  } else if (event.code == 'KeyS') {
    pointingLeft = false
    pointingRight = false
    pointingDown = true
    pointingUp = false
    miner.style.transform = 'rotate(90deg)'
    minerMining.style.transform = 'rotate(90deg)'
    // keySCount += 1
    // currentLocation +=15
    // miner.style.gridRowStart = keySCount
    // minerMining.style.gridRowStart = keySCount
  } else if (event.code == 'KeyD') {
    pointingLeft = false
    pointingRight = true
    pointingDown = false
    pointingUp = false
    miner.style.transform = 'rotate(360deg)'
    minerMining.style.transform = 'rotate(360deg)'
    // keyDnACount += 1
    // currentLocation += 1
    // miner.style.gridColumnStart = keyDnACount
    // minerMining.style.gridColumnStart = keyDnACount
  } else if (event.code == 'KeyA') {
    pointingLeft = true
    pointingRight = false
    pointingDown = false
    pointingUp = false
    miner.style.transform = 'scaleX(-1)'
    minerMining.style.transform = 'scaleX(-1)'
    // keyDnACount -= 1
    // currentLocation -= 1
    // miner.style.gridColumnStart = keyDnACount
    // minerMining.style.gridColumnStart = keyDnACount
  }
  //allows miner to go up
  else if (event.code == 'KeyW') {
    pointingLeft = false
    pointingRight = false
    pointingDown = false
    pointingUp = true
    miner.style.transform = 'rotate(-90deg)'
    minerMining.style.transform = 'rotate(-90deg)'
    // keySCount -= 1
    // currentLocation -= 15
    // miner.style.gridRowStart = keySCount
    // minerMining.style.gridRowStart = keySCount
  }
}
const mining = (event) => {
  if (event.code == 'KeyM' && pointingRight === true) {
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation}`).classList.add('minedCell')
  } else if (event.code == 'KeyM' && pointingLeft === true) {
    document.getElementById(`${currentLocation}` - 1).style.backgroundColor =
      '#00f5d4'
  } else if (event.code == 'KeyM' && pointingDown === true) {
    document.getElementById(`${currentLocation}` + 15).style.backgroundColor =
      '#00f5d4'
  } else if (event.code == 'KeyM' && pointingUp === true) {
    document.getElementById(`${currentLocation}` - 15).style.backgroundColor =
      '#00f5d4'
  }
}
const movingMiner = (event) => {
  if (
    event.code === 'KeyD' &&
    document.getElementById(`${currentLocation}`).className === 'cell minedCell'
  ) {
    console.log('hi')
    keyDnACount += 1
    currentLocation += 1
    miner.style.gridColumnStart = keyDnACount
    minerMining.style.gridColumnStart = keyDnACount
  }
}
document.addEventListener('keydown', movingMiner)

document.addEventListener('keydown', mining)
createCell(749)
document.addEventListener('keydown', animateMiner)

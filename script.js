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
let downCount = 0
const touchingGold = false

const randomGold = (min, max) => {
  let gold = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(gold)
  document.getElementById(`${gold}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold}`).classList.add('gold')
  document.getElementById(`${gold + 1}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold + 1}`).classList.add('gold')
  document.getElementById(`${gold + 2}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold + 2}`).classList.add('gold')
  document.getElementById(`${gold + 14}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold + 14}`).classList.add('gold')
  document.getElementById(`${gold + 15}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold + 15}`).classList.add('gold')
  document.getElementById(`${gold + 16}`).style.backgroundColor = 'gold'
  document.getElementById(`${gold + 16}`).classList.add('gold')
}
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
  //vicotry right
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation}`).className === 'cell gold'
  ) {
    console.log('youWin')
  }
  //victory left
  // if (
  //   event.code === 'KeyM' &&
  //   document.getElementById(`${currentLocation - 1}`).className === 'cell gold'
  // ) {
  //   console.log('youWin')
  // }
  //vicotry down
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation + 14}`).className === 'cell gold'
  ) {
    console.log('youWin')
  }
  if (event.code === 'KeyM' && pointingRight === true) {
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation}`).classList.add('minedCell')
  } else if (event.code === 'KeyM' && pointingLeft === true) {
    document.getElementById(`${currentLocation - 1}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation - 1}`).classList.add('minedCell')
  } else if (event.code === 'KeyM' && pointingDown === true) {
    if (downCount === 1) {
      document.getElementById(`${currentLocation + 15}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation + 15}`)
        .classList.add('minedCell')
      // downCount -= 1
    } else if (downCount === 0) {
      document.getElementById(`${currentLocation + 14}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation + 14}`)
        .classList.add('minedCell')
      downCount += 1
    }
  }
  // downCount -= 1
  else if (event.code === 'KeyM' && pointingUp === true) {
    document.getElementById(`${currentLocation - 14}`).style.backgroundColor =
      '#00f5d4'
    document
      .getElementById(`${currentLocation - 14}`)
      .classList.add('minedCell')
  }
}
const movingMinerRight = (event) => {
  if (
    event.code === 'KeyD' &&
    document.getElementById(`${currentLocation}`).className === 'cell minedCell'
  ) {
    // console.log('hi')
    keyDnACount += 1
    currentLocation += 1
    miner.style.gridColumnStart = keyDnACount
    minerMining.style.gridColumnStart = keyDnACount
    downCount = 0
  }
}
const movingMinerDown = (event) => {
  if (
    event.code === 'KeyS' &&
    document.getElementById(`${currentLocation + 14}`).className ===
      'cell minedCell'
  ) {
    console.log('hi')
    keySCount += 1
    keyDnACount -= 1
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation + 14}`).style.backgroundColor =
      '#9b5de5'
    currentLocation += 14
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
  } else if (
    event.code === 'KeyS' &&
    document.getElementById(`${currentLocation + 15}`).className ===
      'cell minedCell'
  ) {
    //   // console.log('hi')
    keySCount += 1
    //   keyDnACount += 1
    document.getElementById(`${currentLocation + 1}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation + 15}`).style.backgroundColor =
      '#9b5de5'
    currentLocation += 15
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
    // downCount - 1
  }
}
// const movingMinerLeft = (event) => {
//   if (
//     event.code === 'KeyD' &&
//     document.getElementById(`${currentLocation - 1}`).className ===
//       'cell minedCell'
//   ) {
//     // console.log('hi')
//     keyDnACount -= 1
//     currentLocation -= 1
//     miner.style.gridColumnStart = keyDnACount
//     minerMining.style.gridColumnStart = keyDnACount
//   }

// document.addEventListener('keydown', movingMinerLeft)
document.addEventListener('keydown', movingMinerRight)
document.addEventListener('keydown', mining)
// document.addEventListener('keydown', detectVictory)
document.addEventListener('keydown', movingMinerDown)
document.addEventListener('keydown', animateMiner)

createCell(749)
randomGold(642, 748)

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
let leftCount = 0
let lastMoveWasToTheRight = false
let bright = 100
let songOn = false

const detectLoss = () => {
  if (bright === -2) {
    document.getElementById('my_audio').pause()
    songOn = false
    document.getElementById('loses_audio').play()
    alert('game over')
  }
}

const mineSong = (event) => {
  if (event.code === 'KeyX' && songOn === false) {
    document.getElementById('my_audio').play()
    songOn = true
  }
  if (event.code === 'KeyR') {
    window.location.reload()
  }
}
const stopSong = (event) => {
  if (event.code === 'KeyZ' && songOn === true) {
    document.getElementById('my_audio').pause()
    songOn = false
  }
}

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
const randomCoal = (min, max) => {
  let coal = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(coal)
  document.getElementById(`${coal}`).style.backgroundColor = '#36454F'
  document.getElementById(`${coal}`).classList.add('coal')
  document.getElementById(`${coal + 13}`).style.backgroundColor = '#36454F'
  document.getElementById(`${coal + 13}`).classList.add('coal')
  document.getElementById(`${coal - 40}`).style.backgroundColor = '#36454F'
  document.getElementById(`${coal - 40}`).classList.add('coal')
  document.getElementById(`${coal + 50}`).style.backgroundColor = '#36454F'
  document.getElementById(`${coal + 50}`).classList.add('coal')
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
    bright -= 2
    container.style.filter = `brightness(${bright}%)`
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
  } else if (event.code == 'KeyD') {
    pointingLeft = false
    pointingRight = true
    pointingDown = false
    pointingUp = false
    miner.style.transform = 'rotate(360deg)'
    minerMining.style.transform = 'rotate(360deg)'
  } else if (event.code == 'KeyA') {
    pointingLeft = true
    pointingRight = false
    pointingDown = false
    pointingUp = false
    miner.style.transform = 'scaleX(-1)'
    minerMining.style.transform = 'scaleX(-1)'
  }
  //allows miner to go up
  else if (event.code == 'KeyW') {
    pointingLeft = false
    pointingRight = false
    pointingDown = false
    pointingUp = true
    miner.style.transform = 'rotate(-90deg)'
    minerMining.style.transform = 'rotate(-90deg)'
  }
}
const mining = (event) => {
  //get coal left
  // if (
  //   event.code === 'KeyM' &&
  //   document.getElementById(`${currentLocation - 1}`).className === 'cell coal'
  // ) {
  //   bright += 10
  // }
  //get coal right
  detectLoss()
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation}`).className === 'cell coal'
  ) {
    bright += 10
  }
  //get coal down
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation + 15}`).className === 'cell coal'
  ) {
    bright += 10
  }
  //vicotry right
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation}`).className === 'cell gold'
  ) {
    document.getElementById('my_audio').pause()
    songOn = false
    document.getElementById('wins_audio').play()
    alert('You Win! ')
  }
  //victory left
  // if (
  //   event.code === 'KeyM' &&
  //   document.getElementById(`${currentLocation - 1}`).className === 'cell gold'
  // ) {
  //   console.log('youWin')
  // }
  //victory Up
  //vicotry down
  if (
    event.code === 'KeyM' &&
    document.getElementById(`${currentLocation + 14}`).className === 'cell gold'
  ) {
    document.getElementById('my_audio').pause()
    songOn = false
    document.getElementById('wins_audio').play()
    alert('You Win!')
  }
  if (event.code === 'KeyM' && pointingRight === true) {
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation}`).classList.add('minedCell')
  } else if (event.code === 'KeyM' && pointingLeft === true) {
    if (downCount === 1) {
      document.getElementById(`${currentLocation}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation - 1}`)
        .classList.add('minedCell')
    } else if (downCount === 0) {
      document.getElementById(`${currentLocation - 1}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation - 1}`)
        .classList.add('minedCell')
    }
    // document.getElementById(`${currentLocation }`).style.backgroundColor =
    //   '#00f5d4'
    // document.getElementById(`${currentLocation - 1}`).classList.add('minedCell')
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
  } else if (event.code === 'KeyM' && pointingUp === true) {
    if (lastMoveWasToTheRight === true) {
      document.getElementById(`${currentLocation - 15}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation - 15}`)
        .classList.add('minedCell')
    } else {
      document.getElementById(`${currentLocation - 14}`).style.backgroundColor =
        '#00f5d4'
      document
        .getElementById(`${currentLocation - 14}`)
        .classList.add('minedCell')
    }
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
    lastMoveWasToTheRight = true
  } else if (
    event.code === 'KeyA' &&
    document.getElementById(`${currentLocation - 1}`).className ===
      'cell minedCell'
  ) {
    console.log('hi')
    miner.style.gridColumnStart = keyDnACount
    minerMining.style.gridColumnStart = keyDnACount
    downCount - 1
    keyDnACount -= 1
    currentLocation -= 1
    leftCount += 1
    lastMoveWasToTheRight = false
  }
}
const movingMinerDown = (event) => {
  if (
    event.code === 'KeyS' &&
    document.getElementById(`${currentLocation + 14}`).className ===
      'cell minedCell'
  ) {
    // console.log('hi')
    keySCount += 1
    keyDnACount -= 1
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation + 14}`).style.backgroundColor =
      '#9b5de5'
    currentLocation += 14
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
    lastMoveWasToTheRight = false
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
    lastMoveWasToTheRight = false
  }
  // MOVING MINER UP
  else if (
    event.code === 'KeyW' &&
    document.getElementById(`${currentLocation - 14}`).className ===
      'cell minedCell'
  ) {
    console.log('movingMinerUp Synced')
    keySCount -= 1
    // keyDnACount += 1
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation - 14}`).style.backgroundColor =
      '#9b5de5'
    currentLocation -= 14
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
  } else if (
    event.code === 'KeyW' &&
    document.getElementById(`${currentLocation - 15}`).className ===
      'cell minedCell'
  ) {
    console.log('minerightup sync')
    keySCount -= 1
    // keyDnACount += 1
    document.getElementById(`${currentLocation}`).style.backgroundColor =
      '#00f5d4'
    document.getElementById(`${currentLocation - 15}`).style.backgroundColor =
      '#9b5de5'
    currentLocation -= 15
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
  }
}

document.addEventListener('keydown', movingMinerRight)
document.addEventListener('keydown', mining)
document.addEventListener('keydown', movingMinerDown)
document.addEventListener('keydown', animateMiner)
document.addEventListener('keydown', mineSong)
document.addEventListener('keydown', stopSong)
createCell(749)
randomGold(622, 740)
randomCoal(350, 611)

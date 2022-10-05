const container = document.querySelector('.container')
const cellArray = []
let cellIdCount = -1
const miner = document.querySelector('.miner')
const minerMining = document.querySelector('.minerMining')
let keySCount = 1
let keyDnACount = 1

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
    miner.style.transform = 'rotate(90deg)'
    minerMining.style.transform = 'rotate(90deg)'
    keySCount += 1
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
  } else if (event.code == 'KeyD') {
    miner.style.transform = 'rotate(360deg)'
    minerMining.style.transform = 'rotate(360deg)'
    keyDnACount += 1
    miner.style.gridColumnStart = keyDnACount
    minerMining.style.gridColumnStart = keyDnACount
  } else if (event.code == 'KeyA') {
    miner.style.transform = 'scaleX(-1)'
    minerMining.style.transform = 'scaleX(-1)'
    keyDnACount -= 1
    miner.style.gridColumnStart = keyDnACount
    minerMining.style.gridColumnStart = keyDnACount
  }
  //allows miner to go up
  else if (event.code == 'KeyW') {
    miner.style.transform = 'rotate(-90deg)'
    minerMining.style.transform = 'rotate(-90deg)'
    keySCount -= 1
    miner.style.gridRowStart = keySCount
    minerMining.style.gridRowStart = keySCount
  }
}

createCell(749)
document.addEventListener('keydown', animateMiner)

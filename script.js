const container = document.querySelector('.container')
const cellArray = []
const cellIdCount = 0
const miner = document.querySelector('.miner')
const minerMining = document.querySelector('.minerMining')

const createCell = (cell) => {
  for (i = 0; i < cell; i++) {
    const div = document.createElement('div')
    container.appendChild(div).className = 'cell'
    cellArray.push(div)
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
    setTimeout(revertDisplay, 125)
  }
}

createCell(749)
document.addEventListener('keydown', animateMiner)

// const assignId = () => {
//   cellArray.forEach((cell) => {
//     cellIdCount += 1
//   })
//   console.log(cellIdCount)
// }
// console.log(cellArray)
// cellArray[0].id = '0'

// assignId()

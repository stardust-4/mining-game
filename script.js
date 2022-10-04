const container = document.querySelector('.container')
const cellArray = []

const createRow = (row) => {
  for (i = 0; i < row; i++) {
    const div = document.createElement('div')
    container.appendChild(div).className = 'row'
    cellArray.push(div)
  }
  console.log(cellArray)
  cellArray[0].innerText = 'red'
}

createRow(750)

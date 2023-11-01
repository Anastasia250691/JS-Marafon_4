const board = document.querySelector('#board')
const colors = ['#44944A', '#1E5945', '#98FB98', '#47A76A', '#00FF7F', '#34C924', '#A7FC00','#9ACD32','#2FB0C1','#036C56','#2F89C1']
const SQUARES_NUMBER = 900

for ( let i = 0; i < SQUARES_NUMBER; i++){
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () =>
    setColor(square))

   square.addEventListener('mouseleave', () =>
    removeColor(square))
   

   board.append(square)
}
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`

}

function getRandomColor(){
    const index =  Math.floor(Math.random()*colors.length)
    return colors[index]
}
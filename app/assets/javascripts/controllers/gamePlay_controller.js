$(function(){
  triggered()
})

function makeMove(){
  if(selected === 'tile0'){
    event.target.style.color = "red"
    selected = `${event.target.parentElement.id}`
  }else if(selected !== 'tile0'){
    event.target.style.color = "green"
    swapDOM()
    selected = 'tile0'
  }
}

function validMove(first, second){
  // debugger
  let firstParent = first.parentElement
  let secondParent = second.parentElement
  let val = parseInt(firstParent.id.replace("space", ""))
  let val2 = parseInt(secondParent.id.replace("space", ""))
  let eventId =  parseInt(event.target.parentElement.id.replace("space", ""))
  let availableTiles = []
  if(val % 3 !== 0){
    availableTiles.push(val + 1)
  }
  if(val % 3 !== 1){
    availableTiles.push(val - 1)
  }
  availableTiles.push(val - 3)
  availableTiles.push(val + 3)

  // debugger;
  if(availableTiles.includes(val2)){
    return true
  }else {
    return false
  }

}


let selected = "tile0"

function triggered(){
  $('div').on('click', function(event){
    makeMove()
  })
}

function swapDOM(){
  let firstSelected = $(`#${selected}`)[0].children[0]
  let secondSelected = event.target
  let firstParent = $(`#${selected}`)[0]
  let secondParent = event.target.parentElement
  // debugger
  if(validMove(firstSelected, secondSelected)){
    firstParent.append(secondSelected)
    secondParent.append(firstSelected)
  }else {
    alert("nope")
  }

}

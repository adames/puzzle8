$(function(){
  gameSetup()
})

let selected = "tile0"

function gameSetup(){
  Render.hideGame()
  let imgs = Adapter.getImages()
  imgs.then(res => Render.displayImages(res))
}

function selectImage(){
  $('#imageIndex img').on('click', function(event){
    var imageID = parseInt(event.target.id.replace("image", ""))
    let username = $('#username').val()
    username === "" ? username = "Guest" : username
    Adapter.createGame(imageID, username)
  })
}

function showGame(id){
  $('table').show()
  Render.removeStart()
  tileEvent()
  Adapter.getImage(id)
}

function makeMove(){
  if(selected === 'tile0'){
    selected = `${event.target.parentElement.id}`
    event.target.style.borderStyle = 'solid'
    event.target.style.borderColor = 'blue'
  }else if(selected !== 'tile0'){
    swapDOM()
    selected = 'tile0'
  }
}


function getSolution(){
  let gameObj = store.games[store.games.length - 1]
  let imgID = gameObj.image_id
  let solution = store.images.filter((image) => image.id === imgID)[0]
  // ^^ needs to be refactored into controller function ^^
  let userTiles = $('img')
  let counter = 0
  for(var i = 0; i < userTiles.length; i++) {
    if(eval(`solution.tile${i+1}`) === userTiles[i].src){
      console.log('correct position')
      counter++
    }else {
      counter = 0
      console.log('not correct position')
    }
  }
  if(counter === 9){
    alert('you dahhhh man')
  }

}


function validMove(first, second){
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

  if(availableTiles.includes(val2)){
    return true
  }else {
    return false
  }
}

function tileEvent(){
  $('div').on('click', function(event){
    makeMove()
  })
}

function swapDOM(){
  let firstSelected = $(`#${selected}`)[0].children[0]
  let secondSelected = event.target
  let firstParent = $(`#${selected}`)[0]
  let secondParent = event.target.parentElement
  if(validMove(firstSelected, secondSelected)){
    firstParent.append(secondSelected)
    secondParent.append(firstSelected)
  }else {
    console.log('Invalid Move: nah brahhh')
  }
  firstSelected.style.borderStyle = ''
  secondSelected.style.borderStyle = ''
  getSolution()
}

$(function(){
  hideGame()
  Adapter.getImages()
})

function hideGame(){
  $('table').hide()
}

function displayImages(res){
  res.forEach(function(image){
    $('#imageIndex').append(`<img id=image${image.id} src=${image.full_image} style="width: 150px; height: 150px"></img>`)
  })
  selectImage()
}

function selectImage(){
  $('#imageIndex').on('click', function(event){
    // debugger
    var imageID = parseInt(event.target.id.replace("image", ""))
    Adapter.createGame(imageID)


  })
}

function showGame(id){
  $('table').show()
  hideStart()
  tileEvent()
  Adapter.getImage(id)
}

function hideStart(){
  $('#imageIndex').remove()
}

let selected = "tile0"

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
  // debugger
  if(validMove(firstSelected, secondSelected)){
    firstParent.append(secondSelected)
    secondParent.append(firstSelected)
  }else {
    console.log('Invalid Move: nah brahhh')
  }
}

function showImage(){
  let imgID = store.games[store.games.length - 1].game_image_id
  let imgObj = store.gameImages.filter((image) => image.id === imgID)[0]
  let tiles = $('img')
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].src = imgObj[`tile${i + 1}`]
  }
}

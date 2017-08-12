var store = {games: [], images: [], users: []}
var blankTile; //blank tile is an id

$(function start(){
  Render.hideBoard()
  Render.hideButtons()
  Adapter.getImages()
    .then(res => Render.displayImages(res))
})

//find/create image and user objects - Controller
function startGame(imageId, userName){
  // Find or create userObj, then gameObj in fetch thens because of promise async
  // NEED to add image obj to store in order to use in Render.showImage() later
  Adapter.postUser(userName, imageId)
  .then(res => {
    store.users.push(res)
    return res })
  .then(res => Adapter.postGame(imageId, res.id))
  .then(res => store.games.push(res))
  .then(res => showGame(imageId))
}

function showGame(id){
  $('table').show()
  $('#game_buttons').show()
  Render.removeStart()
  Events.moveTiles()
  Render.showImage()
  Adapter.getGameSolution(store.games[store.games.length - 1].id)
  .then(res => Events.setSolutionBtn(res))
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

function checkSolution(){
  let gameObj = store.games[store.games.length - 1]
  let imgID = gameObj.image_id
  let solution = store.images.filter((image) => image.id === imgID)[0]
  // ^^ needs to be refactored into controller function ^^
  let userTiles = $('.tile')
  let counter = 0
  for(var i = 0; i < userTiles.length - 1; i++) {
    if(eval(`solution.tile${i+1}`) === userTiles[i].src){
      console.log('correct position')
      counter++
    }else {
      counter = 0
      console.log('not correct position')
    }
  }
  if(counter === 8 && $('#space9')[0].children[0].style.backgroundColor === "black"){
    finishGame()
  }
}

//refactor out render actions
function finishGame(){
  store.users[store.users.length - 1].wins++
  Adapter.postDbUpdate()
  $('table').fadeToggle(500)
  $('#game_finish').delay(500).fadeToggle(500)
  store = {games: [], images: [], users: []}
}

// Game button events
function restartGame(){
  $("#restart").on('click', function(){
    window.location.reload(true)
  })
}

function arrowMove(keyCode){
  let firstSelected = $(`#${blankTile}`)[0]
  let firstParent = $(`#${blankTile}`)[0].parentElement
  let moveNum;
  switch (keyCode) {
    case 37:
      moveNum = -1
      break;
    case 38:
      moveNum = -3
      break;
    case 39:
      moveNum = 1
      break;
    case 40:
      moveNum = 3
      break;
    default:
      console.log("something's messed")

  }
  //grab first parent, and find second parent using movement
  let secondParent = $(`#space${parseInt(firstParent.id.replace('space','')) + moveNum}`)[0]
  if (secondParent){
    let secondSelected = secondParent.lastElementChild

    if(validMove(firstSelected, secondSelected)){
      movesIntoStore(firstSelected, secondSelected)
      firstParent.append(secondSelected)
      secondParent.append(firstSelected)
      store.games[store.games.length - 1].moves++
    }else {
      console.log('Invalid Move: nah brahhh')
    }
    checkSolution()
  }
}

function movesIntoStore(first, second){
  let tile_order = store.games[store.games.length - 1].tiles_order
  let firstInt = parseInt(first.id.replace("tile", "")) - 1
  let secondInt = parseInt(second.id.replace("tile", "")) - 1
  let swapTiles = [tile_order[secondInt], tile_order[firstInt]] = [tile_order[firstInt], tile_order[secondInt]]
}

function updateTilesOrder(res){
  let game = store.games[store.games.length - 1]
  let tile_order = store.games[store.games.length - 1].tiles_order
  store.games[store.games.length - 1].tiles_order = String("[" + res + "]")
  Render.showImage()
}

function makeMove(){
  let firstSelected = $(`#${blankTile}`)[0]
  let secondSelected = event.target
  let firstParent = $(`#${blankTile}`)[0].parentElement
  let secondParent = event.target.parentElement
  if(validMove(firstSelected, secondSelected)){
    movesIntoStore(firstSelected, secondSelected)
    firstParent.append(secondSelected)
    secondParent.append(firstSelected)
    store.games[store.games.length - 1].moves++
  }else {
    console.log('Invalid Move: nah brahhh')
  }
  checkSolution()
}

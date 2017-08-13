var store = {games: [], images: [], users: []}
var blankTile; //blank tile is an id

$(function start(){
  Render.hideBoard()
  Render.hideButtons()
  Events.restartGame()
  Adapter.getImages()
    .then(res => {
      store.images.push(...res)
      return res })
    .then(res => Render.displayImages(res))
})

//find/create image and user objects - Controller
function startGame(imageId, userName){
  Adapter.postUser(userName)
  .then(res => {
    store.users.push(res)
    return res })
  .then(res => Adapter.postGame(imageId, res.id))
  .then(res => store.games.push(res))
  .then(res => showGame(imageId))
}

function showGame(imageId){
  $('table').show()
  $('#game_buttons').show()
  filterImageStoreById(imageId)
  Render.removeStart()
  Events.moveTiles()
  Render.showImage()
  Adapter.getGameSolution(store.games[store.games.length - 1].id)
  .then(res => Events.setSolutionBtn(res))
}

// Since we make api request for images,
// I all to store then filter them here after selection.
function filterImageStoreById(imageId){
  store.images = store.images.filter(img => img.id === imageId)
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
      counter++
    }else {
      counter = 0
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
  $('#next_move').hide()
  $('table').fadeToggle(500)
  $('#game_finish').delay(500).fadeToggle(500)
  store = {games: [], images: [], users: []}
}

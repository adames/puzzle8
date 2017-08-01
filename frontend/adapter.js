
function getImage(id){
  fetch(`http://localhost:3000/game_images/${id}`)
    .then(res => res.json())
    .then(function(res){
      store.gameImages.push(res)
      return res
    })
    .then(()=> showImage())
}

function createGame(imageID){
  esmery = {name:"Esmery"}

  var data = new FormData();
  data.append( "json", JSON.stringify(imageID));
  fetch(`http://localhost:3000/games/`, {
    method: 'POST',
    body: data
  }).then(res => res.json())
  .then(res => {
  // debugger
  store.games.push(res)})
  // what do we do with showgame now
  .then(()=> showGame(imageID))
}


function postAdapter(id){
  fetch('http://localhost:3000/game_images/${id}', {
    method: 'POST'
  })
}

function getImages(){
  fetch(`http://localhost:3000/game_images/`)
    .then(res => res.json())
    .then(res => displayImages(res))
}

function sendMove(){

}

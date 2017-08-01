
function getImage(id){
  fetch(`http://localhost:3000/game_images/${id}`)
    .then(res => res.json())
    .then(res => showImage(res))
}

function createGame(imageID){
  var data = new FormData();
  data.append( "json", JSON.stringify(imageID));
  fetch(`http://localhost:3000/games/`, {
    method: 'POST',
    body: data
  }).then(res => res.json())
  .then(res => console.log(res))
  .then(res => store.games.push(res))
  .then(showGame(imageID))
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

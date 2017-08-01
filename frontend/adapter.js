
function getImage(id){
  fetch(`http://localhost:3000/game_images/${id}`)
    .then(res => res.json())
    .then(res => showImage(res))
}

function createGame(id){
  fetch(`http://localhost:3000/games/`, {
    method: 'POST',
    body: JSON.stringify({imageID: id})
  })
}

function postAdapter(id){
  fetch('http://localhost:3000/game_images/${id}', {
    method: 'POST'
  })
}

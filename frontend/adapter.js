
class Adapter {
  static getImage(id){
    fetch(`http://localhost:3000/images/${id}`)
      .then(res => res.json())
      .then(function(res){
        store.images.push(res)
        return res
      })
      .then(()=> Render.showImage())
  }

  static createGame(imageID){
    var data = new FormData();
    data.append( "json", JSON.stringify(imageID));
    fetch(`http://localhost:3000/games/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(res => {
    store.games.push(res)})
    .then(()=> showGame(imageID))
  }

  static getImages(){
    return fetch(`http://localhost:3000/images/`)
      .then(res => res.json())
  }
}


class Adapter {
  static getImage(id){
    fetch(`http://localhost:3000/game_images/${id}`)
      .then(res => res.json())
      .then(function(res){
        store.gameImages.push(res)
        return res
      })
      .then(()=> showImage())
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


  // static postImage(id){
  //   fetch('http://localhost:3000/game_images/${id}', {
  //     method: 'POST'
  //   })
  // }

  static getImages(){
    fetch(`http://localhost:3000/game_images/`)
      .then(res => res.json())
      .then(res => displayImages(res))
  }
}

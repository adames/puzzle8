
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

  static postGame(imageID, username){
    let userID = store.users.filter(function(user){return user.name === username.name})[0].id
    var data = new FormData();
    data.append( "imageID", JSON.stringify(imageID));
    data.append( "userID", JSON.stringify(userID));
    fetch(`http://localhost:3000/games/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(res => {
    store.games.push(res)})
    .then(()=> showGame(imageID))
  }

  static postUser(username, imageID){
    var data = new FormData();
    data.append( "username", JSON.stringify(username));
    fetch(`http://localhost:3000/users/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(res => {
    store.users.push(res)
    return res
  })
    .then((res)=> Adapter.postGame(imageID, res))
  }

  static createGame(imageID, username){
    Adapter.postUser(username, imageID)
  }


  static getImages(){
    return fetch(`http://localhost:3000/images/`)
      .then(res => res.json())
  }
}

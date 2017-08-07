
class Adapter {
  static getImage(id){
    return fetch(`http://localhost:3000/images/${id}`)
      .then(res => res.json())
  }

  static postGame(imageID, username){
    let userID = store.users.filter(function(user){return user.name === username.name})[0].id
    var data = new FormData();
    data.append( "imageID", JSON.stringify(imageID));
    data.append( "userID", JSON.stringify(userID));
    return fetch(`http://localhost:3000/games/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
  }

  static postUser(username, imageID){
    var data = new FormData();
    data.append( "username", JSON.stringify(username));
    return fetch(`http://localhost:3000/users/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
  }

  static getImages(){
    return fetch(`http://localhost:3000/images/`)
      .then(res => res.json())
  }

  static postUserUpdate(userObj){
    var data = new FormData();
    data.append( "userObj", JSON.stringify(userObj));
    return fetch(`http://localhost:3000/users/${userObj.id}`, {
      method: 'PATCH',
      body: data
    })
  }

  static getGameSolution(id){
    return fetch(`http://localhost:3000/games/${id}/solution`)
      .then(res => res.json())
  }

  static postGameUpdate(gameObj){
    var data = new FormData();
    data.append( "gameObj", JSON.stringify(gameObj));
    return fetch(`http://localhost:3000/games/${gameObj}`, {
      method: 'PATCH',
      body: data
    })
  }

  static postDbUpdate(){
    let userObj = store.users[store.users.length - 1]
    Adapter.postUserUpdate(userObj)

    let gameObj = store.games[store.games.length - 1]
    Adapter.postGameUpdate(gameObj)
  }

  static postHint(arr){
    var data = new FormData();
    data.append( "seq", JSON.stringify(arr));
    data.append( "hint", JSON.stringify(store.games[store.games.length - 1].hints));
    return fetch('http://localhost:3000/games/hint/', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(res => tst(res))
  }
}

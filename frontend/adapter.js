
class Adapter {

  static getImages(){
    return fetch(`http://localhost:3000/images/`)
      .then(res => res.json())
  }

  static getImage(id){
    return fetch(`http://localhost:3000/images/${id}`)
      .then(res => res.json())
  }

  static postGame(imageId, username){
    let userID = store.users[store.users.length - 1].id
    var data = new FormData();
    data.append( "imageId", JSON.stringify(imageId));
    data.append( "userID", JSON.stringify(userID));
    return fetch(`http://localhost:3000/games/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
  }

  static postUser(username){
    var data = new FormData();
    data.append( "username", JSON.stringify(username));
    return fetch(`http://localhost:3000/users/`, {
      method: 'POST',
      body: data
    }).then(res => res.json())
  }

  static getGameSolution(id){
    return fetch(`http://localhost:3000/games/${id}/solution`)
    .then(res => res.json())
  }

  static postDbUpdate(){
    let userObj = store.users[store.users.length - 1]
    Adapter.userUpdate(userObj)

    let gameObj = store.games[store.games.length - 1]
    Adapter.gameUpdate(gameObj)
  }

  static userUpdate(userObj){
    var data = new FormData();
    data.append( "userObj", JSON.stringify(userObj));
    return fetch(`http://localhost:3000/users/${userObj.id}`, {
      method: 'PATCH',
      body: data
    })
  }

  static gameUpdate(gameObj){
    var data = new FormData();
    data.append( "gameObj", JSON.stringify(gameObj));
    return fetch(`http://localhost:3000/games/${gameObj.id}`, {
      method: 'PATCH',
      body: data
    })
  }
}

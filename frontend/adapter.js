
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
}

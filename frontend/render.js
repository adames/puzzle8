class Render {
  static displayImages(res){
    res.forEach(function(image){
      $('#imageIndex').append(`<img id=image${image.id} src=${image.full_image} style="width: 150px; height: 150px"></img>`)
    })
    selectImage()
  }

  static removeStart(){
    $('#imageIndex').remove()
  }
  static hideGame(){
    $('table').hide()
  }

  static showImage(){
    let gameObj = store.games[store.games.length - 1]
    let imgID = gameObj.game_image_id
    let imgObj = store.gameImages.filter((image) => image.id === imgID)[0]
    gameObj.tiles_order = gameObj.tiles_order.match(/\d/g).map(n => parseInt(n))
    let tiles = $('img')
    let solution = []
    for (var i = 0; i < tiles.length; i++) {
      console.log(gameObj.tiles_order)
      tiles[i].src = imgObj[`tile${gameObj.tiles_order[i]}`]
    }
  }
}

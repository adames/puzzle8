class Render {
  static displayImages(res){
    res.forEach(function(image){
      $('#imageIndex').append(`<img class="z-depth-2" id=image${image.id} src=${image.full_image} style="width: 150px; height: 150px"></img>`)
    })
    selectImage()
  }

  static removeStart(){
    $('#imageIndex').remove()
  }
  static hideGame(){
    $('table').hide()
    $('#game_finish').hide()
    $('#game_buttons').hide()
  }

  static showImage(){
    let gameObj = store.games[store.games.length - 1]
    let imgID = gameObj.image_id
    let imgObj = store.images.filter((image) => image.id === imgID)[0]
    $('#full_image')[0].src = imgObj.full_image
    gameObj.tiles_order = gameObj.tiles_order.match(/\d/g).map(n => parseInt(n))
    let tiles = $('.tile')
    let solution = []
    for (var i = 0; i < tiles.length; i++) {
      if(gameObj.tiles_order[i] === 9){
        tiles[i].style.backgroundColor = "black"
        blankTile = tiles[i].id

      }else{
        tiles[i].src = imgObj[`tile${gameObj.tiles_order[i]}`]
      }
    }
    checkSolution()
  }
}

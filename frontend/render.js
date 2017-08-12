class Render {
  static displayImages(res){
    res.forEach(function(image){
      $('#imageIndex').append(`<img class="z-depth-2" id=image${image.id} src=${image.full_image} style="width: 150px; height: 150px"></img>`)
    })
    Events.startGameonClick()
  }

  static removeStart(){
    $('#imageIndex').remove()
  }
  static hideBoard(){
    $('table').hide()
  }
  static hideButtons(){
    $('#game_buttons').hide()
    $('#next_move').hide()
    $('#game_finish').hide()
  }

  static showImage(){
    debugger
    let gameObj = store.games[store.games.length - 1]
    let imgID = gameObj.image_id
    let imgObj = store.images[store.images.length - 1]
    $('#full_image')[0].src = imgObj.full_image
    gameObj.tiles_order = gameObj.tiles_order.match(/\d/g).map(n => parseInt(n))
    let tiles = $('.tile')
    let solution = []
    for (var i = 0; i < tiles.length; i++) {
      if(gameObj.tiles_order[i] === 9){
        tiles[i].src = ""
        tiles[i].style.backgroundColor = "black"
        blankTile = tiles[i].id
      }else{
        tiles[i].src = imgObj[`tile${gameObj.tiles_order[i]}`]
      }
    }
    checkSolution()
  }

}

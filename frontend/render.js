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
    let imgID = store.games[store.games.length - 1].game_image_id
    let imgObj = store.gameImages.filter((image) => image.id === imgID)[0]
    let tiles = $('img')
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].src = imgObj[`tile${i + 1}`]
    }
  }
}

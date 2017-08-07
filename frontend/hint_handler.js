
function hint_button(){
  $('#hint').on('click', function(event){
    let tile_order = store.games[store.games.length - 1].tiles_order
    Adapter.postHint(tile_order)
  })
}


function tst(res){
  // debugger;
  let game = store.games[store.games.length - 1]
  game.hints.push(res)
  let tile_order = store.games[store.games.length - 1].tiles_order
  store.games[store.games.length - 1].tiles_order = String("[" + res + "]")
  Render.showImage()
}

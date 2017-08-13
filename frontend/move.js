class Move {
  static validMove(first, second){
    let firstParent = first.parentElement
    let secondParent = second.parentElement
    let val = parseInt(firstParent.id.replace("space", ""))
    let val2 = parseInt(secondParent.id.replace("space", ""))
    let eventId =  parseInt(event.target.parentElement.id.replace("space", ""))
    let availableTiles = []
    if(val % 3 !== 0){
      availableTiles.push(val + 1)
    }
    if(val % 3 !== 1){
      availableTiles.push(val - 1)
    }
    availableTiles.push(val - 3)
    availableTiles.push(val + 3)

    if(availableTiles.includes(val2)){
      return true
    }else {
      return false
    }
  }

  static arrowMove(keyCode){
    let firstSelected = $(`#${blankTile}`)[0]
    let firstParent = $(`#${blankTile}`)[0].parentElement
    let moveNum;
    switch (keyCode) {
      case 37:
        moveNum = -1
        break;
      case 38:
        moveNum = -3
        break;
      case 39:
        moveNum = 1
        break;
      case 40:
        moveNum = 3
        break;
      default:
        console.warn("Error: arrowMove")

    }
    //grab first parent, and find second parent using movement
    let secondParent = $(`#space${parseInt(firstParent.id.replace('space','')) + moveNum}`)[0]
    if (secondParent){
      let secondSelected = secondParent.lastElementChild

      if(Move.validMove(firstSelected, secondSelected)){
        Move.movesIntoStore(firstSelected, secondSelected)
        firstParent.append(secondSelected)
        secondParent.append(firstSelected)
        store.games[store.games.length - 1].moves++
      }else {
        console.log('Invalid Move')
      }
      checkSolution()
    }
  }

  static movesIntoStore(first, second){
    let tile_order = store.games[store.games.length - 1].tiles_order
    let firstInt = parseInt(first.id.replace("tile", "")) - 1
    let secondInt = parseInt(second.id.replace("tile", "")) - 1
    let swapTiles = [tile_order[secondInt], tile_order[firstInt]] = [tile_order[firstInt], tile_order[secondInt]]
  }

  static updateTilesOrder(res){
    let game = store.games[store.games.length - 1]
    let tile_order = store.games[store.games.length - 1].tiles_order
    store.games[store.games.length - 1].tiles_order = String("[" + res + "]")
    Render.showImage()
  }

  static makeMove(){
    let firstSelected = $(`#${blankTile}`)[0]
    let secondSelected = event.target
    let firstParent = $(`#${blankTile}`)[0].parentElement
    let secondParent = event.target.parentElement
    if(Move.validMove(firstSelected, secondSelected)){
      Move.movesIntoStore(firstSelected, secondSelected)
      firstParent.append(secondSelected)
      secondParent.append(firstSelected)
      store.games[store.games.length - 1].moves++
    }else {
      console.log('Invalid Move')
    }
    checkSolution()
  }
}

class Events {
  //sets image and username search parameters on click - Event
  static startGameOnClick(){
    $('#imageIndex').on('click', function(event){
      var imageId = parseInt(event.target.id.replace("image", ""))
      let userName = $('#username').val()
      userName === "" ? userName = "Guest" : userName
      startGame(imageId, userName)
    })
  }

  static moveTiles(){
    $('.tile').on('click', function(event){
      Move.makeMove()
    })
    $(document).on('keyup', function(event){
      if ([37, 38, 39, 40].includes(event.keyCode)){
        Move.arrowMove(event.keyCode)
      }
    })
  }

  //set solution button Event on api solution return
  static setSolutionBtn(solution){
    let current = store.games[store.games.length - 1].tiles_order

    if (solution && current){
      current = solution.find(x => current.toString == x.toString)
      let steps = solution.slice(solution.indexOf(current))
      $('#next_move').show();
      let i = 0 //increments clicks to solution
      $('#next_move').on('click', function(event){
        ++i
        Move.updateTilesOrder(steps[i])
      });
    }
  }

  // Game restart button event
  static restartGame(){
    $("#restart").on('click', function(){
      window.location.reload(true)
    })
  }
}

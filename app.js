playerOne = document.querySelector("#ply-one")
playerTwo = document.querySelector("#ply-two")

let plyOneScore = 0
let plyTwoScore = 0

function changeScore(player, direction){
  
  if(player == 'one'){
    direction == 'up' ? plyOneScore++ : plyOneScore--
    if(plyOneScore < 0){
      plyOneScore = 0
    }
    playerOne.innerText = plyOneScore
  }else{
    direction == 'up' ? plyTwoScore++ : plyTwoScore--
    if(plyTwoScore < 0){
      plyTwoScore = 0
    }
    playerTwo.innerText = plyTwoScore
  }
}
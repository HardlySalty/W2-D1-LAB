let playerContainer = document.querySelector("#player-container")

export let playerArr = []

export class player{
  constructor(score, num){
    this.score = score
    this.num = num
  }

  createPlayer(plyAmmount){
    for(let i = 0; i < plyAmmount; i++){
      playerArr.push(new player(0, i))
    }
  }

  drawPlayer(){
    let template = ''
    let i = 0
    playerArr.forEach(e => {
      template += `
      <div class="col-4 text-center">
        <p id="ply-${e.num}" class="display-2 text-center">0</p>
        <button class="btn btn-primary btn-lg" onclick="changeScore('${e.num}', 'up')"><i class="fa-solid fa-chevron-up"></i></button>
        <button class="btn btn-danger btn-lg" onclick="changeScore('${e.num}', 'down')"><i class="fa-solid fa-chevron-down"></i></button>
      </div>
      `
    })
    playerContainer.innerHTML = template
  }

}
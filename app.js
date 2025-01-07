document.addEventListener("DOMContentLoaded", () => {
  let boxes = document.querySelectorAll(".box");
  let rs = document.querySelector("#rs");
  let newGameBtn = document.querySelector("#new-btn")
  let msgContainer = document.querySelector(".mss-container")
  let msg = document.querySelector("#msg")



  let turnO = true;

  const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
  ];

  const resetGame = () => {
    turnO = true;
    enable();
    msgContainer.classList.add("hide");

  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO){
        box.innerText = "O";
        turnO = false;
      }else{
        box.innerText =("X");
        turnO = true;
      }
      box.disabled = true;
      checkWinner();  
    });

    enable = () =>{
      for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
      }
    }

    const disable = () =>{
      for(let box of boxes) {
        box.disabled=true;
      }
    }

    

    const showWinner = (winner) => {
      msg.innerText = `Congratulations ! Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disable();

    }

    const checkWinner= () => {
      for(let pattern of winpattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
 
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
          if (pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val); 
          }
        }
      }
    }
  });
  
newGameBtn.addEventListener("click",resetGame)
rs.addEventListener("click",resetGame)
});




document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const rs = document.querySelector("#rs");
  const newGameBtn = document.querySelector("#new-btn");
  const msgContainer = document.querySelector(".mss-container");
  const msg = document.querySelector("#msg");

  let turnO = true;

  // Win patterns for Tic Tac Toe
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

  // Function to reset the game
  const resetGame = () => {
    turnO = true;
    enable(); // Re-enable all boxes
    msgContainer.classList.add("hide"); // Hide the message container
  };

  // Function to enable all boxes
  const enable = () => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerText = "";
    });
  };

  // Function to disable all boxes
  const disable = () => {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  };

  // Function to show the winner
  const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable(); // Disable all boxes after a win
  };

  // Function to check the winner
  const checkWinner = () => {
    for (let pattern of winpattern) {
      const pos1Val = boxes[pattern[0]].innerText;
      const pos2Val = boxes[pattern[1]].innerText;
      const pos3Val = boxes[pattern[2]].innerText;

      // Check if all positions in the pattern are filled and equal
      if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }

    // Check for a draw
    if ([...boxes].every((box) => box.innerText !== "")) {
      msg.innerText = "It's a Draw!";
      msgContainer.classList.remove("hide");
    }
  };

  // Add click event listeners to each box
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        box.innerText = "O";
        turnO = false;
      } else {
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true; // Disable the clicked box
      checkWinner(); // Check if there's a winner
    });
  });

  // Add event listeners for reset and new game buttons
  newGameBtn.addEventListener("click", resetGame);
  rs.addEventListener("click", resetGame);
});

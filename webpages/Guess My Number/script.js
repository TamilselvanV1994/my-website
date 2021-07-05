'use strict';

// document.querySelector(".message").textContent = " 🎉 Correct Number!";

// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=10;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const dispalyMessage = function(message) {
    document.querySelector(".message").textContent = message;
}
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);

    // when there is no input
    if(!guess) {
        // document.querySelector(".message").textContent = " ⛔ No Number!"
        dispalyMessage(" ⛔ No Number!");
    }

    // when there is more then 20
    else if (guess > 20) {
        // document.querySelector(".message").textContent = "🙏 Enter Between 1 to 20";
        dispalyMessage("🙏 Enter Between 1 to 20");
        document.querySelector(".message").style.color = "red";
    }

    // when player wins
    else if (guess===secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        // document.querySelector(".message").textContent = " 🎉 Correct Number!";
        dispalyMessage("🎉 Correct Number!");
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".message").style.color = "Yellow";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }

    // when guess in wrong
    else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? " 📈 Too High!" : " 📉 Too Low!";
            dispalyMessage(guess > secretNumber ? " 📈 Too High!" : " 📉 Too Low!")
            document.querySelector(".message").style.color = "red";
            score--;
            document.querySelector(".score").textContent = score;
      }
      else {
        //   document.querySelector(".message").textContent = "💣 You Lost The Game"
            dispalyMessage("💣 You Lost The Game")
          document.querySelector(".score").textContent = 0;
      }
    }
//     // when palyer is too high
//   else if (guess > secretNumber){
//       if(score > 1) {
//             document.querySelector(".message").textContent = " 📈 Too High!";
//             document.querySelector(".message").style.color = "red";
//             score--;
//             document.querySelector(".score").textContent = score;
//       }
//       else {
//           document.querySelector(".message").textContent = "💣 You Lost The Game"
//           document.querySelector(".score").textContent = 0;
//       }
//   }

//   // when palyer is too low
//   else if (guess < secretNumber){
//     if(score > 1) {
//     document.querySelector(".message").textContent = " 📉 Too Low!";
//     document.querySelector(".message").style.color = "red";
//     score--;
//     document.querySelector(".score").textContent = score;
//     }
//     else {
//         document.querySelector(".message").textContent = "💣 You Lost The Game"
//           document.querySelector(".score").textContent = 0;
//     }
//  }
  });
  document.querySelector(".again").addEventListener("click", function() {
      score = 20;
      secretNumber = Math.trunc(Math.random()*20)+1;
      document.querySelector(".message").textContent = "Start Guessing...";
      document.querySelector(".score").textContent = 20;
      document.querySelector(".number").textContent = "?";
      document.querySelector(".guess").value = "";
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".number").style.width="15rem";
      document.querySelector(".message").style.color = "#eee";
  })
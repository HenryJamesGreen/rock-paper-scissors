let userChoice = ["yes", "no"];
let userTell = prompt("Do you want to play a game?");

if (userChoice.indexOf(userTell) === -1) {
  if (alert("Try again!"));
  {
    prompt("do you want to play a game?");
  }
}

for (let i = 0; i < 2; i++) {
  if (userTell === null) {
    alert("You made me sad :'(");
    break;
  }
  userTell = userTell.toLowerCase();

  if (userTell === "no") {
    alert("You made me sad :'(");
    break;
  }

  if (userTell === "yes");

  {
    let computerChoices = ["r", "p", "s"];

    let wins = 0;
    let losses = 0;
    let ties = 0;

    while (wins + losses + ties < 5) {
      let computerGuess =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];

      let userGuess = prompt("r, p, or s");

      if (userGuess === null) {
        alert("You made me sad :'(");
      }

      userGuess = userGuess.toLowerCase();

      if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
        alert("The computer chose " + computerGuess);

        if (userGuess === computerGuess) {
          ties++;
          alert("You've tied " + ties + "time(s).");
        } else if (
          (userGuess === "r" && computerGuess === "p") ||
          (userGuess === "p" && computerGuess === "s") ||
          (userGuess === "s" && computerGuess === "r")
        ) {
          losses++;
          alert("You lost " + losses + "time(s).");
        } else {
          wins++;
          alert("You've won " + wins + "time(s).");
        }
      }
    }

    alert(
      "Total wins: " +
        wins +
        "\nTotal losses: " +
        losses +
        "\nTotal ties: " +
        ties
    );
  }
  let userDecision = prompt("play again?");

  if (userDecision === null) {
    alert("Thank you for playing :D");
    break;
  }
  userDecision = userDecision.toLowerCase();

  if (userDecision === "no") {
    alert("See ya next time =)");
    break;
  }
}

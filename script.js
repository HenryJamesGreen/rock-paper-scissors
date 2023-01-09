let userTell = prompt("Do you want to play a game?");

for (let i = 0; i < 2; i++) {
  userTell = userTell.toLowerCase();

  if (userTell === true || userTell === "no") {
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

    prompt("play again?");
  }
}

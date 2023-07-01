

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var sparklesContainer = document.getElementById('sparklesContainer');

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




function createConfetti() {
  const colors = ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF']; // Replace with your desired confetti colors
  const confettiContainer = document.getElementById('confetti-container');

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = Math.random() * 3 + 1 + 's';
    confettiContainer.appendChild(confetti);
  }
}




//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏳️ Play 1 Wins!";
  createConfetti();
  

  }
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏳️";
  createConfetti();
  
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

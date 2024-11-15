document.getElementById("playButton").addEventListener("click", function() {
    const popup = document.getElementById("popupDiv")
    popup.style.display = "none";
});

function updateTestBasedOnScreenSize(){
  const text = document.getElementById("paragraph")
  if(window.innerWidth < 800  && window.innerWidth > 600){
    text.textContent = "Level 2! Match the cards, or else.. "
  } else if (window.innerWidth < 600){
    text.textContent = "Level 3! Solve the puzzle"
  } else{
    text.textContent = "LEVEL 1! Get ready for a scavenger hunt adventure!"
  }
}

const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
}

secondCard = this;
checkForMatch();
}

function checkForMatch() {
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.classList.add('matched'); // Add matched class to first card
    secondCard.classList.add('matched'); // Add matched class to second card
    resetBoard();
}

function unflipCards() {
lockBoard = true;

setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
}, 1500);
}

function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

window.addEventListener("load", updateTestBasedOnScreenSize)
window.addEventListener("resize", updateTestBasedOnScreenSize)
window.addEventListener("resize", function() {
    const popup = document.getElementById("popupDiv");
    popup.style.display = "block"; // Make sure the popup is visible when the window is resized
  });

const correctAnswers = {
    "1-2": "C", "1-3": "A", "1-4": "R", "1-5": "D",  // CARD
    "2-1": "B", "2-2": "E", "2-3": "L", "2-4": "L",  // BELL
    "4-2": "T", "4-3": "R", "4-4": "U", "4-5": "N", "4-6": "K", "4-7": "S", // TRUNKS
    // Add more answers as necessary
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".cell input");
  
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        const answer = input.dataset.answer;
        if (input.value.toUpperCase() === answer) {
          input.classList.add("correct");
        } else {
          input.classList.remove("correct");
        }
      });
    });
  });



  
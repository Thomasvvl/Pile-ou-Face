let face = 0;
let pile = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-face 3s forwards";
    }, 100);
    face++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-pile 3s forwards";
    }, 100);
    pile++;
  }

  // définit les fonction (stats & button reset)

  setTimeout(updateStats, 3000);
  disableButton();
});

// Compteur de point

function updateStats() {
  document.querySelector("#face-stats").textContent = `Face: ${face}`;
  document.querySelector("#pile-stats").textContent = `Pile: ${pile}`;
}

// Désactive le bouton au lancer

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}

// Reset les stats

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  pile = 0;
  face = 0;
  updateStats();
});

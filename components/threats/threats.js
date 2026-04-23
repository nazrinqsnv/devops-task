let score = 0;

function rate(btn, choice){

  const card = btn.closest(".card");
  const correct = card.getAttribute("data-answer");
  const result = card.querySelector(".result");

  if(card.classList.contains("locked")) return;

  card.classList.add("locked");

  if(choice === correct){
    score += 10;
    result.textContent = "✔ Correct";
    result.style.color = "#00ff88";
  } else {
    score -= 5;
    result.textContent = "✖ Wrong";
    result.style.color = "#ff3b3b";
  }

  document.getElementById("score").textContent = score;
}
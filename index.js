function checkAnswer(correct) {
  const result = document.getElementById("result");

  if (correct) {
    result.innerText = "✅ Correct! Strong password.";
    result.style.color = "lightgreen";
  } else {
    result.innerText = "❌ Wrong! Try again.";
    result.style.color = "red";
  }
}
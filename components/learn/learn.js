const cards = document.querySelectorAll(".learn-card");

// ACCORDION
cards.forEach(card => {
  const title = card.querySelector(".title");
  const content = card.querySelector(".content");

  title.addEventListener("click", () => {

    // close others (optional professional behavior)
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove("active");
        c.querySelector(".content").style.maxHeight = null;
      }
    });

    // toggle current
    if (card.classList.contains("active")) {
      card.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      card.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


// SEARCH FILTER
const search = document.getElementById("search");

search.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".learn-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    card.style.display = text.includes(value) ? "block" : "none";
  });
});
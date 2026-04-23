let completed = 0;
const total = document.querySelectorAll(".mission").length;

function toggleMission(el){

  const content = el.querySelector(".content");

  // accordion toggle
  if(el.classList.contains("active")){
    el.classList.remove("active");
    content.style.maxHeight = null;
  } else {
    el.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  // mark as completed only once
  if(!el.classList.contains("done")){
    el.classList.add("done");
    completed++;

    updateProgress();
  }
}

function updateProgress(){
  let percent = Math.round((completed / total) * 100);

  document.getElementById("progressText").textContent = percent + "%";
  document.getElementById("fill").style.width = percent + "%";
  document.getElementById("xp").textContent = completed * 10;
}
const cases = [
  {
    title: "Morris Worm (1988)",
    steps: [
      "Step 1: Worm enters early internet systems",
      "Step 2: Self-replicates across UNIX machines",
      "Step 3: Systems slow down due to overload",
      "Result: First major internet disruption"
    ]
  },
  {
    title: "ILOVEYOU Virus (2000)",
    steps: [
      "Step 1: Email sent with subject 'LOVE LETTER'",
      "Step 2: User opens attachment",
      "Step 3: Script spreads to contacts automatically",
      "Result: Millions of PCs infected worldwide"
    ]
  },
  {
    title: "WannaCry (2017)",
    steps: [
      "Step 1: Exploit enters Windows systems",
      "Step 2: Files get encrypted instantly",
      "Step 3: Ransom note appears ($300 Bitcoin)",
      "Result: Hospitals and companies shut down"
    ]
  },
  {
    title: "SolarWinds Attack (2020)",
    steps: [
      "Step 1: Malicious update inserted into software",
      "Step 2: Installed by trusted customers",
      "Step 3: Attackers silently access systems",
      "Result: Government & enterprise breach"
    ]
  }
];

let currentCase = 0;
let stepIndex = 0;

const title = document.getElementById("title");
const stage = document.getElementById("stage");

function openCase(index) {
  currentCase = index;
  stepIndex = 0;

  document.querySelectorAll(".item").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  title.textContent = cases[index].title;
  stage.innerHTML = "Click 'Next Step' to simulate attack...";
}

function nextStep() {
  const steps = cases[currentCase].steps;

  if (stepIndex < steps.length) {
    stage.innerHTML += `<p>⚡ ${steps[stepIndex]}</p>`;
    stepIndex++;
  } else {
    stage.innerHTML += `<p style="color:#00ffcc;">✔ Simulation Complete</p>`;
  }
}

function resetCase() {
  stepIndex = 0;
  stage.innerHTML = "Simulation reset. Click 'Next Step'...";
}
const facts = [
  "Phishing causes over 80% of cyber attacks.",
  "A hacker attack happens every 39 seconds.",
  "Weak passwords are the most common breach cause.",
  "2FA blocks 99% of account hacks.",
  "Most malware spreads via email attachments."
];

// fun fact
document.getElementById("factText").textContent =
  facts[Math.floor(Math.random() * facts.length)];


// ✅ 50 REAL CYBER SECURITY QUESTIONS
const quiz = [
  {q:"What is phishing?", a:["Firewall","Fake message attack","Encryption"], c:1},
  {q:"What does VPN do?", a:["Hide IP","Speed PC","Delete viruses"], c:0},
  {q:"What is malware?", a:["Good software","Malicious software","Browser"], c:1},
  {q:"Strong password should be?", a:["123456","Long & complex","Short"], c:1},
  {q:"What is ransomware?", a:["Encrypt files for money","Game","Firewall"], c:0},
  {q:"What is 2FA?", a:["Extra security layer","Virus","Firewall"], c:0},
  {q:"What is social engineering?", a:["Human manipulation","Coding","Backup"], c:0},
  {q:"HTTPS means?", a:["Secure website","Fast site","Fake site"], c:0},
  {q:"What is firewall?", a:["Protection system","Virus","Browser"], c:0},
  {q:"What is spyware?", a:["Data stealing software","Game","Tool"], c:0},

  {q:"Brute force attack is?", a:["Password guessing","Encryption","Firewall"], c:0},
  {q:"Trojan is?", a:["Hidden malware","Antivirus","VPN"], c:0},
  {q:"What is worm?", a:["Self spreading malware","Game","Browser"], c:0},
  {q:"What is DDoS?", a:["Server overload attack","Encryption","Backup"], c:0},
  {q:"Best defense against phishing?", a:["Click links","Check email","Ignore security"], c:1},

  {q:"What is encryption?", a:["Data protection","Virus","Firewall"], c:0},
  {q:"Public Wi-Fi is?", a:["Unsafe","Always safe","Encrypted"], c:0},
  {q:"What is antivirus?", a:["Malware protection","Virus","Browser"], c:0},
  {q:"Keylogger does?", a:["Records keystrokes","Encrypts data","Speeds PC"], c:0},
  {q:"Zero-day attack means?", a:["Unknown vulnerability","Game","Firewall"], c:0},

  {q:"What is backup?", a:["Data copy","Virus","Attack"], c:0},
  {q:"Dark web is?", a:["Hidden internet","Google","Game"], c:0},
  {q:"What is patch?", a:["Fix update","Virus","Firewall"], c:0},
  {q:"Spam email is?", a:["Unwanted email","Secure mail","VPN"], c:0},
  {q:"Botnet is?", a:["Network of infected PCs","Game","Firewall"], c:0},

  {q:"What is MFA?", a:["Multi-layer login","Virus","Browser"], c:0},
  {q:"What is hashing?", a:["Data fingerprinting","Game","VPN"], c:0},
  {q:"What is HTTPS lock?", a:["Secure connection","Virus","Attack"], c:0},
  {q:"What is brute-force protection?", a:["Login limit","Virus","Firewall"], c:0},
  {q:"What is data breach?", a:["Data leak","Backup","Encryption"], c:0},

  {q:"What is phishing email sign?", a:["Urgency","Grammar errors","Both"], c:2},
  {q:"Best security habit?", a:["Reuse passwords","2FA","Ignore updates"], c:1},
  {q:"What is cybersecurity?", a:["Protection of systems","Game","Virus"], c:0},
  {q:"What is exploit?", a:["System weakness use","Game","VPN"], c:0},
  {q:"What is malware removal?", a:["Cleaning system","Virus","Attack"], c:0},

  {q:"What is identity theft?", a:["Stealing identity","Game","Firewall"], c:0},
  {q:"What is secure password manager?", a:["Stores passwords","Virus","Browser"], c:0},
  {q:"What is phishing link?", a:["Fake URL","Safe site","VPN"], c:0},
  {q:"What is attack vector?", a:["Entry method","Firewall","Backup"], c:0},
  {q:"What is cybersecurity goal?", a:["Protect data","Hack systems","Delete files"], c:0},

  {q:"What is cloud security?", a:["Cloud protection","Game","Virus"], c:0},
  {q:"What is ethical hacking?", a:["Legal hacking","Illegal hack","Virus"], c:0},
  {q:"What is security breach impact?", a:["Data loss","Speed increase","Backup"], c:0},
  {q:"What is system update?", a:["Security fix","Virus","Attack"], c:0},
  {q:"What is phishing prevention?", a:["Awareness","Click links","Ignore emails"], c:0},

  {q:"What is endpoint security?", a:["Device protection","Game","VPN"], c:0},
  {q:"What is cyber attack?", a:["Digital attack","Game","Backup"], c:0},
  {q:"What is login security?", a:["Account protection","Virus","Browser"], c:0},
  {q:"What is secure network?", a:["Protected network","Game","Virus"], c:0},
  {q:"What is data encryption use?", a:["Protect data","Delete data","Hack"], c:0}
];

let index = 0;
let correct = 0;
let wrong = 0;

function loadQ(){
  const q = quiz[index];

  document.getElementById("question").textContent = q.q;
  document.getElementById("o0").textContent = q.a[0];
  document.getElementById("o1").textContent = q.a[1];
  document.getElementById("o2").textContent = q.a[2];

  document.querySelectorAll("input[name='opt']").forEach(i=>i.checked=false);
  document.getElementById("result").textContent="";
}

function submitAnswer(){
  const selected = document.querySelector("input[name='opt']:checked");
  if(!selected) return;

  let ans = parseInt(selected.value);

  if(ans === quiz[index].c){
    correct++;
  } else {
    wrong++;
  }

  index++;

  if(index >= quiz.length){
    showResult();
  } else {
    loadQ();
  }
}

function showResult(){
  document.querySelector(".quiz-box").style.display="none";
  document.getElementById("scoreBox").style.display="block";

  document.getElementById("scoreText").innerHTML =
    `✔ Correct: ${correct}<br>✖ Wrong: ${wrong}<br>📊 Total: ${quiz.length}`;
}

function restartQuiz(){
  index=0;
  correct=0;
  wrong=0;

  document.querySelector(".quiz-box").style.display="block";
  document.getElementById("scoreBox").style.display="none";

  loadQ();
}

loadQ();
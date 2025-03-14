//Task 1 - Base Structure Setup.

document.addEventListener("DOMContentLoaded", function() {
  const riskDashboard = document.getElementById("riskDashboard");
  console.log("Risk Dashboard Loaded");
}); 
const riskForm = document.getElementById("riskForm");
  const increaseRiskLevelsBtn = document.getElementById("increaseRiskLevels");

// Task 2 - Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
  const riskCard = document.createElement("div");
  riskCard.className = "riskCard";

// Task 3 - Removing Risk Items (Add Resolve button)
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Task 6 - Prevent unintended clicks
      riskDashboard.removeChild(riskCard);
    });

// Task 4 - Categorizing Risks by Level (Set background color)
switch (riskLevel) {
  case "Low":
    riskCard.style.backgroundColor = "green";
    break;
  case "Medium":
    riskCard.style.backgroundColor = "yellow";
    break;
  case "High":
    riskCard.style.backgroundColor = "red";
    break;
}

const nameEl = document.createElement("h3");
nameEl.textContent = riskName;

const levelEl = document.createElement("p");
levelEl.textContent = `Risk Level: ${riskLevel}`;

const deptEl = document.createElement("p");
deptEl.textContent = `Department: ${department}`;

 // Task 6 - Prevent event bubbling inside the risk card
 riskCard.addEventListener("click", function (e) {
  e.stopPropagation();
});

riskCard.appendChild(nameEl);
riskCard.appendChild(levelEl);
riskCard.appendChild(deptEl);
riskCard.appendChild(resolveBtn);

riskDashboard.appendChild(riskCard);
}



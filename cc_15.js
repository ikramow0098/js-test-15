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



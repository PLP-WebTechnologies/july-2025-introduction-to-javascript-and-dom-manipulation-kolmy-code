// 🚀 JavaScript Fundamentals Assignment

// 🎯 Part 1: Basics - Variables, Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("userAge").value;
  let result = "";

  if (age >= 18) {
    result = "✅ You are an adult.";
  } else if (age > 0) {
    result = "👶 You are still a minor.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
});


// ❤️ Part 2: Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}

document.getElementById("greetBtn").addEventListener("click", function() {
  let greeting = greetUser("Student");
  document.getElementById("greetResult").innerText = greeting;
});


// 🔁 Part 3: Loops
document.getElementById("countBtn").addEventListener("click", function() {
  let list = document.getElementById("countList");
  list.innerHTML = ""; // clear old items

  // Example 1: For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = `Number ${i}`;
    list.appendChild(li);
  }

  // Example 2: While loop (console only)
  let count = 5;
  while (count > 0) {
    console.log("Countdown:", count);
    count--;
  }
});


// 🌐 Part 4: DOM Manipulation
let isBlue = false;
document.getElementById("toggleBtn").addEventListener("click", function() {
  let box = document.getElementById("colorBox");

  if (isBlue) {
    box.style.backgroundColor = "lightgray";
    box.innerText = "Back to normal!";
  } else {
    box.style.backgroundColor = "lightblue";
    box.innerText = "Now I'm blue!";
  }

  isBlue = !isBlue; // toggle state
});

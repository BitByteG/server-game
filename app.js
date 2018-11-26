
var money = 100;  // Start the game with $100.
const moneyElement = document.getElementById('moneyElement');

var userCount = 1;  // How many current users
var userGrowth = 1.01; // Percent growth per user-change tick
const userCountElement = document.getElementById('userCountElement');
const userGrowthElement = document.getElementById('userGrowthElement');


// Main game logic function, called every tick
function update() {

}

function updateSlow() {
  money += (userCount * 0.01);
  userCount += userCount * userGrowth;
}

// Updates elements on the html page
function updateElements() {
  moneyElement.innerHTML = money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
  userGrowthElement.innerHTML = userGrowth;
  userCountElement.innerHTML = userCount;

}



// Main Game Loop
window.setInterval(function(){
  update();
  updateElements();
},10);


// Slow game loop, called every second
window.setInterval(function(){
  updateSlow();
},1000);

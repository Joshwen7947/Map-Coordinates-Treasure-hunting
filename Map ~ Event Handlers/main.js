`use strict`;

function timer() {
  alert(`Find the treasure! ~ Move the mouse over the map.`);
}
setTimeout(timer, 1000);

window.onload = init;
function init() {
  let map = document.getElementById(`map`);
  map.onmousemove = showCoordinates;
}

function showCoordinates(eventObj) {
  let coords = document.getElementById(`coords`);
  let x = eventObj.clientX;
  let y = eventObj.clientY;
  coords.innerHTML = `<strong>Map Coordinates:</strong> ` + x + `, ` + y;
}

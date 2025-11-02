// действие на кнопку
const button = document.getElementById("myButton");
function buttonClickHandler() {
  alert("button is pressed");
}
button.addEventListener("click", buttonClickHandler);

// ссылка
const link = document.getElementById("myLink");
function linkClickHandler(event) {
  event.preventDefault();
  alert(`you pressed link ${event.target.innerText}`);
}
link.addEventListener("click", linkClickHandler);

// div
const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");
const innerButton = document.getElementById("innerButton");

function buttonClickDivHandler() {
  alert("кнопка нажата");
}
function divClickHandler() {
  alert("див нажат");
}
innerButton.addEventListener("click", buttonClickDivHandler);
innerDiv.addEventListener("click", divClickHandler);
outerDiv.addEventListener("click", divClickHandler);

// делегирование
const list = document.getElementById('myList')
function listItemHandler(event) {
    alert(`you choose object ${event.target.innerText}`);
}
list.addEventListener('click', listItemHandler)
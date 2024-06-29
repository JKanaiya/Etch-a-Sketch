let stackNo;
const container = document.querySelector("div#container");

function displayBoard() {
  container.style.setProperty("--stackNo", stackNo);
  // loop to add the individual units
  for (i = 0; i < stackNo * stackNo; i++) {
    let unit = document.createElement("div");
    unit.classList.add("unit");
    container.appendChild(unit);
  }
}
document.querySelector("button").addEventListener("click", () => {
  // clear board
  container.innerHTML = "";
  //build board
  stackNo = parseInt(document.getElementById("stackNo").value);
  if (stackNo >= 100) {
    alert("Dimensions are too big");
  } else {
    displayBoard();
  }
});

container.addEventListener("mouseover", (event) => {
  unit = event.target;

  if (event.target !== container) {
    unit.style.backgroundColor = "yellow";
  }
});

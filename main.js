//Default grid size is 16x16
const n = 16;
var grid = document.querySelector(".container");

//Creates the boxes inside the container.
for (var x = 0; x < n; x++) {
    var oneSquare = document.createElement("div");
    oneSquare.className = "oneSquare";
    grid.appendChild(oneSquare).className = "gridRow";
        for (var y = 0; y < n; y++) {
            var twoSquare = document.createElement("div");
            twoSquare.style.border = "1px solid #000000";
            twoSquare.style.width = "600px";
            twoSquare.style.background = "white";
            twoSquare.className = "singleGrid";
            twoSquare.addEventListener("mouseover", func)
            oneSquare.appendChild(twoSquare);
        }
}

//Changes the grid to be black on mouseover.
function func(a) {
    a.target.style.background = "black";
}

//Used to check if size is between 1 and 64 when resizing, if it is not user is prompt to enter a value again.
function checkPrompt(input) {
    if (input >= 1 && input <= 64) {
        changeSize(input);
    }
    else {
        input = prompt("Your size did not work! Please choose between 1 and 64!");
        checkPrompt(input);
    }
}

//Creates a new grid based on the new size.
function changeSize(size) {
    const elements = document.getElementsByClassName("gridRow");
    while (elements.length > 0) elements[0].remove();
    for (var x = 0; x < size; x++) {
    var oneSquare = document.createElement("div");
    oneSquare.className = "oneSquare";
    grid.appendChild(oneSquare).className = "gridRow";
        for (var y = 0; y < size; y++) {
            var twoSquare = document.createElement("div");
            twoSquare.style.border = "1px solid #000000";
            twoSquare.style.width = "600px";
            twoSquare.style.background = "white";
            twoSquare.className = "singleGrid";
            twoSquare.addEventListener("mouseover", func)
            oneSquare.appendChild(twoSquare);
        }
}
}

//Clears the grid.
function clearGrid() {
    document.querySelectorAll(".singleGrid").forEach(grid => {grid.style.background = "white"});
}

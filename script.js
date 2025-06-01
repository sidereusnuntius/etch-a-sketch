const container = document.querySelector(".container");
const button = document.querySelector("#resize");

function clearGrid() {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}

function createGrid(size = 16) {
    if (container.hasChildNodes()) clearGrid();

    const squareSide = Math.floor(container.clientWidth / size);
    const maxWidth = Math.floor(container.clientWidth / (size-1));
    let element;

    for (let i = 0; i < size*size; i++) {
        element= document.createElement("div");
        element.classList.add("square");
        element.setAttribute("style", `width: ${squareSide}px;`);
        container.appendChild(element);
    }
}

function mouseOver(event) {
    if (event.target === container) return;
    event.target.style.backgroundColor = "black";
}

function resizeGrid() {
    const side = Number(prompt("Number of squares per side (max 100):"));
    if (!side || side > 100) {
        alert("You should type a number between 1 and 100.");
        return;
    }
    
    createGrid(side);
}

createGrid();
container.addEventListener("mouseover", mouseOver);
button.addEventListener("click", resizeGrid);
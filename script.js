const container = document.querySelector(".container");
const button = document.querySelector("#resize");

function clearGrid() {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}

function createGrid(size = 16) {
    if (container.hasChildNodes()) clearGrid();

    const squareSide = Math.floor((container.clientWidth - size) / size);
    
    let element;

    for (let i = 0; i < size*size; i++) {
        element= document.createElement("div");
        element.classList.add("square");
        element.classList.add("untouched");
        element.setAttribute("style", `width: ${squareSide}px;`);
        container.appendChild(element);
    }
}

function mouseOver(event) {
    const target = event.target;
    if (target === container) return;

    
    if (target.classList.contains("untouched")) {
        target.classList.remove("untouched");
        target.style.opacity = 0.1;
    } else if (target.style.opacity < 1) target.style.opacity = Number(target.style.opacity) + 0.1;
    
    target.style.backgroundColor = "black";
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

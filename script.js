const container = document.querySelector(".container");

function clearGrid() {

}

function createGrid(size = 16) {
    if (container.hasChildNodes()) clearGrid();

    const squareSide = Math.floor(container.clientWidth / size);
    let element;

    for (let i = 0; i < size*size; i++) {
        element= document.createElement("div");
        element.classList.add("square");
        element.setAttribute("style", `width: ${squareSide}px;height: ${squareSide}px;`);
        container.appendChild(element);
    }
}

createGrid();
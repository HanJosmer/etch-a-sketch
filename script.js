buildGrid();

let elLeftButton = document.querySelector("#left-button");
let elMiddleButton = document.querySelector("#middle-button");
let elRightButton = document.querySelector("#right-button");

elLeftButton.addEventListener('click', gradientMode);
elMiddleButton.addEventListener('click', resetGrid);
elRightButton.addEventListener('click', rainbowMode);


function buildGrid() {
    let elSketch = document.querySelector("#sketch");
    let size = prompt("How many cells to a side?");

    // populate sketch area with divs
    for (let i = 0; i < size; i++) {
        elRow = document.createElement("div");
        elRow.classList.add("row-container")
        elSketch.appendChild(elRow);
        for (let j = 0; j < size; j++) {
            elCell = document.createElement("div");
            elCell.classList.add("row-cell");
            elCell.addEventListener('mouseover', (e) => {
                e.target.classList.add("active");
            });
            elRow.appendChild(elCell);
        };
    };
};

function resetGrid() {
    let elSketch = document.querySelector("#sketch");

    while (elSketch.firstChild) {
        elSketch.removeChild(elSketch.firstChild);
    };

    buildGrid();
};

function randomColor() {
       let red = null;
       let green = null;
       let blue = null;

       
}

function rainbowMode() {
    return alert("This feature has not been implemented yet");
}

function gradientMode() {
    return alert("This feature has not been implemented yet");
}


buildGrid();

let elLeftButton = document.querySelector("#left-button");
let elMiddleButton = document.querySelector("#middle-button");
let elRightButton = document.querySelector("#right-button");

elLeftButton.addEventListener('click', gradientMode);
elMiddleButton.addEventListener('click', resetGrid);
elRightButton.addEventListener('click', rainbowMode);


function buildGrid() {
    let elSketch = document.querySelector("#sketch");
    let size = prompt("Sketch size (pixels to a side)?");

    // populate sketch area with divs
    for (let i = 0; i < size; i++) {
        elRow = document.createElement("div");
        elRow.classList.add("row-container")
        elSketch.appendChild(elRow);
        for (let j = 0; j < size; j++) {
            elCell = document.createElement("div");
            elCell.classList.add("row-cell");
            elCell.addEventListener('mouseover', activateCell);
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

function activateCell(e) {
    e.target.classList.add("active");
};

function randomColor() {

    // generate random rgb values between 0 and 255
    let red = Math.round((Math.random() * 255));
    let green = Math.round((Math.random() * 255));
    let blue = Math.round((Math.random() * 255));
       
    return `rgb(${red},${green},${blue})`;
}

function rainbowCell(e) {
    e.target.style.backgroundColor = randomColor();
};

function rainbowMode() {

    // remove initial event listeners and add gradient event listeners
    let cells = document.querySelectorAll(".row-cell");
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', activateCell);
        cell.removeEventListener('mouseover', gradientCell);
        cell.addEventListener('mouseover', rainbowCell);
    });
};

function gradientCell(e) {
    e.target.style.backgroundColor = gradient(e);
}

function gradient(e) {

    let style = e.target.style.backgroundColor;

    if (!style) {
        style = "rgba(0, 0, 0, 0.1)";
    }
    
    else if (style && style.substr(0, 12) != "rgba(0, 0, 0") {
        style = "rgba(0, 0, 0, 0.1)";
    }

    else {   
        let alpha = style.substr(14, 3);
        style = style.replace(alpha, `${+alpha + 0.1}`);
    };

    return style;
};

function gradientMode() {
    
    // remove existing event listeners and add gradient event listeners
    let cells = document.querySelectorAll(".row-cell");
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', activateCell);
        cell.removeEventListener('mouseover', rainbowCell);
        cell.addEventListener('mouseover', gradientCell);
    });
};


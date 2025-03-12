const sketchpadContainer = document.querySelector("#sketchpad-container");
const description = document.querySelector(".description");

let randomNumber;
let randomColors = [
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
];

const createSketchGrid = function (size) {
  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    gridDiv.style.flex = `1 0 calc(100% / ${size} - 2px)`;
    gridDiv.style.backgroundColor = "rgba (256,256,256,0.1)";

    let opacity = 0.2;

    gridDiv.addEventListener("mouseenter", () => {
      opacity += 0.1;
      randomNumber = Math.floor(Math.random() * randomColors.length);
      gridDiv.style.backgroundColor = `${randomColors[randomNumber]
        .replace("rgb", "rgba")
        .replace(")", `, ${opacity})`)}`;
    });

    sketchpadContainer.append(gridDiv);
  }
};

const clearSketchGrid = function () {
  while (sketchpadContainer.firstChild) {
    sketchpadContainer.removeChild(sketchpadContainer.firstChild);
  }
};

const createNewGrid = function () {
  const inputElement = document.querySelector("#size");
  size = inputElement.value;
  clearSketchGrid();
  createSketchGrid(size);
};

document.querySelector("#setSize").addEventListener("click", () => {
  const inputElement = document.querySelector("#size");
  size = inputElement.value;
  if (size) {
    createNewGrid();
  }
});

document.querySelector("#size").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const inputElement = document.querySelector("#size");
    size = inputElement.value;
    if (size < 1 || size > 100) {
      alert("Enter a size between 1-100");
    } else {
      createNewGrid();
    }
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  clearSketchGrid();
  createSketchGrid(16);
  const inputElement = document.querySelector("#size");
  inputElement.value = "16";
});

document.querySelector("#clear").addEventListener("click", () => {
  const cells = document.querySelectorAll("#sketchpad-container div");

  for (let cell of cells) {
    cell.style.backgroundColor = "";
  }
});

function main() {
  createSketchGrid(16);
}

main();

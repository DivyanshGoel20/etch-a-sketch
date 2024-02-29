// Creating a container
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.justifyContent = 'center';

// Creating a container for the boxes
const boxes = document.querySelector('.boxes');
boxes.style.display ='flex';
boxes.style.flexWrap = 'wrap';
boxes.style.width = '800px'; 

// Base grid
var grid_size = 16;
draw_grid()

// Button to check the grid size and calling the draw_grid function
document.getElementById('grid-size').addEventListener('click', function() {
    do {
        grid_size = Number(prompt("Enter grid size (1-100):"));
    }
    while (isNaN(grid_size) || !Number.isInteger(grid_size) || grid_size < 1 || grid_size > 100);

    draw_grid()   
});

// Function which draws a grid with the given size
function draw_grid() {
    while (boxes.firstChild) {
        boxes.removeChild(boxes.firstChild);
    }
    
    let boxSize = 800 / grid_size; 

    for (let i = 0; i < grid_size; i++){
        for (let j = 0; j < grid_size; j++){
            let box = document.createElement('div');
            box.style.width = boxSize + 'px';
            box.style.height = boxSize + 'px';
            box.style.border = '1px solid black';
            box.style.boxSizing = 'border-box';

            // Random RGB value for each square
            box.addEventListener('mouseover', function() {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });

            boxes.appendChild(box);
        }
    }
}



container.appendChild(boxes);


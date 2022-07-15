const container = document.querySelector('#container');
//main container of bix box

const content = document.createElement('div');
content.classList.add('content');
//container of grids, this is the big box

let grid=1;
let grindInput=64;
let maxGrid=grindInput*grindInput;
while (grid<=maxGrid){
    const box = document.createElement('div');
    box.classList.add('boxes');
    
    content.appendChild(box);
    grid++;
}
content.style.gridTemplateColumns = `repeat(${grindInput}, 1fr)`;
console.log("column i is "+grindInput)
content.style.gridTemplateRows = `repeat(${grindInput}, 1fr)`;


container.appendChild(content);



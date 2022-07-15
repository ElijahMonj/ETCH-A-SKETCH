const container = document.querySelector('#container');
//main container of bix box
const content = document.createElement('div');
content.classList.add('content');
//container of grids, this is the big box
startGrid(16);

function startGrid(grindInput){
let grid=1;
let maxGrid=grindInput*grindInput;
while (grid<=maxGrid){
    const box = document.createElement('div');
    box.classList.add('boxes');
    
    
    content.appendChild(box);
    grid++;
}
content.style.gridTemplateColumns = `repeat(${grindInput}, auto)`;
console.log("column i is "+grindInput)
content.style.gridTemplateRows = `repeat(${grindInput}, auto)`;
}


function customSize(){

    let userInput= prompt("Please enter grid value:","64");
    userInput = parseInt(userInput);
    console.log("new grid dimensions is "+userInput)
    if (isNaN(userInput)||100<userInput){    
        alert("The input is not valid.");
    }else{
        clearElements();
        startGrid(userInput);
    }
}


function clearElements(){
    
    const toRemove = document.querySelectorAll('.boxes');

    toRemove.forEach(boxes => {
      boxes.remove();
    });

}

// to change color code below
var color="black";
document.querySelector("div").addEventListener(
    "mouseover", function () {

document.querySelector("div").style.background = color;
})
  


container.appendChild(content);



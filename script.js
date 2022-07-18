
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
    //box.textContent=grid;
    
    content.appendChild(box);
    grid++;
}
content.style.gridTemplateColumns = `repeat(${grindInput}, auto)`;
console.log("column i is "+grindInput)
content.style.gridTemplateRows = `repeat(${grindInput}, auto)`;
toChange();
}
//create grid

function customSize(){

    let userInput= document.getElementById('sizeSlider').value;   
        clearElements();
        startGrid(userInput);  
}
//enter new grid
function clearElements(){
    
    const toRemove = document.querySelectorAll('.boxes');

    toRemove.forEach(boxes => {
      boxes.remove();
    });
    
}
//clear grid


container.appendChild(content);

toChange();

function toChange(){
    let down=false;
    
    var gridTest =document.getElementsByClassName('boxes');
    let gridArray=Array.from(gridTest);
    gridArray.forEach(v => v.addEventListener('mousedown', function() {
        if (down===true){
          
            down=false;
        }else{
            
            down=true;
        }
    }));
    gridArray.forEach(v => v.addEventListener('mouseover', function() {
        if (down===true){
          
         
            v.style.background = document.getElementById("colorInput").value;;    
        }
    }));
    
}
  //change color of grid
  function changeSize(){
      let size =document.getElementById('sizeSlider').value;
     
      document.getElementById("boxSize").innerHTML = "Dimensions: "+size+"x"+size;
  }
  //slider
function save(){
    alert("Still on Beta! Sorry! :(")
}
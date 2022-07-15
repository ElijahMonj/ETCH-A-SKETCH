const container = document.querySelector('#container');
//container.setAttribute("style", "background-color:blue;");

const content = document.createElement('div');
content.classList.add('content');
content.textContent="xd";
document.getElementByClassName("content").style.color = "blue";


for (i=1;i<=16;i++){
    const box = document.createElement('div');
    box.classList.add('boxes');
    box.textContent="⠀⠀";
    content.appendChild(box);
}
container.appendChild(content);



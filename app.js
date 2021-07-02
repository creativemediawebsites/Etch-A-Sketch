
let cont = document.querySelector("#container-div")
let div
let allBoxes;
let resetbutton = document.querySelector("#reset")
resetbutton.addEventListener("click", reset)

window.onload = createBoxes(10, 10);

function reset() {
    allBoxes = Array.from(document.querySelectorAll(".box"));
    allBoxes.forEach(x => cont.removeChild(x));
    let response = prompt("how many rows x colums would you like?");
    while(response > 100) {
        response = prompt("how many rows x colums would you like? The max is 100");
    }
    createBoxes(response, response)
    activateEffects()    
}

function createBoxes(row, colums) {
    for(let i = 0; i<row; i++) {
        for(let j = 0; j < colums; j++) {
            div = document.createElement('div');
            div.className = "box"
            div.style.backgroundColor = "#efefef";
            div.style.height = `${100/row}%`
            div.style.width = `${100/row}%`
            cont.appendChild(div);
        }
    } 
    activateEffects()      
}


function activateEffects() {
    let dog = Array.from(document.querySelectorAll(".box"));
    dog.forEach(box => box.addEventListener("mouseover", () => box.style.backgroundColor="red"));
}




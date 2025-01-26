let inputValue;

const input = document.querySelector('#numOfGrid');
const submitBtn = document.querySelector('#submit');
const parentGrid = document.querySelector('.main-container');
const listInput = document.querySelector('#grid-options');

listInput.addEventListener('change', (event)=>{
  input.value = event.target.value;
})

submitBtn.addEventListener('click', ()=>{
  if(validateInput(input.value)){
    drawGrid(input.value);
  }
  listInput.value = "0";
  input.value = "";
});

function colorGrid(event){
  let color;
  switch(document.querySelector('#color').value){
    case 'black': color = "black"; break;
    case 'curosr': color = `rgb(${event.clientX%255}, ${event.clientY%255}, ${(event.clientX + event.clientY)%255})`; break;
    case 'random': color = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; break;
  }
  event.target.style.backgroundColor = color;
};

function drawGrid(num){
  parentGrid.innerText = "";
  for(let i = 0; i<num; i++){
    let gridRow = document.createElement('div');
    for(let j=0; j<num; j++){
     let gridCol = document.createElement('div');
     gridCol.addEventListener("mouseover", colorGrid)
     gridRow.appendChild(gridCol);
    }
    parentGrid.appendChild(gridRow);  
  }
  
}

function validateInput(num){
  if(num<0 || num>100){
    alert("Enter a number between 0 to 100");
    input.focus();
    return false;
  }
  return true;
}

function getRandomNumber(){
  return Math.floor(Math.random()*255);
}
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
  input.value = "";
});

function colorGrid(event){
  event.target.style.backgroundColor = "black";
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
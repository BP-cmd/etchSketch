let inputValue;

const input = document.querySelector('#numOfGrid');
const submitBtn = document.querySelector('#submit');
const parentGrid = document.querySelector('.main-container');

submitBtn.addEventListener('click', ()=>{
  inputValue = input.value;
  drawGrid(inputValue);
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
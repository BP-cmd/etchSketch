let inputValue;

const input = document.querySelector('#numOfGrid');
const submitBtn = document.querySelector('#submit');
const parentGrid = document.querySelector('.main-container');

submitBtn.addEventListener('click', ()=>{
  inputValue = input.value;
  input.value = "";
});

for(let i = 0; i<100; i++){
  let gridRow = document.createElement('div');
  for(let j=0; j<100; j++){
   let gridCol = document.createElement('div');
   gridCol.addEventListener("mouseover", colorGrid)
   gridRow.appendChild(gridCol);
  }
  parentGrid.appendChild(gridRow);  
}

function colorGrid(event){
  event.target.style.backgroundColor = "black";
};
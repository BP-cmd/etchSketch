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
   gridRow.appendChild(gridCol);
  }
  parentGrid.appendChild(gridRow);  
}

// parentGrid.style.width = (64*10)+"px";
// parentGrid.style.height = (64*10)+"px";
const container = document.querySelector('.container');

function gridCreation(layout){
    for(let i = 1; i <= layout; i++){
        const auxRow = document.createElement('div');
        auxRow.style.display = 'flex';
        auxRow.classList = "auxRow";
        auxRow.style.flex = 1;
        for(let j = 1; j <= layout; j++){
            let block = document.createElement('div')
            block.classList = "block";
            block.style.backgroundColor = 'white';
            block.style.border = 'solid 1px black'
            block.style.width = 'auto';
            block.style.height = 'auto';
            block.style.padding = '0px';
            block.style.flex = 1;
            block.style.height = "100%";
            
            auxRow.appendChild(block);
            
        }
        container.appendChild(auxRow);
    }
    document.querySelectorAll('.block').forEach((currentValue) =>{
        currentValue.addEventListener('mouseover', () =>{
            changeColor(currentValue);
        });
    });
    
}



gridCreation(5);

const block = document.querySelectorAll('.block');

function changeColor(element){
    element.style.backgroundColor = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`;
}



const btn = document.querySelector('.userInp');

function changeDimension(dimensions){
    document.querySelectorAll('.auxRow').forEach((currentValue) =>{
        currentValue.remove();
        
    });
    gridCreation(dimensions);
    

}

btn.addEventListener('click', ()=>{
    let dimensions = prompt("Could you provide the layout's dimensions?");
    if(dimensions <= 100){
        changeDimension(dimensions);
    } else{
        alert('Only dimensions below 100 are accepted');
    };
    
    
});

const container = document.querySelector('.container');
let color = '';

function gridCreation(layout){
    for(let i = 1; i <= layout; i++){
        const auxRow = document.createElement('div');
        auxRow.style.display = 'flex';
        for(let j = 1; j <= layout; j++){
            let block = document.createElement('div')
            block.classList = "block";
            block.style.backgroundColor = 'rgb(197, 202, 233)';
            block.style.border = 'solid 5px black'
            block.style.width = '45px';
            block.style.height = '45px';
            block.style.padding = '0px';
            block.style.flexShrink = 1;
            let color = block.style.backgroundColor;
            
            auxRow.appendChild(block);
            
        }
        container.appendChild(auxRow);
    }
    
}



gridCreation(16);

const block = document.querySelectorAll('.block');
console.log(block);

function changeColor(element){
    element.style.backgroundColor = 'white';
}

function colorBack(element){
    element.style.backgroundColor = color;
}

block.forEach((currentValue) =>{
    currentValue.addEventListener('mouseover', () =>{
        changeColor(currentValue);
    });
    /* currentValue.addEventListener('mouseout', () =>{
        colorBack(currentValue);
    }); */
});

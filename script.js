const container = document.querySelector('.container');

function gridCreation(layout){
    for(let i = 1; i <= layout; i++){
        const auxRow = document.createElement('div');
        auxRow.style.display = 'flex';
        for(let j = 1; j <= layout; j++){
            let block = document.createElement('div')
            block.classList = "block";
            block.style.backgroundColor = 'white';
            block.style.border = 'solid 5px black'
            block.style.width = '45px';
            block.style.height = '45px';
            block.style.padding = '0px';
            block.style.flexShrink = 1;
            
            auxRow.appendChild(block);
            
        }
        container.appendChild(auxRow);
    }
    
}



gridCreation(16);

const block = document.querySelectorAll('.block');
console.log(block);

function changeColor(element){
    element.style.backgroundColor = 'rgb(197, 202, 233)';
}

block.forEach((currentValue) =>{
    currentValue.addEventListener('mouseover', () =>{
        changeColor(currentValue);
    });
});

const btn = document.querySelector('.userInp');

btn.addEventListener('click', ()=>{
    
})

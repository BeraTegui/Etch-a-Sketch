const container = document.querySelector('.container');

function gridCreation(layout){
    for(let i = 0; i <= layout; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'red';
        square.style.width = '75px';
        square.style.height = '75px';
        square.style.padding = '0px';
        

        container.appendChild(square);
    }
}

const body = document.querySelector('body');

function gridCreation(layout){
    for(let i = 0; i <= layout; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'red';
        square.style.width = '50px';
        square.style.height = '10px';
        square.style.border = 'solid, white';

        body.appendChild(square);
    }
}

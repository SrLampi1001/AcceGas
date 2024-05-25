const boards = document.getElementsByClassName("board");
const searchBar = document.getElementById("1");

searchBar.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
        console.log('sapo')
    }
    
})

boards[0].appendChild(services[0]);
boards[0].appendChild(services[1]);
boards[0].appendChild(services[2]);





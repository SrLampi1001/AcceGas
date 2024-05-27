const boards = document.getElementsByClassName("board");
const searchBar = document.getElementById("1");
/* Barra de Busqueda */
searchBar.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
        console.log('sapo')
    }
    
})
/* Tableros y movilidad */
av_width = boards[0].clientWidth; 
mtp = parseFloat(window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size'));
count = (av_width/(20*mtp)); //Declaracion de variables iniciales
window.addEventListener('resize', (e)=> {
    av_width = boards[0].clientWidth;
    mtp = parseFloat(window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size'));
    count = (av_width/(20*mtp));
    console.log(av_width, mtp, count)
    return av_width, mtp, count;
    });


function slideArt(i, n = 0, bor) {
    const toLeft = document.getElementsByClassName('board-lft')[i];
    const toRight = document.getElementsByClassName('board-rgt')[i];    
    toLeft.addEventListener('click', (e)=> {
        n-parseInt(count) <= 0 ? n = (bor.length- parseInt(count)) : n--;
    });
    toRight.addEventListener('click', (e)=> {
        n-parseInt(count) <= 0 ? n = 0 : n++;
    });
    (function() { })

}

function fillBoard(board, articles, i) {
    n = slideArt(i, 0, articles);
    for (let e = 0; e < parseInt(count); e++) {
        board.appendChild(articles[(n + e)]);        
    }
}
fillBoard(boards[0], services, 0)

/* boards[0].appendChild(services[0]);
boards[0].appendChild(services[1]);
boards[0].appendChild(services[2]);
 */
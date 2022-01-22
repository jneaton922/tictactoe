

const Player = (name, symbol) => {
    console.log(`new player created: ${name}, ${symbol}`);
    return { name, symbol };
}

const Game = (player1, player2) => {
    return {
        player1,
        player2
    }
};

const Gameboard = (() => {
    const board = [['', '', ''], ['', '', ''], ['', '', '']];

    const resetBoard = () => {
        const board = [['', '', ''], ['', '', ''], ['', '', '']];
    }
})();

const DisplayController = (() => {
    let gameArea = document.querySelector('#gameArea');
    let preArea = document.querySelector('#pregameArea');
    let startBtn = document.querySelector("#startBtn");
    let p1hud = document.querySelector('#p1hud');
    let p2hud = document.querySelector('#p2hud');
    let cells = document.querySelectorAll('td.cell');
    let game = null;

    startBtn.addEventListener('click', function (e) {
        e.preventDefault();
        gameArea.classList.toggle('d-none');
        preArea.classList.toggle('d-none');

        let p1name = document.querySelector('#p1name').value;
        let p2name = document.querySelector('#p2name').value;
        let p1Symbol = '';
        let p2Symbol = '';

        if (document.querySelector('#optionX').checked) {
            p1Symbol = 'X';
            p2Symbol = 'O';
        }
        else {
            p1Symbol = 'O';
            p2Symbol = 'X';
        }

        let p1 = Player(p1name, p1Symbol);
        let p2 = Player(p2name, p2Symbol);

        let p1head = document.createElement('h1');
        p1head.innerText = p1.name
        p1hud.appendChild(p1head);

        let p1symbolDisplay = document.createElement('div');
        p1symbolDisplay.classList.add('btn', 'btn-dark', 'btn-lg', 'disabled');
        p1symbolDisplay.innerText = p1.symbol;
        p1symbolDisplay.style.fontSize = '4rem';
        if (p1.symbol === 'X') p1symbolDisplay.classList.add('text-info');
        else p1symbolDisplay.classList.add('text-danger');

        p1hud.appendChild(p1symbolDisplay);

        let p2head = document.createElement('h1');
        p2head.innerText = p2.name;
        p2hud.appendChild(p2head);

        let p2symbolDisplay = document.createElement('div');
        p2symbolDisplay.classList.add('btn', 'btn-dark', 'btn-lg', 'disabled');
        p2symbolDisplay.innerText = p2.symbol;
        p2symbolDisplay.style.fontSize = '4rem';
        if (p2.symbol === 'X') p2symbolDisplay.classList.add('text-info');
        else p2symbolDisplay.classList.add('text-danger');

        p2hud.appendChild(p2symbolDisplay);

        game = Game(p1, p2);
    });

    function togglePlayer2Symbol(e) {
        let otherSymbol = document.querySelector('#p2sym');
        if (e.target.id === 'optionX') {
            otherSymbol.innerText = 'O';
        }
        else {
            otherSymbol.innerText = 'X';
        }
        otherSymbol.classList.toggle('text-danger');
        otherSymbol.classList.toggle('text-info');
    }
    document.querySelector('#optionX').addEventListener('change', togglePlayer2Symbol);
    document.querySelector('#optionO').addEventListener('change', togglePlayer2Symbol);

    for (let cell of cells) {
        cell.addEventListener('click', (e) => {
            e.target.innerText = 'X';
        })
    }

})();


const Player = function(name,symbol)
{
    const get_name = () => name;
    const get_symbol = () => symbol;
    return 
    {
        name,
        symbol
    }
};

const GameBoard = (
    function () 
    {
        let board = 
        [
            [' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']
        ];
        
        player1 = Player("Jack","A");
        player2 = Player("Jill","B");
        
        const set = function(r,c,symbol)
        {          
            board[r][c] = symbol;
        };

        const next_turn = function()
        {
            if (current_symbol == "X")
            {
                current_symbol = "O"
            }
            else { current_symbol = "X"};
        };

        const take_turn = function(r,c)
        {
            if (board[r][c] == ' ')
            {
                set(r,c);
                next_turn();
            }
        };

        const get = function()
        {
            return board;
        }

        const reset = function()
        {
            board =    
            [
                [' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' ']
            ];
        };

        const check_for_win = function()
        {
            if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return true;
            if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) return true;

            if (board[0][0] != ' ' && board[0][0] == board[0][1] && board[0][1] == board[0][2]) return true;
            if (board[1][0] != ' ' && board[1][0] == board[1][1] && board[1][1] == board[1][2]) return true;
            if (board[2][0] != ' ' && board[2][0] == board[2][1] && board[2][1] == board[2][2]) return true;
            if (board[0][1] != ' ' && board[0][1] == board[1][1] && board[2][1] == board[0][2]) return true;
            if (board[0][0] != ' ' && board[0][0] == board[1][0] && board[2][0] == board[0][2]) return true;
            if (board[0][2] != ' ' && board[0][2] == board[1][2] && board[2][2] == board[0][2]) return true;
            return false;
        }


        return { get,take_turn,reset, check_for_win }
    }
)();

const DisplayController = (
    function ()
    {  
        let menu = document.getElementById("menu");
        let start = document.getElementById("start-btn");
        let cells = document.getElementsByClassName("cell");
        let cell_onclick = function()
        {
            let r = this.getAttribute("data-r"); 
            let c = this.getAttribute("data-c");
            GameBoard.take_turn(r,c);
            update();
            if (GameBoard.check_for_win())
            {
                alert( "Game over!");
                GameBoard.reset();
            }

        }

        for (var i =0; i<cells.length;i++)
        {
            cells[i].addEventListener('click',cell_onclick,false);
        }

        const update = function()
        {
            current_board = GameBoard.get();
            console.log(current_board);
            for (var i = 0; i<cells.length; i++)
            {
                let r = cells[i].getAttribute("data-r"); 
                let c = cells[i].getAttribute("data-c");
                cells[i].innerHTML = current_board[r][c];
            }
        }

        const start_onclick = function()
        {
            var board = document.getElementById("board");
            var menu = document.getElementById("menu");
            board.style.display = "flex";
            menu.style.display = "none";
        }
        start.onclick = start_onclick;
  
    }
)();

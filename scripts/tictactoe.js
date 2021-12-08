

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
        let current_symbol = "X";

        
        const set = function(r,c)
        {          
            board[r][c] = current_symbol;
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

        return { get,take_turn,reset }
    }
)();

const DisplayController = (
    function ()
    {  
        let cells = document.getElementsByClassName("cell");
        let cell_onclick = function()
        {
            let r = this.getAttribute("data-r"); 
            let c = this.getAttribute("data-c");
            GameBoard.take_turn(r,c);
            update();
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
    }
)();

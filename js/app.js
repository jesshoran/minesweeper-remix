// console.log($)

//one 9x9 board

//need: timer, count number of mines left

// if space seloected has a mine next to or adjascent, number of mines is counted and displayed
// if mine selected, game over
// if none, no number is displayed
// if you think a mine is there, select something on the right and hide it

//build board


const $start = $("#start");
const $board = $("#board");


const makeBoard = () => {
    $board.empty();
    for (let i = 0; i < 81; i++) {
        const $square = $('<div class="square">');
        $board.append($square)
        if (Math.random() < .1)
            $square.addClass('mine')
    }
//randomly assign class of mine to 10 of them
}

//make mines and randomly set 








$start.on("click", makeBoard);
// $square.on("click", unveil)






//


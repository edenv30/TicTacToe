const calcWinner = (squares) => {
    const winnerCond = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];

    for(let i=0; i< winnerCond.length; i++) {
        const [a,b,c] = winnerCond[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]; // the winner X or O
        }
    }

    return null; // no winner
}

const tieCondition = (squares) => {
    console.log(squares)
    squares.forEach ( (square)  => {
        if(square === false){
            console.log('sqqqquare',square)
            return false;
            
        }
            
    })
    return true;
}


export default {calcWinner, tieCondition};
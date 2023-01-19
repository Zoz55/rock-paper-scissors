function computerChoice (){

    randomNum = Math.floor(Math.random()*3);
    arr=["rock", "paper", "scissors"];
    return arr[randomNum]; 

}


function playRound(playerSelection){
    var computerSelection = computerChoice();
    var won = `You Win! ${playerSelection} beats ${computerSelection}`;
    var lost = `You Lose! ${computerSelection} beats ${playerSelection}`;
    var tied = `There is a Tie! You both choose ${playerSelection}`;
    var str = "";
    if (playerSelection == "rock"){
        computerSelection=="rock"? str = tied:computerSelection =="paper"? str = lost:str = won;
    }
    else if (playerSelection=="paper"){
        computerSelection=="rock"? str= won:computerSelection =="paper"? str = tied :str = lost;
    }
    else if (playerSelection == "scissors"){
        computerSelection=="rock"? str= lost:computerSelection =="paper"? str = won:str = tied;
    }
    return str;

}


function game(){
    var win =0;
    var lose =0;
    for (let i = 0; i<10; i++){
        var playerSelection = prompt("choose rock, paper or scissors");

        var str = playRound(playerSelection.toLowerCase());
        console.log(str)
        
        str.includes("Win")? win++:str.includes("Lose")? lose++:i--;
        if (win ===5){
            console.log("congratulation, you won");
            break;
        }else if(lose ===5){
            console.log("sorry, you lost");
            break;
        }
    }
    
    
}


game()




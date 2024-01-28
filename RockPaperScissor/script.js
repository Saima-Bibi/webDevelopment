let userScore = 0;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log('Game is draw!');
    msg.innerText = "Draw, play agin.."
    msg.style.backgroundColor = "orange";
}

const showResult = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        console.log("You Won!!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        console.log("You Lose!!"); 
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}


const genCompChoice = ()=>{
    let array = ['rock','paper','scissor'];
    let Rindex = Math.floor(Math.random() * 3);  //Math.floor() removes decimal,Math.random() generate random number, * 3 as we need numbers from 0 to 2
    return array[Rindex];
}



const playGame=(userChoice)=>{
    console.log('User Choice = ',userChoice);
    let compChoice =genCompChoice(); 
    console.log('Computer Choice = ',compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
         //paper, scissors
         userWin = compChoice === 'paper' ? false:true;
        }
        else if(userChoice === "paper"){
        // rock, scissors
        userWin = compChoice === "rock" ? true:false;
        }
        else{
        //rock,paper
        userWin = compChoice ==="rock" ? false:true;
        }
        showResult(userWin,userChoice, compChoice);
    }
    
}


choices.forEach((choice)=>{
 choice.addEventListener('click',()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
 });
});
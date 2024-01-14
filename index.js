let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =()=>{
    let options = ["rock","paper","scissors"];

    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=(userChoice,compChoice)=>{
    // console.log("Its Draw");
    msg.innerText = "It's Draw, Play again!";
    msg.style.background = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won!, ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        // console.log("You loose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You loose!, ${compChoice} beats ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice)=>{
    // console.log("Users choice: ",userChoice);

    const compChoice = genCompChoice();
    // console.log("comps choice: ",compChoice);

    if(userChoice === compChoice){
        drawGame(userChoice,compChoice);
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice=== "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice==="scissors"? false:true;
        }else{
            //rock,paper
            userWin = compChoice=== "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        // alert(`${userChoice}`);
        playGame(userChoice);
    });
});
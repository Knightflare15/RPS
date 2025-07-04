console.log("external call");
function getComputerChoice()
    {
        let a = Math.floor(Math.random()*3);
        return a;  
    }
function getHumanChoice(choice)
    {
        return choice%3;
    }
var humanScore =0;
var computerScore = 0;
function playRound(human , computer)
{
    switch(human){
        case 0:
            if(computer === 1)
                return "Win";
            else if(computer === 0)
                return "draw";
            else 
                return "loss";
        case 1:
             if(computer === 2)
                return "Win";
            else if(computer === 1)
                return "draw";
            else 
                return "loss";
        case 2:
            if(computer === 0)
                return "Win";
            else if(computer === 2)
                return "draw";
            else 
                return "loss";

    }
}
const startButton = document.querySelector("#start");
const humanS = document.querySelector(".human p");
const computerS = document.querySelector(".computer p");
const HI= document.querySelector(".img1 img");
const CI= document.querySelector(".img2 img");
let tries = 5;
startButton.addEventListener("click",()=>
{ 
    let choice = prompt("Enter your choice");
    choice = choice.toLowerCase();
switch(choice){
    case "rock":
        choice=0;
        break;
    case "paper":
        choice=2;
        break;
    case "scissors":
        choice=1;
        break;
    default:
        choice =0;
}
const humanSelection = getHumanChoice(choice);
const computerSelection = getComputerChoice();
HI.src=CI.src="./image/0.png";
HI.classList.add("shake");
CI.classList.add("shake");
setTimeout(()=>{
    HI.classList.remove("shake");
    CI.classList.remove("shake");
HI.src="./image/"+humanSelection+".png";
CI.src="./image/"+computerSelection+".png";

let result = playRound(humanSelection,computerSelection);
if(result === "Win")
    humanScore++;
else if(result === "loss")
    computerScore++;
humanS.textContent=humanScore;
computerS.textContent=computerScore;

if(--tries===0){
    setTimeout(()=>{alert("Match ended");
    humanScore=computerScore=0;
    humanS.textContent=humanScore;
    computerS.textContent=computerScore;
    tries =5;
    },4000);
}
},3000);
})


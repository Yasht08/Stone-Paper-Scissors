let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
    console.log("Draw");
    msg.innerText=`It's a Draw!`;
    msg.style.backgroundColor="Grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Loss! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompchoice();
    if(userChoice===compChoice){
        drawgame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors" ? false : true;
    }else{
        userWin=compChoice==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};



choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
});
});

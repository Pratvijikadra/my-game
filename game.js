let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=() => {

    const option=["rock","paper","scissors"];
// rock ,paper, scissors
const randidx=Math.floor(Math.random()*3);
return option[randidx];
};

const drawGame=() => {

    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userchoice,compchoice) => {
if(userWin){
    userscore++;
    userscorepara.innerText=userscore;

    msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    compscorepara.innerText=compscore;

    msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
}
}

const playGame=(userchoice) => {

   console.log(" user choice =",userchoice);
    // generate computer choice
const compchoice=genCompChoice();
console.log(" computer choice =",compchoice);

if(userchoice===compchoice){
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if(userchoice==="rock"){
        //scissors ,paper
       userWin= compchoice==="paper"? false:true;
    }
    else if(userchoice==="paper"){
        //rock , scissors
       userWin= compchoice==="scissors"?false:true;
    }else{
//paper,rock
userWin=compchoice==="rock"?false:true;
    }
    showWinner(userWin,userchoice,compchoice);
    }
};





choices.forEach((choice) => {
choice.addEventListener("click",() => {

    const userchoice=choice.getAttribute("id");
   
    playGame(userchoice);
    

});
});


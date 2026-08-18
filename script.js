let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
let newgamebtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("p");
const showWinner=(winner)=>{
        msg.innerText=`Congratulations,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
}
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,8],
    [3,4,5],
    [6,7,8]
];
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
let click=0;
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        box.style.color="maroon";
        turnO=false;
    }
    else{
         box.innerText="X";
        turnO=true;
    }
    click++;
    box.disabled=true;
    let iswin=checkWinner();
    if(!iswin && click==9){
           showDraw();
    }
   });
});
const showDraw=()=>{
    msg.innerText="match draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for (let pattern of win){
         let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
         if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                showWinner(pos1val);
                return true;
            }
         }
    };
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

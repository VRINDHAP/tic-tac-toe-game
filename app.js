let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let winner = document.querySelector(".winner");
let msg = document.querySelector("#msg");

let turnO = true;
const WinPatterns=[
    [0,1,2] , [0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8],
];
const resetGame = () =>{
    turnO =true;
    enablebtns();
    winner.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText ='0';
            turnO=false;
        }else{
            box.innerText ='X';
            turnO=true;    
        }
        box.disabled=true;  
        checkwinner();

    })
})

const disablebtns = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enablebtns = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner = (player) => {
    msg.innerText = `cngrs winner is  ${player}`;
    winner.classList.remove("hide");
    disablebtns();
}

const checkwinner = () =>{
    for (let pattern of WinPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
        }
    }
 }
} ;
newbtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

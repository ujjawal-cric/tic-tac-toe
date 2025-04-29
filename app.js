let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");   
let gwinner=document.querySelector(".win");   
let newgame=document.querySelector("#new_game");   

let turn0=true;//player 0 initiatethe game

let winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
     
});
const checkwinner =()=>{
    for(let pattern of winpattern){
        let pos1=boxes[ pattern[0]].innerText;
        let pos2=boxes[ pattern[1]].innerText;
        let pos3=boxes[ pattern[2]].innerText;

        if(pos1 !="" && pos2 != ""&&pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                showwinner(pos1);

            }
        }
    }
};
const showwinner =(winner)=>{
    gwinner.innerText= "winner is " +  winner;
    gwinner.removeAttribute("hidden");
    disablebox(); 
};

const disablebox =()=>{
    for(let boxx of boxes){
        boxx.disabled=true;

    }
};
const rstbtn =()=>{
    turn0=true;
    enable();
    gwinner.setAttribute("hidden",true);
};

const enable = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
}
};
newgame.addEventListener("click",rstbtn);
resetbtn.addEventListener("click",rstbtn);
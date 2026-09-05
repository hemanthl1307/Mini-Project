let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turn=document.querySelector(".turn");
let playerO=true;
let Xscore=0;
let Oscore=0;
let count=0;
let scorex=document.querySelector("#score-x");
let scoreo=document.querySelector("#score-o");
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let newgamebtn=document.querySelector(".new-game");
newgamebtn.addEventListener("click",newgame);
function newgame()
{
    playerO=true;
    count=0;
    enabledbtn();
}
let disabledbtn=()=>{
    for(let btn of box){
        btn.disabled=true;
    }
}
let enabledbtn=()=>{
    for(let btn of box){
        btn.disabled=false;
        btn.innerText="";
        btn.classList.remove("x", "o");
    }
    turn.innerText=`Player O's Turn`
}
reset.addEventListener("click", ()=>{
    resetscore();
    newgame();
});
let resetscore=()=>{
    Xscore=0;
    Oscore=0;
    scoreo.innerText=0;
    scorex.innerText=0;
}
box.forEach((allbox)=>{
    allbox.addEventListener("click",()=>{
        console.log("button was clicked");
    if(playerO)
    {
        count++;
        console.log(count);
        allbox.innerText="O";
        turn.innerText=`Player X's Turn`;
        allbox.classList.add("o");
        playerO=false;
    } 
    else{
        count++;
        console.log(count);
        turn.innerText=`Player O's Turn`;
        allbox.innerText="X";
        allbox.classList.add("x");
        playerO=true;
    }
    allbox.disabled=true;
    checkWinner();
    draw(count);
    });
});
let checkWinner=()=>{
    for(let pattern of winpattern)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                // console.log("winner",pos1val);
                winnerdisplay(pos1val);
                trackscore(pos1val);
                disabledbtn();
            }
        }
    }
}
let trackscore=(pos1val)=>{
    if(pos1val==="O")
    {
        Oscore++;
        //console.log(Oscore);
        scoreo.innerText=Oscore;
    }
    else{
        Xscore++;
        //console.log(Xscore);
        scorex.innerText=Xscore;
    }
}
let draw=(count)=>{
    if(count==9)
    {
        turn.innerHTML=`Game was a Draw`;
    }
}
let winnerdisplay=(pos1val)=>{
     turn.innerHTML=`Congratulations! Winner is ${pos1val}`;
}


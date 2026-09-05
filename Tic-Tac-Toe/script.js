let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let playerO=true;
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
box.forEach((allbox)=>{
    allbox.addEventListener("click",()=>{
        console.log("button was clicked");
    if(playerO)
    {
        allbox.innerText="O";
        playerO=false;
    } 
    else{
        allbox.innerText="X";
        playerO=true;
    }
    });
});


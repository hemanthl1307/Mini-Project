let gameseq=[];
let userseq=[];
let highscore=[];
let btns=["green","yellow","red","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",startGame)
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startGame);
function startGame() {
    if (started == false) {
        started = true;
        Levelup();
    }
}
function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function()
    {
        btn.classList.remove("gameflash");
    },300);
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },300);
}
function Levelup()
{
    userseq=[];
    level++;
    h2.innerText=`Level-${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkans(idx)
{
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length)
        setTimeout(Levelup,1000);
    }else{
        highscore.push(level);
        h2.innerHTML=`Game Over!<br>Your score was ${level}<b><br>Press any Key to Restart.`
        highscoredis();
        alertuser()
        restart();
    }
}
function btnpress()
{
    let btnpar=this;
    // console.log(btnpar);
    let usercolor=btnpar.classList[1];
    // console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);
    userflash(btnpar);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll('.btn');
for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}
function highscoredis()
{
    let h3=document.querySelector("h3");
    h3.classList.add("h3");
    let max=highscore[0];
    for(let i=0;i<highscore.length;i++)
    {
        if(highscore[i]>max)
        {
            max=highscore[i];
        }
    }
    h3.innerText=`Your high score was ${max}`;
}
function alertuser()
{
    let doc=document.querySelector("body");
    doc.style.backgroundColor="red";
    setTimeout(()=>{
        doc.style.backgroundColor="rgb(252, 238, 221)";
    },300);
}
function restart(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}

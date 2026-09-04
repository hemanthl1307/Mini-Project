let user=[];
let comp=[];
userscore=0;
compscore=0;
let gamearr=["stone","paper","scissor"];
let btn=document.querySelectorAll(".btn");
btn.forEach((button)=>{
    button.addEventListener("click",gamestart);
});
function gamestart()
{
    let randnum=Math.floor(Math.random()*3);
    let compval=gamearr[randnum];
    comp.push(compval);
    // console.log(randnum);
    // console.log(val);
    console.log(comp);
    let userbtn=this;
    let userval=userbtn.getAttribute("id");
    user.push(userval);
    console.log(user);
    gamescore(userval,compval);
    user=[];
    comp=[];
}
let userscoreval=document.querySelector(".numeric");
let compscoreval=document.querySelector(".compscore");
let infodis=document.querySelector(".info");
function gamescore(userval,val)
{
    if((userval=="stone" && val=="scissor") || (userval=="paper" && val=="stone") || (userval=="scissor" && val=="paper"))
    {
        userscore++;
        infodis.innerHTML = `User wins! <br> ${userval} beats ${val}`;
        console.log("User wins");
        userscoreval.innerText=userscore
        console.log("User Score:", userscore);
    }
    else if((userval=="scissor" && val=="stone") || (userval=="stone" && val=="paper") || (userval=="paper" && val=="scissor"))
    {
        compscore++;
        infodis.innerHTML = `Computer wins! <br> ${val} beats ${userval}`;
        compscoreval.innerText=compscore;
        console.log("Computer Score:", compscore);
    }else{
        infodis.innerHTML = `Draw! Both chose ${userval}`;
    }
}
let restartbtn = document.querySelector("#restart");
restartbtn.addEventListener("click", restartgame);
function restartgame() {
    userscore = 0;
    compscore = 0;
    userscoreval.innerText = 0;
    compscoreval.innerText = 0;
    infodis.innerText = "Play your Move!";
}
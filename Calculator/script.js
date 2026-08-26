let firstnum;
let secondnum;
let operator;

let allbtn = document.querySelectorAll(".btn");
let input = document.querySelector("#display");

for (btns of allbtn) {
    btns.addEventListener("click", calculator);
}

function calculator() {
    let btnval = this;

    console.log(btnval.innerText);
    console.log(btnval.dataset.value);

    if (btnval.innerText == "AC") {
        input.value = "";
    }
    else if (btnval.classList.contains("number")) {
        input.value += btnval.innerText;
    }else if (btnval.dataset.value == "DEL") {
    input.value = input.value.slice(0, -1);
    }
    else if (btnval.classList.contains("unique")) {
        if (btnval.dataset.value == "=") {
        secondnum = Number(input.value);
        console.log("First number:", firstnum);
        console.log("Operator:", operator);
        console.log("Second number:", secondnum);
        calculate(firstnum,secondnum,operator);
    }
    else{
        firstnum = Number(input.value);
        operator = btnval.dataset.value;
        input.value = "";
        console.log("First number:", firstnum);
        console.log("Operator:", operator);
    }
}
}   
function calculate(a,b,op)
{
    if(op=="+")
    {
        let add=firstnum+secondnum;
        input.value=add;
    }
    else if(op=="-")
    {
        let sub=firstnum-secondnum;
        input.value=sub;
    }
    else if(op=="*")
    {
        let mul=firstnum*secondnum;
        input.value=mul;
    }
    else if(op=="/")
    {
        let div=firstnum/secondnum;
        input.value=div;
    }
    else if(op=="%")
    {
        let mod=firstnum%secondnum;
        input.value=mod;
    }else{
        input.value="NAN";
    }
}
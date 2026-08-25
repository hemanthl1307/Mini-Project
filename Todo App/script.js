let input=document.querySelector('#inputbox');
let li=document.querySelector("#list li");
let additem=document.querySelector('#addtodo');
additem.addEventListener("click",addtodo);
function addtodo()
{
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    item.classList.add("listitem");
    let del=document.createElement("button");
    del.classList.add("deltodo");
    del.innerHTML="Delete";
    item.append(del);
    input.value="";
}
let ul=document.querySelector('#list');
ul.addEventListener("click",deltodo)
function deltodo(event)
{
    // console.log(event.target)
    //     console.log(event.target.nodeName);
    //    console.log("button deleted");
    if(event.target.nodeName=="BUTTON")
    {
        let task=event.target.parentElement;
        task.remove();
    }
}
// let deltask=document.querySelectorAll('.deltodo');
// for(btns of deltask)
// {
//     btns.addEventListener("click",deletetodo);
// }
// function deletetodo()
// {
//     let par=this.parentElement;
//     par.remove();
// }

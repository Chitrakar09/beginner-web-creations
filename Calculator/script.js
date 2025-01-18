let buttons = document.querySelectorAll("button");
let result= 0;

let keyValSepration=(evt)=>{
    if(evt.target.className==="action-button")
    {
        keyValAction=evt.target.dataset.key;
        calculation(keyValAction);
    }
    else{
        keyValNum=parseFloat(evt.target.dataset.key);
        calculation(keyValNum);
    }
}


let calculation=(keyVal)=>{
    result=`${result}${(keyVal)}`;
    console.log(result);
}

buttons.forEach((button) => button.addEventListener("click", keyValSepration));

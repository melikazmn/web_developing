function GetHistory(){
    return document.getElementById("history").innerText;
}
function printHistory(num){
    document.getElementById("history").innerText = num;
}

function GetAnswer(){
    return document.getElementById("output").innerText;
}

function answer(num){
    if (num == ""){
        document.getElementById("output").innerText = "";
    }
    else{
        document.getElementById("output").innerText = num;
    }
    
}


function allclear(){
    answer("");
    printHistory("");
}

function clear(){
    //
}



var operator = document.getElementsByClassName("elements");
for(var i = 0 ;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        var output = GetAnswer();
        var history = GetHistory()
            if(this.id == "="){
                history = history + output
                var res = eval(history);
                answer(res);
                printHistory("");
            }
            else if(this.id == "."){
                answer(output+this.id);
            }
            else {
                history = history + output + this.id;
                printHistory(history);
                answer("");
            }
    })
}

var number = document.getElementsByClassName("number");
for(var i = 0 ;i<number.length;i++){
    number[i].addEventListener('click',function(){
        document.getElementById("output").innerText += this.id;
    })
}

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
    var output = GetAnswer();
    var history = GetHistory();
    console.log(output);
    if(output!=""){
        output = output.slice(0,output.length-1)
        answer(output);
        console.log(output);
    }
    else{
        history =  history.slice(0,history.length-1)
        printHistory(history);
        console.log(history);
    }
}



var operator = document.getElementsByClassName("elements");
for(var i = 0 ;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        var output = GetAnswer();
        var history = GetHistory()
            if(this.id == "="){
                history = history + output
                printHistory(history);
                history = history.replace(/%/g,"/100*")
                history = history.replace(/÷/g,"/")
                history = history.replace(/×/g,"*")
                var res = eval(history);
                answer(res);
                
            }
            else if(this.id == "."){
                answer(output+this.id);
            }
            else if(this.id == "clear"){
                clear()
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

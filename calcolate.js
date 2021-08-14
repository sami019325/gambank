// save
const Car = num1sami = document.getElementById("presvaluesami").innerText;
  
  window.localStorage.setItem('car', JSON.stringify(Car));



//

function prevsami(){
    samip=parseInt(num1sami);
    document.getElementById("prevaluesami").innerHTML = samip;
}


function mnssami()
{
        num1sami = document.getElementById("presvaluesami").innerText;
        num2sami = document.getElementById("rstlsami").value;
        sami=parseInt(num1sami)-parseInt(num2sami);
       
        
        
}

function sumsami (){
    document.getElementById("presvaluesami").innerHTML = sami;
}

function clrtext(){
    document.getElementById("rstlsami").value=null;

}

// the part of plus

function prevsamipl(){
    samip=parseInt(num1sami);
    document.getElementById("prevaluesami").innerHTML = samip;
}


function mnssamipl()
{
        num1sami = document.getElementById("presvaluesami").innerText;
        num2sami = document.getElementById("rstlsami").value;
        sami=parseInt(num1sami)+parseInt(num2sami);
        
}

function sumsamipl (){
    document.getElementById("presvaluesami").innerHTML = sami;
}

function clrtext(){
    document.getElementById("rstlsami").value=null;

}

// reset the value
function resetsami(){
    document.getElementById("presvaluesami").innerHTML="500";
}




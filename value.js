function displyValue(){
    document.getElementById('takeValueBG').style.display = "block";
        document.getElementById('inputValue').style.display = "block";
        document.getElementById('okOfValue').style.display = "block";    

}


function displyNone(){
    if (typeof gottenNbr !== 'undefined' && gottenNbr) {
        document.getElementById('takeValueBG').style.display = "none";
        document.getElementById('inputValue').style.display = "none";
        document.getElementById('okOfValue').style.display = "none";    
    };
 //   if( gottenNbr !== null) { }

   
}


function setValueOfPresent(){
    gottenNbr = document.getElementById("inputValue").value;
    if (typeof gottenNbr !== 'undefined' && gottenNbr) {
        document.getElementById("presvaluesami").innerHTML= gottenNbr;
        document.getElementById("presvaluemonika").innerHTML= gottenNbr;
        document.getElementById("presvaluemahin").innerHTML= gottenNbr;
        document.getElementById("presvaluejoy").innerHTML= gottenNbr;
        
    };
}

function setValueOfPresentLocal(){
    const myJSONmonika = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementmonika', myJSONmonika);

  const myJSONsami = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementsami', myJSONsami);


  const myJSONmahin = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementmahin', myJSONmahin);


  const myJSONjoy = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementjoy', myJSONjoy);

  const myJSONjayan = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementjayan', myJSONjayan);


  const myJSONalvee = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementalvee', myJSONalvee);


  const myJSONarefin = JSON.stringify(gottenNbr);
  localStorage.setItem('localelementarefin', myJSONarefin);


  
  
     window.location.reload(true);
}

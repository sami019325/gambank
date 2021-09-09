function displyValue(){
    document.getElementById('takeValueBG').style.display = "block";
        document.getElementById('inputValue').style.display = "block";
        document.getElementById('okOfValue').style.display = "block";  
        document.getElementById('crossOfValue').style.display = "block";      

} 


function displyNone(){
    if (typeof gottenNbr !== 'undefined' && gottenNbr) {
        document.getElementById('takeValueBG').style.display = "none";
        document.getElementById('inputValue').style.display = "none";
        document.getElementById('okOfValue').style.display = "none"; 
      
    }   
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

function crossOfValue(){
    document.getElementById('takeValueBG').style.display = "none";
        document.getElementById('inputValue').style.display = "none";
        document.getElementById('okOfValue').style.display = "none";    
        document.getElementById('crossOfValue').style.display = "none";    
}










// the score are the score are the score are the score are the score are the score are the score are the score are the score are 
function seeScr(){
    document.getElementById("scoreSection").style.display ="block";
}

function scoreOfValue(){
    document.getElementById("scoreSection").style.display ="none";
   // document.getElementById('ScoreOfSami').style.top = "70px";
}









const  alocal =  localStorage.getItem("localelementsami");
a = JSON.parse(alocal);

const  blocal =  localStorage.getItem("localelementmonika");
b = JSON.parse(blocal);

const  clocal =  localStorage.getItem("localelementmahin");
c = JSON.parse(clocal);

const  dlocal =  localStorage.getItem("localelementjoy");
d = JSON.parse(dlocal);

const  elocal =  localStorage.getItem("localelementjayan");
e = JSON.parse(elocal);

const  flocal =  localStorage.getItem("localelementalvee");
f = JSON.parse(flocal);


const  glocal =  localStorage.getItem("localelementarefin");
g = JSON.parse(glocal);



// the function section 



function setresult(){

// first scr of a ------------------------------111111111111------------
if (a>b && a>c && a>d && a>e && a>f && a>g ){
    console.log('a is larhgest')
    document.getElementById("ScoreOfsami").style.top="10px";
}

// second scr of a --------------------------------2222222222---------
if (a<b && a>c && a>d && a>e && a>f && a>g ){
    console.log('a is second after b')
    document.getElementById("ScoreOfsami").style.top="70px";
}
if (a>b && a<c && a>d && a>e && a>f && a>g ){
    console.log('a is second after c')
    document.getElementById("ScoreOfsami").style.top="70px";
}
if (a>b && a>c && a<d && a>e && a>f && a>g ){
    console.log('a is second after d')
    document.getElementById("ScoreOfsami").style.top="70px";
}
if (a>b && a>c && a>d && a<e && a>f && a>g ){
    console.log('a is second after e')
    document.getElementById("ScoreOfsami").style.top="70px";
}
if (a>b && a>c && a>d && a>e && a<f && a>g ){
    console.log('a is second after f')
    document.getElementById("ScoreOfsami").style.top="70px";
}
if (a>b && a>c && a>d && a>e && a>f && a<g ){
    console.log('a is second after f')
    document.getElementById("ScoreOfsami").style.top="70px";
}


// third scr of a ---------------------------------3333333333---------

if (a<b && a<c && a>d && a>e && a>f && a>g ){
    console.log('a is third after bc')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a<c && a<d && a>e && a>f && a>g ){
    console.log('a is third after cd')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a>c && a<d && a<e && a>f && a>g ){
    console.log('a is third after de')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a>c && a>d && a<e && a<f && a>g ){
    console.log('a is third after ef')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a>c && a>d && a>e && a<f && a<g ){
    console.log('a is third after fg')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a<b && a>c && a>d && a>e && a>f && a<g ){
    console.log('a is third after gb')
    document.getElementById("ScoreOfsami").style.top="130px";
}
//bd be bf
if (a<b && a>c && a<d && a>e && a>f && a>g ){
    console.log('a is third after bd')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a<b && a>c && a>d && a<e && a>f && a>g ){
    console.log('a is third after be')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a<b && a>c && a>d && a>e && a<f && a>g ){
    console.log('a is third after bf')
    document.getElementById("ScoreOfsami").style.top="130px";
}
//ce cf cg 
if (a>b && a<c && a>d && a<e && a>f && a>g ){
    console.log('a is third after ce')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a<c && a>d && a>e && a<f && a>g ){
    console.log('a is third after cf')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a<c && a>d && a>e && a>f && a<g ){
    console.log('a is third after cg')
    document.getElementById("ScoreOfsami").style.top="130px";
}
// df dg
if (a>b && a>c && a<d && a>e && a<f && a>g ){
    console.log('a is third after df')
    document.getElementById("ScoreOfsami").style.top="130px";
}
if (a>b && a>c && a<d && a>e && a>f && a<g ){
    console.log('a is third after dg')
    document.getElementById("ScoreOfsami").style.top="130px";
}
// eg
if (a>b && a>c && a>d && a<e && a>f && a<g ){
    console.log('a is third after eg')
    document.getElementById("ScoreOfsami").style.top="130px";
}


// forth scr of a------------------------------444444444444--------------------------

//bcd bce bcf bcg
if (a<b && a<c && a<d && a>e && a>f && a>g ){
    console.log('a is forth after bcd')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a<c && a>d && a<e && a>f && a>g ){
    console.log('a is forth after bce')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a<c && a>d && a>e && a<f && a>g ){
    console.log('a is forth after bcf')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a<c && a>d && a>e && a>f && a<g ){
    console.log('a is forth after bcg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//bde bdf bdg
if (a<b && a>c && a<d && a<e && a>f && a>g ){
    console.log('a is forth after bde')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a>c && a<d && a>e && a<f && a>g ){
    console.log('a is forth after bdf')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a>c && a<d && a>e && a>f && a<g ){
    console.log('a is forth after bdg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//bef beg
if (a<b && a>c && a>d && a<e && a<f && a>g ){
    console.log('a is forth after bef')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a<b && a>c && a>d && a<e && a>f && a<g ){
    console.log('a is forth after beg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//bfg
if (a<b && a>c && a>d && a>e && a<f && a<g ){
    console.log('a is forth after bfg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//cde cdf cdg
if (a>b && a<c && a<d && a<e && a>f && a>g ){
    console.log('a is forth after cde')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a>b && a<c && a<d && a>e && a<f && a>g ){
    console.log('a is forth after cdf')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a>b && a<c && a<d && a>e && a>f && a<g ){
    console.log('a is forth after cdg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
// cef ceg
if (a>b && a<c && a>d && a<e && a<f && a>g ){
    console.log('a is forth after cef')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a>b && a<c && a>d && a<e && a>f && a<g ){
    console.log('a is forth after ceg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//cfg
if (a>b && a<c && a>d && a>e && a<f && a<g ){
    console.log('a is forth after cfg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//def deg
if (a>b && a>c && a<d && a<e && a<f && a>g ){
    console.log('a is forth after def')
    document.getElementById("ScoreOfsami").style.top="190px";
}
if (a>b && a>c && a<d && a<e && a>f && a<g ){
    console.log('a is forth after deg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//dfg
if (a>b && a>c && a<d && a>e && a<f && a<g ){
    console.log('a is forth after dfg')
    document.getElementById("ScoreOfsami").style.top="190px";
}
//efg
if (a>b && a>c && a>d && a<e && a<f && a<g ){
    console.log('a is forth after efg')
    document.getElementById("ScoreOfsami").style.top="190px";
}



// fifth scr of a------------------------------55555555555--------------------------

//bcde bcdf bcdg
if (a<b && a<c && a<d && a<e && a>f && a>g ){
    console.log('a is fifth after bcde')
    document.getElementById("ScoreOfsami").style.top="250px";
}
if (a<b && a<c && a<d && a>e && a<f && a>g ){
    console.log('a is fifth after bcdf')
    document.getElementById("ScoreOfsami").style.top="250px";
}
if (a<b && a<c && a<d && a>e && a>f && a<g ){
    console.log('a is fifth after bcdg')
    document.getElementById("ScoreOfsami").style.top="250px";
}
// bcef bceg
if (a<b && a<c && a>d && a<e && a<f && a>g ){
    console.log('a is fifth after bcef')
    document.getElementById("ScoreOfsami").style.top="250px";
}
if (a<b && a<c && a>d && a<e && a>f && a<g ){
    console.log('a is fifth after bceg')
    document.getElementById("ScoreOfsami").style.top="250px";
}
//bcfg
if (a<b && a<c && a>d && a>e && a<f && a<g ){
    console.log('a is fifth after bcfg')
    document.getElementById("ScoreOfsami").style.top="250px";
}
//bdef bdeg
if (a<b && a>c && a<d && a<e && a<f && a>g ){
    console.log('a is fifth after bdef')
    document.getElementById("ScoreOfsami").style.top="250px";
}
if (a<b && a>c && a<d && a<e && a>f && a<g ){
    console.log('a is fifth after bdeg')
    document.getElementById("ScoreOfsami").style.top="250px";
}
// bdfg
if (a<b && a>c && a<d && a>e && a<f && a<g ){
    console.log('a is fifth after bdfg')
    document.getElementById("ScoreOfsami").style.top="250px";
}
//befg
if (a<b && a>c && a>d && a<e && a<f && a<g ){
    console.log('a is fifth after befg')
    document.getElementById("ScoreOfsami").style.top="250px";
}



// sixth scr of a ------------------------------666666666---------


if (a>b && a<c && a<d && a<e && a<f && a<g ){
    console.log('a is sixth before b')
    document.getElementById("ScoreOfsami").style.top="310px";
}
if (a<b && a>c && a<d && a<e && a<f && a<g ){
    console.log('a is sixth before c')
    document.getElementById("ScoreOfsami").style.top="310px";
}
if (a<b && a<c && a>d && a<e && a<f && a<g ){
    console.log('a is sixth before d')
    document.getElementById("ScoreOfsami").style.top="310px";
}
if (a<b && a<c && a<d && a>e && a<f && a<g ){
    console.log('a is sixth before e')
    document.getElementById("ScoreOfsami").style.top="310px";
}
if (a<b && a<c && a<d && a<e && a>f && a<g ){
    console.log('a is sixth before f')
    document.getElementById("ScoreOfsami").style.top="310px";
}
if (a<b && a<c && a<d && a<e && a<f && a>g ){
    console.log('a is sixth before f')
    document.getElementById("ScoreOfsami").style.top="310px";
}


// last scr of a ------------------------------777777777------------
if (a<b && a<c && a<d && a<e && a<f && a<g ){
    console.log('a is smallest')
    document.getElementById("ScoreOfsami").style.top="370px";
}













//bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb

// first scr of b ------------------------------111111111111------------
if (b>a && b>c && b>d && b>e && b>f && b>g ){
    console.log('b is lbrhgest')
    document.getElementById("ScoreOfmonika").style.top="10px";
}

// second scr of b --------------------------------2222222222---------
if (b<a && b>c && b>d && b>e && b>f && b>g ){
    console.log('b is second bfter b')
    document.getElementById("ScoreOfmonika").style.top="70px";
}
if (b>a && b<c && b>d && b>e && b>f && b>g ){
    console.log('b is second bfter c')
    document.getElementById("ScoreOfmonika").style.top="70px";
}
if (b>a && b>c && b<d && b>e && b>f && b>g ){
    console.log('b is second bfter d')
    document.getElementById("ScoreOfmonika").style.top="70px";
}
if (b>a && b>c && b>d && b<e && b>f && b>g ){
    console.log('b is second bfter e')
    document.getElementById("ScoreOfmonika").style.top="70px";
}
if (b>a && b>c && b>d && b>e && b<f && b>g ){
    console.log('b is second bfter f')
    document.getElementById("ScoreOfmonika").style.top="70px";
}
if (b>a && b>c && b>d && b>e && b>f && b<g ){
    console.log('b is second bfter f')
    document.getElementById("ScoreOfmonika").style.top="70px";
}


// third scr of b ---------------------------------3333333333---------

if (b<a && b<c && b>d && b>e && b>f && b>g ){
    console.log('b is third bfter bc')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b<c && b<d && b>e && b>f && b>g ){
    console.log('b is third bfter cd')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b>c && b<d && b<e && b>f && b>g ){
    console.log('b is third bfter de')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b>c && b>d && b<e && b<f && b>g ){
    console.log('b is third bfter ef')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b>c && b>d && b>e && b<f && b<g ){
    console.log('b is third bfter fg')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b<a && b>c && b>d && b>e && b>f && b<g ){
    console.log('b is third bfter gb')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
//bd be bf
if (b<a && b>c && b<d && b>e && b>f && b>g ){
    console.log('b is third bfter bd')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b<a && b>c && b>d && b<e && b>f && b>g ){
    console.log('b is third bfter be')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b<a && b>c && b>d && b>e && b<f && b>g ){
    console.log('b is third bfter bf')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
//ce cf cg 
if (b>a && b<c && b>d && b<e && b>f && b>g ){
    console.log('b is third bfter ce')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b<c && b>d && b>e && b<f && b>g ){
    console.log('b is third bfter cf')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b<c && b>d && b>e && b>f && b<g ){
    console.log('b is third bfter cg')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
// df dg
if (b>a && b>c && b<d && b>e && b<f && b>g ){
    console.log('b is third bfter df')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
if (b>a && b>c && b<d && b>e && b>f && b<g ){
    console.log('b is third bfter dg')
    document.getElementById("ScoreOfmonika").style.top="130px";
}
// eg
if (b>a && b>c && b>d && b<e && b>f && b<g ){
    console.log('b is third bfter eg')
    document.getElementById("ScoreOfmonika").style.top="130px";
}


// forth scr of b------------------------------444444444444--------------------------

//bcd bce bcf bcg
if (b<a && b<c && b<d && b>e && b>f && b>g ){
    console.log('b is forth bfter bcd')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b<c && b>d && b<e && b>f && b>g ){
    console.log('b is forth bfter bce')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b<c && b>d && b>e && b<f && b>g ){
    console.log('b is forth bfter bcf')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b<c && b>d && b>e && b>f && b<g ){
    console.log('b is forth bfter bcg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//bde bdf bdg
if (b<a && b>c && b<d && b<e && b>f && b>g ){
    console.log('b is forth bfter bde')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b>c && b<d && b>e && b<f && b>g ){
    console.log('b is forth bfter bdf')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b>c && b<d && b>e && b>f && b<g ){
    console.log('b is forth bfter bdg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//bef beg
if (b<a && b>c && b>d && b<e && b<f && b>g ){
    console.log('b is forth bfter bef')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b<a && b>c && b>d && b<e && b>f && b<g ){
    console.log('b is forth bfter beg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//bfg
if (b<a && b>c && b>d && b>e && b<f && b<g ){
    console.log('b is forth bfter bfg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//cde cdf cdg
if (b>a && b<c && b<d && b<e && b>f && b>g ){
    console.log('b is forth bfter cde')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b>a && b<c && b<d && b>e && b<f && b>g ){
    console.log('b is forth bfter cdf')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b>a && b<c && b<d && b>e && b>f && b<g ){
    console.log('b is forth bfter cdg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
// cef ceg
if (b>a && b<c && b>d && b<e && b<f && b>g ){
    console.log('b is forth bfter cef')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b>a && b<c && b>d && b<e && b>f && b<g ){
    console.log('b is forth bfter ceg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//cfg
if (b>a && b<c && b>d && b>e && b<f && b<g ){
    console.log('b is forth bfter cfg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//def deg
if (b>a && b>c && b<d && b<e && b<f && b>g ){
    console.log('b is forth bfter def')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
if (b>a && b>c && b<d && b<e && b>f && b<g ){
    console.log('b is forth bfter deg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//dfg
if (b>a && b>c && b<d && b>e && b<f && b<g ){
    console.log('b is forth bfter dfg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}
//efg
if (b>a && b>c && b>d && b<e && b<f && b<g ){
    console.log('b is forth bfter efg')
    document.getElementById("ScoreOfmonika").style.top="190px";
}



// fifth scr of b------------------------------55555555555--------------------------

//bcde bcdf bcdg
if (b<a && b<c && b<d && b<e && b>f && b>g ){
    console.log('b is fifth bfter bcde')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
if (b<a && b<c && b<d && b>e && b<f && b>g ){
    console.log('b is fifth bfter bcdf')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
if (b<a && b<c && b<d && b>e && b>f && b<g ){
    console.log('b is fifth bfter bcdg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
// bcef bceg
if (b<a && b<c && b>d && b<e && b<f && b>g ){
    console.log('b is fifth bfter bcef')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
if (b<a && b<c && b>d && b<e && b>f && b<g ){
    console.log('b is fifth bfter bceg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
//bcfg
if (b<a && b<c && b>d && b>e && b<f && b<g ){
    console.log('b is fifth bfter bcfg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
//bdef bdeg
if (b<a && b>c && b<d && b<e && b<f && b>g ){
    console.log('b is fifth bfter bdef')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
if (b<a && b>c && b<d && b<e && b>f && b<g ){
    console.log('b is fifth bfter bdeg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
// bdfg
if (b<a && b>c && b<d && b>e && b<f && b<g ){
    console.log('b is fifth bfter bdfg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}
//befg
if (b<a && b>c && b>d && b<e && b<f && b<g ){
    console.log('b is fifth bfter befg')
    document.getElementById("ScoreOfmonika").style.top="250px";
}



// sixth scr of b ------------------------------666666666---------


if (b>a && b<c && b<d && b<e && b<f && b<g ){
    console.log('b is sixth before b')
    document.getElementById("ScoreOfmonika").style.top="310px";
}
if (b<a && b>c && b<d && b<e && b<f && b<g ){
    console.log('b is sixth before c')
    document.getElementById("ScoreOfmonika").style.top="310px";
}
if (b<a && b<c && b>d && b<e && b<f && b<g ){
    console.log('b is sixth before d')
    document.getElementById("ScoreOfmonika").style.top="310px";
}
if (b<a && b<c && b<d && b>e && b<f && b<g ){
    console.log('b is sixth before e')
    document.getElementById("ScoreOfmonika").style.top="310px";
}
if (b<a && b<c && b<d && b<e && b>f && b<g ){
    console.log('b is sixth before f')
    document.getElementById("ScoreOfmonika").style.top="310px";
}
if (b<a && b<c && b<d && b<e && b<f && b>g ){
    console.log('b is sixth before f')
    document.getElementById("ScoreOfmonika").style.top="310px";
}


// lbst scr of b ------------------------------777777777------------
if (b<a && b<c && b<d && b<e && b<f && b<g ){
    console.log('b is smbllest')
    document.getElementById("ScoreOfmonika").style.top="370px";
}














//cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc


// first scr of c ------------------------------111111111111------------
if (c>b && c>a && c>d && c>e && c>f && c>g ){
    console.log('c is lcrhgest')
    document.getElementById("ScoreOfmahin").style.top="10px";
}

// second scr of c --------------------------------2222222222---------
if (c<b && c>a && c>d && c>e && c>f && c>g ){
    console.log('c is second cfter b')
    document.getElementById("ScoreOfmahin").style.top="70px";
}
if (c>b && c<a && c>d && c>e && c>f && c>g ){
    console.log('c is second cfter c')
    document.getElementById("ScoreOfmahin").style.top="70px";
}
if (c>b && c>a && c<d && c>e && c>f && c>g ){
    console.log('c is second cfter d')
    document.getElementById("ScoreOfmahin").style.top="70px";
}
if (c>b && c>a && c>d && c<e && c>f && c>g ){
    console.log('c is second cfter e')
    document.getElementById("ScoreOfmahin").style.top="70px";
}
if (c>b && c>a && c>d && c>e && c<f && c>g ){
    console.log('c is second cfter f')
    document.getElementById("ScoreOfmahin").style.top="70px";
}
if (c>b && c>a && c>d && c>e && c>f && c<g ){
    console.log('c is second cfter f')
    document.getElementById("ScoreOfmahin").style.top="70px";
}


// third scr of c ---------------------------------3333333333---------

if (c<b && c<a && c>d && c>e && c>f && c>g ){
    console.log('c is third cfter bc')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c<a && c<d && c>e && c>f && c>g ){
    console.log('c is third cfter cd')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c>a && c<d && c<e && c>f && c>g ){
    console.log('c is third cfter de')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c>a && c>d && c<e && c<f && c>g ){
    console.log('c is third cfter ef')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c>a && c>d && c>e && c<f && c<g ){
    console.log('c is third cfter fg')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c<b && c>a && c>d && c>e && c>f && c<g ){
    console.log('c is third cfter gb')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
//bd be bf
if (c<b && c>a && c<d && c>e && c>f && c>g ){
    console.log('c is third cfter bd')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c<b && c>a && c>d && c<e && c>f && c>g ){
    console.log('c is third cfter be')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c<b && c>a && c>d && c>e && c<f && c>g ){
    console.log('c is third cfter bf')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
//ce cf cg 
if (c>b && c<a && c>d && c<e && c>f && c>g ){
    console.log('c is third cfter ce')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c<a && c>d && c>e && c<f && c>g ){
    console.log('c is third cfter cf')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c<a && c>d && c>e && c>f && c<g ){
    console.log('c is third cfter cg')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
// df dg
if (c>b && c>a && c<d && c>e && c<f && c>g ){
    console.log('c is third cfter df')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
if (c>b && c>a && c<d && c>e && c>f && c<g ){
    console.log('c is third cfter dg')
    document.getElementById("ScoreOfmahin").style.top="130px";
}
// eg
if (c>b && c>a && c>d && c<e && c>f && c<g ){
    console.log('c is third cfter eg')
    document.getElementById("ScoreOfmahin").style.top="130px";
}


// forth scr of c------------------------------444444444444--------------------------

//bcd bce bcf bcg
if (c<b && c<a && c<d && c>e && c>f && c>g ){
    console.log('c is forth cfter bcd')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c<a && c>d && c<e && c>f && c>g ){
    console.log('c is forth cfter bce')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c<a && c>d && c>e && c<f && c>g ){
    console.log('c is forth cfter bcf')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c<a && c>d && c>e && c>f && c<g ){
    console.log('c is forth cfter bcg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//bde bdf bdg
if (c<b && c>a && c<d && c<e && c>f && c>g ){
    console.log('c is forth cfter bde')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c>a && c<d && c>e && c<f && c>g ){
    console.log('c is forth cfter bdf')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c>a && c<d && c>e && c>f && c<g ){
    console.log('c is forth cfter bdg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//bef beg
if (c<b && c>a && c>d && c<e && c<f && c>g ){
    console.log('c is forth cfter bef')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c<b && c>a && c>d && c<e && c>f && c<g ){
    console.log('c is forth cfter beg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//bfg
if (c<b && c>a && c>d && c>e && c<f && c<g ){
    console.log('c is forth cfter bfg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//cde cdf cdg
if (c>b && c<a && c<d && c<e && c>f && c>g ){
    console.log('c is forth cfter cde')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c>b && c<a && c<d && c>e && c<f && c>g ){
    console.log('c is forth cfter cdf')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c>b && c<a && c<d && c>e && c>f && c<g ){
    console.log('c is forth cfter cdg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
// cef ceg
if (c>b && c<a && c>d && c<e && c<f && c>g ){
    console.log('c is forth cfter cef')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c>b && c<a && c>d && c<e && c>f && c<g ){
    console.log('c is forth cfter ceg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//cfg
if (c>b && c<a && c>d && c>e && c<f && c<g ){
    console.log('c is forth cfter cfg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//def deg
if (c>b && c>a && c<d && c<e && c<f && c>g ){
    console.log('c is forth cfter def')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
if (c>b && c>a && c<d && c<e && c>f && c<g ){
    console.log('c is forth cfter deg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//dfg
if (c>b && c>a && c<d && c>e && c<f && c<g ){
    console.log('c is forth cfter dfg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}
//efg
if (c>b && c>a && c>d && c<e && c<f && c<g ){
    console.log('c is forth cfter efg')
    document.getElementById("ScoreOfmahin").style.top="190px";
}



// fifth scr of c------------------------------55555555555--------------------------

//bcde bcdf bcdg
if (c<b && c<a && c<d && c<e && c>f && c>g ){
    console.log('c is fifth cfter bcde')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
if (c<b && c<a && c<d && c>e && c<f && c>g ){
    console.log('c is fifth cfter bcdf')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
if (c<b && c<a && c<d && c>e && c>f && c<g ){
    console.log('c is fifth cfter bcdg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
// bcef bceg
if (c<b && c<a && c>d && c<e && c<f && c>g ){
    console.log('c is fifth cfter bcef')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
if (c<b && c<a && c>d && c<e && c>f && c<g ){
    console.log('c is fifth cfter bceg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
//bcfg
if (c<b && c<a && c>d && c>e && c<f && c<g ){
    console.log('c is fifth cfter bcfg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
//bdef bdeg
if (c<b && c>a && c<d && c<e && c<f && c>g ){
    console.log('c is fifth cfter bdef')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
if (c<b && c>a && c<d && c<e && c>f && c<g ){
    console.log('c is fifth cfter bdeg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
// bdfg
if (c<b && c>a && c<d && c>e && c<f && c<g ){
    console.log('c is fifth cfter bdfg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}
//befg
if (c<b && c>a && c>d && c<e && c<f && c<g ){
    console.log('c is fifth cfter befg')
    document.getElementById("ScoreOfmahin").style.top="250px";
}



// sixth scr of c ------------------------------666666666---------


if (c>b && c<a && c<d && c<e && c<f && c<g ){
    console.log('c is sixth before b')
    document.getElementById("ScoreOfmahin").style.top="310px";
}
if (c<b && c>a && c<d && c<e && c<f && c<g ){
    console.log('c is sixth before c')
    document.getElementById("ScoreOfmahin").style.top="310px";
}
if (c<b && c<a && c>d && c<e && c<f && c<g ){
    console.log('c is sixth before d')
    document.getElementById("ScoreOfmahin").style.top="310px";
}
if (c<b && c<a && c<d && c>e && c<f && c<g ){
    console.log('c is sixth before e')
    document.getElementById("ScoreOfmahin").style.top="310px";
}
if (c<b && c<a && c<d && c<e && c>f && c<g ){
    console.log('c is sixth before f')
    document.getElementById("ScoreOfmahin").style.top="310px";
}
if (c<b && c<a && c<d && c<e && c<f && c>g ){
    console.log('c is sixth before f')
    document.getElementById("ScoreOfmahin").style.top="310px";
}


// lcst scr of c ------------------------------777777777------------
if (c<b && c<a && c<d && c<e && c<f && c<g ){
    console.log('c is smcllest')
    document.getElementById("ScoreOfmahin").style.top="370px";
}















//ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

// first scr of d ------------------------------111111111111------------
if (d>b && d>c && d>a && d>e && d>f && d>g ){
    console.log('d is ldrhgest')
    document.getElementById("ScoreOfjoy").style.top="10px";
}

// second scr of d --------------------------------2222222222---------
if (d<b && d>c && d>a && d>e && d>f && d>g ){
    console.log('d is second dfter b')
    document.getElementById("ScoreOfjoy").style.top="70px";
}
if (d>b && d<c && d>a && d>e && d>f && d>g ){
    console.log('d is second dfter c')
    document.getElementById("ScoreOfjoy").style.top="70px";
}
if (d>b && d>c && d<a && d>e && d>f && d>g ){
    console.log('d is second dfter d')
    document.getElementById("ScoreOfjoy").style.top="70px";
}
if (d>b && d>c && d>a && d<e && d>f && d>g ){
    console.log('d is second dfter e')
    document.getElementById("ScoreOfjoy").style.top="70px";
}
if (d>b && d>c && d>a && d>e && d<f && d>g ){
    console.log('d is second dfter f')
    document.getElementById("ScoreOfjoy").style.top="70px";
}
if (d>b && d>c && d>a && d>e && d>f && d<g ){
    console.log('d is second dfter f')
    document.getElementById("ScoreOfjoy").style.top="70px";
}


// third scr of d ---------------------------------3333333333---------

if (d<b && d<c && d>a && d>e && d>f && d>g ){
    console.log('d is third dfter bc')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d<c && d<a && d>e && d>f && d>g ){
    console.log('d is third dfter cd')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d>c && d<a && d<e && d>f && d>g ){
    console.log('d is third dfter de')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d>c && d>a && d<e && d<f && d>g ){
    console.log('d is third dfter ef')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d>c && d>a && d>e && d<f && d<g ){
    console.log('d is third dfter fg')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d<b && d>c && d>a && d>e && d>f && d<g ){
    console.log('d is third dfter gb')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
//bd be bf
if (d<b && d>c && d<a && d>e && d>f && d>g ){
    console.log('d is third dfter bd')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d<b && d>c && d>a && d<e && d>f && d>g ){
    console.log('d is third dfter be')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d<b && d>c && d>a && d>e && d<f && d>g ){
    console.log('d is third dfter bf')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
//ce cf cg 
if (d>b && d<c && d>a && d<e && d>f && d>g ){
    console.log('d is third dfter ce')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d<c && d>a && d>e && d<f && d>g ){
    console.log('d is third dfter cf')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d<c && d>a && d>e && d>f && d<g ){
    console.log('d is third dfter cg')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
// df dg
if (d>b && d>c && d<a && d>e && d<f && d>g ){
    console.log('d is third dfter df')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
if (d>b && d>c && d<a && d>e && d>f && d<g ){
    console.log('d is third dfter dg')
    document.getElementById("ScoreOfjoy").style.top="130px";
}
// eg
if (d>b && d>c && d>a && d<e && d>f && d<g ){
    console.log('d is third dfter eg')
    document.getElementById("ScoreOfjoy").style.top="130px";
}


// forth scr of d------------------------------444444444444--------------------------

//bcd bce bcf bcg
if (d<b && d<c && d<a && d>e && d>f && d>g ){
    console.log('d is forth dfter bcd')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d<c && d>a && d<e && d>f && d>g ){
    console.log('d is forth dfter bce')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d<c && d>a && d>e && d<f && d>g ){
    console.log('d is forth dfter bcf')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d<c && d>a && d>e && d>f && d<g ){
    console.log('d is forth dfter bcg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//bde bdf bdg
if (d<b && d>c && d<a && d<e && d>f && d>g ){
    console.log('d is forth dfter bde')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d>c && d<a && d>e && d<f && d>g ){
    console.log('d is forth dfter bdf')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d>c && d<a && d>e && d>f && d<g ){
    console.log('d is forth dfter bdg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//bef beg
if (d<b && d>c && d>a && d<e && d<f && d>g ){
    console.log('d is forth dfter bef')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d<b && d>c && d>a && d<e && d>f && d<g ){
    console.log('d is forth dfter beg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//bfg
if (d<b && d>c && d>a && d>e && d<f && d<g ){
    console.log('d is forth dfter bfg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//cde cdf cdg
if (d>b && d<c && d<a && d<e && d>f && d>g ){
    console.log('d is forth dfter cde')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d>b && d<c && d<a && d>e && d<f && d>g ){
    console.log('d is forth dfter cdf')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d>b && d<c && d<a && d>e && d>f && d<g ){
    console.log('d is forth dfter cdg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
// cef ceg
if (d>b && d<c && d>a && d<e && d<f && d>g ){
    console.log('d is forth dfter cef')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d>b && d<c && d>a && d<e && d>f && d<g ){
    console.log('d is forth dfter ceg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//cfg
if (d>b && d<c && d>a && d>e && d<f && d<g ){
    console.log('d is forth dfter cfg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//def deg
if (d>b && d>c && d<a && d<e && d<f && d>g ){
    console.log('d is forth dfter def')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
if (d>b && d>c && d<a && d<e && d>f && d<g ){
    console.log('d is forth dfter deg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//dfg
if (d>b && d>c && d<a && d>e && d<f && d<g ){
    console.log('d is forth dfter dfg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}
//efg
if (d>b && d>c && d>a && d<e && d<f && d<g ){
    console.log('d is forth dfter efg')
    document.getElementById("ScoreOfjoy").style.top="190px";
}



// fifth scr of d------------------------------55555555555--------------------------

//bcde bcdf bcdg
if (d<b && d<c && d<a && d<e && d>f && d>g ){
    console.log('d is fifth dfter bcde')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
if (d<b && d<c && d<a && d>e && d<f && d>g ){
    console.log('d is fifth dfter bcdf')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
if (d<b && d<c && d<a && d>e && d>f && d<g ){
    console.log('d is fifth dfter bcdg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
// bcef bceg
if (d<b && d<c && d>a && d<e && d<f && d>g ){
    console.log('d is fifth dfter bcef')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
if (d<b && d<c && d>a && d<e && d>f && d<g ){
    console.log('d is fifth dfter bceg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
//bcfg
if (d<b && d<c && d>a && d>e && d<f && d<g ){
    console.log('d is fifth dfter bcfg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
//bdef bdeg
if (d<b && d>c && d<a && d<e && d<f && d>g ){
    console.log('d is fifth dfter bdef')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
if (d<b && d>c && d<a && d<e && d>f && d<g ){
    console.log('d is fifth dfter bdeg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
// bdfg
if (d<b && d>c && d<a && d>e && d<f && d<g ){
    console.log('d is fifth dfter bdfg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}
//befg
if (d<b && d>c && d>a && d<e && d<f && d<g ){
    console.log('d is fifth dfter befg')
    document.getElementById("ScoreOfjoy").style.top="250px";
}



// sixth scr of d ------------------------------666666666---------


if (d>b && d<c && d<a && d<e && d<f && d<g ){
    console.log('d is sixth before b')
    document.getElementById("ScoreOfjoy").style.top="310px";
}
if (d<b && d>c && d<a && d<e && d<f && d<g ){
    console.log('d is sixth before c')
    document.getElementById("ScoreOfjoy").style.top="310px";
}
if (d<b && d<c && d>a && d<e && d<f && d<g ){
    console.log('d is sixth before d')
    document.getElementById("ScoreOfjoy").style.top="310px";
}
if (d<b && d<c && d<a && d>e && d<f && d<g ){
    console.log('d is sixth before e')
    document.getElementById("ScoreOfjoy").style.top="310px";
}
if (d<b && d<c && d<a && d<e && d>f && d<g ){
    console.log('d is sixth before f')
    document.getElementById("ScoreOfjoy").style.top="310px";
}
if (d<b && d<c && d<a && d<e && d<f && d>g ){
    console.log('d is sixth before f')
    document.getElementById("ScoreOfjoy").style.top="310px";
}


// ldst scr of d ------------------------------777777777------------
if (d<b && d<c && d<a && d<e && d<f && d<g ){
    console.log('d is smdllest')
    document.getElementById("ScoreOfjoy").style.top="370px";
}










//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


// first scr of e ------------------------------111111111111------------
if (e>b && e>c && e>d && e>a && e>f && e>g ){
        console.log('e is lerhgest')
        document.getElementById("ScoreOfjayan").style.top="10px";
    }
    
    
    // second scr of e --------------------------------2222222222---------
    if (e<b && e>c && e>d && e>a && e>f && e>g ){
        console.log('e is second efter b')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    if (e>b && e<c && e>d && e>a && e>f && e>g ){
        console.log('e is second efter c')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    if (e>b && e>c && e<d && e>a && e>f && e>g ){
        console.log('e is second efter d')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    if (e>b && e>c && e>d && e<a && e>f && e>g ){
        console.log('e is second efter e')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    if (e>b && e>c && e>d && e>a && e<f && e>g ){
        console.log('e is second efter f')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    if (e>b && e>c && e>d && e>a && e>f && e<g ){
        console.log('e is second efter f')
        document.getElementById("ScoreOfjayan").style.top="70px";
    }
    
    
    
    // third scr of e ---------------------------------3333333333---------
    
    
    if (e<b && e<c && e>d && e>a && e>f && e>g ){
        console.log('e is third efter bc')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e<c && e<d && e>a && e>f && e>g ){
        console.log('e is third efter cd')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e>c && e<d && e<a && e>f && e>g ){
        console.log('e is third efter de')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e>c && e>d && e<a && e<f && e>g ){
        console.log('e is third efter ef')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e>c && e>d && e>a && e<f && e<g ){
        console.log('e is third efter fg')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e<b && e>c && e>d && e>a && e>f && e<g ){
        console.log('e is third efter gb')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    //bd be bf
    if (e<b && e>c && e<d && e>a && e>f && e>g ){
        console.log('e is third efter bd')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e<b && e>c && e>d && e<a && e>f && e>g ){
        console.log('e is third efter be')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e<b && e>c && e>d && e>a && e<f && e>g ){
        console.log('e is third efter bf')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    //ce cf cg 
    if (e>b && e<c && e>d && e<a && e>f && e>g ){
        console.log('e is third efter ce')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e<c && e>d && e>a && e<f && e>g ){
        console.log('e is third efter cf')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e<c && e>d && e>a && e>f && e<g ){
        console.log('e is third efter cg')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    // df dg
    if (e>b && e>c && e<d && e>a && e<f && e>g ){
        console.log('e is third efter df')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    if (e>b && e>c && e<d && e>a && e>f && e<g ){
        console.log('e is third efter dg')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    // eg
    if (e>b && e>c && e>d && e<a && e>f && e<g ){
        console.log('e is third efter eg')
        document.getElementById("ScoreOfjayan").style.top="130px";
    }
    
    
    
    // forth scr of e------------------------------444444444444--------------------------
    
    
    //bcd bce bcf bcg
    if (e<b && e<c && e<d && e>a && e>f && e>g ){
        console.log('e is forth efter bcd')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e<c && e>d && e<a && e>f && e>g ){
        console.log('e is forth efter bce')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e<c && e>d && e>a && e<f && e>g ){
        console.log('e is forth efter bcf')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e<c && e>d && e>a && e>f && e<g ){
        console.log('e is forth efter bcg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //bde bdf bdg
    if (e<b && e>c && e<d && e<a && e>f && e>g ){
        console.log('e is forth efter bde')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e>c && e<d && e>a && e<f && e>g ){
        console.log('e is forth efter bdf')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e>c && e<d && e>a && e>f && e<g ){
        console.log('e is forth efter bdg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //bef beg
    if (e<b && e>c && e>d && e<a && e<f && e>g ){
        console.log('e is forth efter bef')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e<b && e>c && e>d && e<a && e>f && e<g ){
        console.log('e is forth efter beg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //bfg
    if (e<b && e>c && e>d && e>a && e<f && e<g ){
        console.log('e is forth efter bfg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //cde cdf cdg
    if (e>b && e<c && e<d && e<a && e>f && e>g ){
        console.log('e is forth efter cde')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e>b && e<c && e<d && e>a && e<f && e>g ){
        console.log('e is forth efter cdf')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e>b && e<c && e<d && e>a && e>f && e<g ){
        console.log('e is forth efter cdg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    // cef ceg
    if (e>b && e<c && e>d && e<a && e<f && e>g ){
        console.log('e is forth efter cef')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e>b && e<c && e>d && e<a && e>f && e<g ){
        console.log('e is forth efter ceg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //cfg
    if (e>b && e<c && e>d && e>a && e<f && e<g ){
        console.log('e is forth efter cfg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //def deg
    if (e>b && e>c && e<d && e<a && e<f && e>g ){
        console.log('e is forth efter def')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    if (e>b && e>c && e<d && e<a && e>f && e<g ){
        console.log('e is forth efter deg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //dfg
    if (e>b && e>c && e<d && e>a && e<f && e<g ){
        console.log('e is forth efter dfg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    //efg
    if (e>b && e>c && e>d && e<a && e<f && e<g ){
        console.log('e is forth efter efg')
        document.getElementById("ScoreOfjayan").style.top="190px";
    }
    
    
    
    
    // fifth scr of e------------------------------55555555555--------------------------
    
    
    //bcde bcdf bcdg
    if (e<b && e<c && e<d && e<a && e>f && e>g ){
        console.log('e is fifth efter bcde')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    if (e<b && e<c && e<d && e>a && e<f && e>g ){
        console.log('e is fifth efter bcdf')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    if (e<b && e<c && e<d && e>a && e>f && e<g ){
        console.log('e is fifth efter bcdg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    // bcef bceg
    if (e<b && e<c && e>d && e<a && e<f && e>g ){
        console.log('e is fifth efter bcef')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    if (e<b && e<c && e>d && e<a && e>f && e<g ){
        console.log('e is fifth efter bceg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    //bcfg
    if (e<b && e<c && e>d && e>a && e<f && e<g ){
        console.log('e is fifth efter bcfg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    //bdef bdeg
    if (e<b && e>c && e<d && e<a && e<f && e>g ){
        console.log('e is fifth efter bdef')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    if (e<b && e>c && e<d && e<a && e>f && e<g ){
        console.log('e is fifth efter bdeg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    // bdfg
    if (e<b && e>c && e<d && e>a && e<f && e<g ){
        console.log('e is fifth efter bdfg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    //befg
    if (e<b && e>c && e>d && e<a && e<f && e<g ){
        console.log('e is fifth efter befg')
        document.getElementById("ScoreOfjayan").style.top="250px";
    }
    
    
    
    
    // sixth scr of e ------------------------------666666666---------
    
    
    
    if (e>b && e<c && e<d && e<a && e<f && e<g ){
        console.log('e is sixth before b')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    if (e<b && e>c && e<d && e<a && e<f && e<g ){
        console.log('e is sixth before c')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    if (e<b && e<c && e>d && e<a && e<f && e<g ){
        console.log('e is sixth before d')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    if (e<b && e<c && e<d && e>a && e<f && e<g ){
        console.log('e is sixth before e')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    if (e<b && e<c && e<d && e<a && e>f && e<g ){
        console.log('e is sixth before f')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    if (e<b && e<c && e<d && e<a && e<f && e>g ){
        console.log('e is sixth before f')
        document.getElementById("ScoreOfjayan").style.top="310px";
    }
    
    
    
    // lest scr of e ------------------------------777777777------------
    if (e<b && e<c && e<d && e<a && e<f && e<g ){
        console.log('e is smellest')
        document.getElementById("ScoreOfjayan").style.top="370px";
    }
    
    
    
    
    
    








//fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// first scr of f ------------------------------111111111111------------
if (f>b && f>c && f>d && f>e && f>a && f>g ){
        console.log('f is lfrhgest')
        document.getElementById("ScoreOfalvee").style.top="10px";
    }
    
    
    // second scr of f --------------------------------2222222222---------
    if (f<b && f>c && f>d && f>e && f>a && f>g ){
        console.log('f is second ffter b')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    if (f>b && f<c && f>d && f>e && f>a && f>g ){
        console.log('f is second ffter c')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    if (f>b && f>c && f<d && f>e && f>a && f>g ){
        console.log('f is second ffter d')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    if (f>b && f>c && f>d && f<e && f>a && f>g ){
        console.log('f is second ffter e')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    if (f>b && f>c && f>d && f>e && f<a && f>g ){
        console.log('f is second ffter f')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    if (f>b && f>c && f>d && f>e && f>a && f<g ){
        console.log('f is second ffter f')
        document.getElementById("ScoreOfalvee").style.top="70px";
    }
    
    
    
    // third scr of f ---------------------------------3333333333---------
    
    
    if (f<b && f<c && f>d && f>e && f>a && f>g ){
        console.log('f is third ffter bc')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f<c && f<d && f>e && f>a && f>g ){
        console.log('f is third ffter cd')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f>c && f<d && f<e && f>a && f>g ){
        console.log('f is third ffter de')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f>c && f>d && f<e && f<a && f>g ){
        console.log('f is third ffter ef')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f>c && f>d && f>e && f<a && f<g ){
        console.log('f is third ffter fg')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f<b && f>c && f>d && f>e && f>a && f<g ){
        console.log('f is third ffter gb')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    //bd be bf
    if (f<b && f>c && f<d && f>e && f>a && f>g ){
        console.log('f is third ffter bd')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f<b && f>c && f>d && f<e && f>a && f>g ){
        console.log('f is third ffter be')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f<b && f>c && f>d && f>e && f<a && f>g ){
        console.log('f is third ffter bf')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    //ce cf cg 
    if (f>b && f<c && f>d && f<e && f>a && f>g ){
        console.log('f is third ffter ce')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f<c && f>d && f>e && f<a && f>g ){
        console.log('f is third ffter cf')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f<c && f>d && f>e && f>a && f<g ){
        console.log('f is third ffter cg')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    // df dg
    if (f>b && f>c && f<d && f>e && f<a && f>g ){
        console.log('f is third ffter df')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    if (f>b && f>c && f<d && f>e && f>a && f<g ){
        console.log('f is third ffter dg')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    // eg
    if (f>b && f>c && f>d && f<e && f>a && f<g ){
        console.log('f is third ffter eg')
        document.getElementById("ScoreOfalvee").style.top="130px";
    }
    
    
    
    // forth scr of f------------------------------444444444444--------------------------
    
    
    //bcd bce bcf bcg
    if (f<b && f<c && f<d && f>e && f>a && f>g ){
        console.log('f is forth ffter bcd')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f<c && f>d && f<e && f>a && f>g ){
        console.log('f is forth ffter bce')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f<c && f>d && f>e && f<a && f>g ){
        console.log('f is forth ffter bcf')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f<c && f>d && f>e && f>a && f<g ){
        console.log('f is forth ffter bcg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //bde bdf bdg
    if (f<b && f>c && f<d && f<e && f>a && f>g ){
        console.log('f is forth ffter bde')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f>c && f<d && f>e && f<a && f>g ){
        console.log('f is forth ffter bdf')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f>c && f<d && f>e && f>a && f<g ){
        console.log('f is forth ffter bdg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //bef beg
    if (f<b && f>c && f>d && f<e && f<a && f>g ){
        console.log('f is forth ffter bef')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f<b && f>c && f>d && f<e && f>a && f<g ){
        console.log('f is forth ffter beg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //bfg
    if (f<b && f>c && f>d && f>e && f<a && f<g ){
        console.log('f is forth ffter bfg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //cde cdf cdg
    if (f>b && f<c && f<d && f<e && f>a && f>g ){
        console.log('f is forth ffter cde')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f>b && f<c && f<d && f>e && f<a && f>g ){
        console.log('f is forth ffter cdf')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f>b && f<c && f<d && f>e && f>a && f<g ){
        console.log('f is forth ffter cdg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    // cef ceg
    if (f>b && f<c && f>d && f<e && f<a && f>g ){
        console.log('f is forth ffter cef')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f>b && f<c && f>d && f<e && f>a && f<g ){
        console.log('f is forth ffter ceg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //cfg
    if (f>b && f<c && f>d && f>e && f<a && f<g ){
        console.log('f is forth ffter cfg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //def deg
    if (f>b && f>c && f<d && f<e && f<a && f>g ){
        console.log('f is forth ffter def')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    if (f>b && f>c && f<d && f<e && f>a && f<g ){
        console.log('f is forth ffter deg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //dfg
    if (f>b && f>c && f<d && f>e && f<a && f<g ){
        console.log('f is forth ffter dfg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    //efg
    if (f>b && f>c && f>d && f<e && f<a && f<g ){
        console.log('f is forth ffter efg')
        document.getElementById("ScoreOfalvee").style.top="190px";
    }
    
    
    
    
    // fifth scr of f------------------------------55555555555--------------------------
    
    
    //bcde bcdf bcdg
    if (f<b && f<c && f<d && f<e && f>a && f>g ){
        console.log('f is fifth ffter bcde')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    if (f<b && f<c && f<d && f>e && f<a && f>g ){
        console.log('f is fifth ffter bcdf')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    if (f<b && f<c && f<d && f>e && f>a && f<g ){
        console.log('f is fifth ffter bcdg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    // bcef bceg
    if (f<b && f<c && f>d && f<e && f<a && f>g ){
        console.log('f is fifth ffter bcef')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    if (f<b && f<c && f>d && f<e && f>a && f<g ){
        console.log('f is fifth ffter bceg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    //bcfg
    if (f<b && f<c && f>d && f>e && f<a && f<g ){
        console.log('f is fifth ffter bcfg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    //bdef bdeg
    if (f<b && f>c && f<d && f<e && f<a && f>g ){
        console.log('f is fifth ffter bdef')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    if (f<b && f>c && f<d && f<e && f>a && f<g ){
        console.log('f is fifth ffter bdeg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    // bdfg
    if (f<b && f>c && f<d && f>e && f<a && f<g ){
        console.log('f is fifth ffter bdfg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    //befg
    if (f<b && f>c && f>d && f<e && f<a && f<g ){
        console.log('f is fifth ffter befg')
        document.getElementById("ScoreOfalvee").style.top="250px";
    }
    
    
    
    
    // sixth scr of f ------------------------------666666666---------
    
    
    
    if (f>b && f<c && f<d && f<e && f<a && f<g ){
        console.log('f is sixth before b')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    if (f<b && f>c && f<d && f<e && f<a && f<g ){
        console.log('f is sixth before c')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    if (f<b && f<c && f>d && f<e && f<a && f<g ){
        console.log('f is sixth before d')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    if (f<b && f<c && f<d && f>e && f<a && f<g ){
        console.log('f is sixth before e')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    if (f<b && f<c && f<d && f<e && f>a && f<g ){
        console.log('f is sixth before f')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    if (f<b && f<c && f<d && f<e && f<a && f>g ){
        console.log('f is sixth before f')
        document.getElementById("ScoreOfalvee").style.top="310px";
    }
    
    
    
    // lfst scr of f ------------------------------777777777------------
    if (f<b && f<c && f<d && f<e && f<a && f<g ){
        console.log('f is smfllest')
        document.getElementById("ScoreOfalvee").style.top="370px";
    }
    
    
    
    
    
    









//gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

// first scr of g ------------------------------111111111111------------
if (g>b && g>c && g>d && g>e && g>f && g>a ){
        console.log('g is lgrhgest')
        document.getElementById("ScoreOfarefin").style.top="10px";
    }
    
    
    // second scr of g --------------------------------2222222222---------
    if (g<b && g>c && g>d && g>e && g>f && g>a ){
        console.log('g is second gfter b')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    if (g>b && g<c && g>d && g>e && g>f && g>a ){
        console.log('g is second gfter c')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    if (g>b && g>c && g<d && g>e && g>f && g>a ){
        console.log('g is second gfter d')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    if (g>b && g>c && g>d && g<e && g>f && g>a ){
        console.log('g is second gfter e')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    if (g>b && g>c && g>d && g>e && g<f && g>a ){
        console.log('g is second gfter f')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    if (g>b && g>c && g>d && g>e && g>f && g<a ){
        console.log('g is second gfter f')
        document.getElementById("ScoreOfarefin").style.top="70px";
    }
    
    
    
    // third scr of g ---------------------------------3333333333---------
    
    
    if (g<b && g<c && g>d && g>e && g>f && g>a ){
        console.log('g is third gfter bc')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g<c && g<d && g>e && g>f && g>a ){
        console.log('g is third gfter cd')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g>c && g<d && g<e && g>f && g>a ){
        console.log('g is third gfter de')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g>c && g>d && g<e && g<f && g>a ){
        console.log('g is third gfter ef')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g>c && g>d && g>e && g<f && g<a ){
        console.log('g is third gfter fg')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g<b && g>c && g>d && g>e && g>f && g<a ){
        console.log('g is third gfter gb')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    //bd be bf
    if (g<b && g>c && g<d && g>e && g>f && g>a ){
        console.log('g is third gfter bd')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g<b && g>c && g>d && g<e && g>f && g>a ){
        console.log('g is third gfter be')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g<b && g>c && g>d && g>e && g<f && g>a ){
        console.log('g is third gfter bf')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    //ce cf cg 
    if (g>b && g<c && g>d && g<e && g>f && g>a ){
        console.log('g is third gfter ce')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g<c && g>d && g>e && g<f && g>a ){
        console.log('g is third gfter cf')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g<c && g>d && g>e && g>f && g<a ){
        console.log('g is third gfter cg')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    // df dg
    if (g>b && g>c && g<d && g>e && g<f && g>a ){
        console.log('g is third gfter df')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    if (g>b && g>c && g<d && g>e && g>f && g<a ){
        console.log('g is third gfter dg')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    // eg
    if (g>b && g>c && g>d && g<e && g>f && g<a ){
        console.log('g is third gfter eg')
        document.getElementById("ScoreOfarefin").style.top="130px";
    }
    
    
    
    // forth scr of g------------------------------444444444444--------------------------
    
    
    //bcd bce bcf bcg
    if (g<b && g<c && g<d && g>e && g>f && g>a ){
        console.log('g is forth gfter bcd')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g<c && g>d && g<e && g>f && g>a ){
        console.log('g is forth gfter bce')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g<c && g>d && g>e && g<f && g>a ){
        console.log('g is forth gfter bcf')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g<c && g>d && g>e && g>f && g<a ){
        console.log('g is forth gfter bcg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //bde bdf bdg
    if (g<b && g>c && g<d && g<e && g>f && g>a ){
        console.log('g is forth gfter bde')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g>c && g<d && g>e && g<f && g>a ){
        console.log('g is forth gfter bdf')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g>c && g<d && g>e && g>f && g<a ){
        console.log('g is forth gfter bdg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //bef beg
    if (g<b && g>c && g>d && g<e && g<f && g>a ){
        console.log('g is forth gfter bef')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g<b && g>c && g>d && g<e && g>f && g<a ){
        console.log('g is forth gfter beg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //bfg
    if (g<b && g>c && g>d && g>e && g<f && g<a ){
        console.log('g is forth gfter bfg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //cde cdf cdg
    if (g>b && g<c && g<d && g<e && g>f && g>a ){
        console.log('g is forth gfter cde')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g>b && g<c && g<d && g>e && g<f && g>a ){
        console.log('g is forth gfter cdf')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g>b && g<c && g<d && g>e && g>f && g<a ){
        console.log('g is forth gfter cdg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    // cef ceg
    if (g>b && g<c && g>d && g<e && g<f && g>a ){
        console.log('g is forth gfter cef')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g>b && g<c && g>d && g<e && g>f && g<a ){
        console.log('g is forth gfter ceg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //cfg
    if (g>b && g<c && g>d && g>e && g<f && g<a ){
        console.log('g is forth gfter cfg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //def deg
    if (g>b && g>c && g<d && g<e && g<f && g>a ){
        console.log('g is forth gfter def')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    if (g>b && g>c && g<d && g<e && g>f && g<a ){
        console.log('g is forth gfter deg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //dfg
    if (g>b && g>c && g<d && g>e && g<f && g<a ){
        console.log('g is forth gfter dfg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    //efg
    if (g>b && g>c && g>d && g<e && g<f && g<a ){
        console.log('g is forth gfter efg')
        document.getElementById("ScoreOfarefin").style.top="190px";
    }
    
    
    
    
    // fifth scr of g------------------------------55555555555--------------------------
    
    
    //bcde bcdf bcdg
    if (g<b && g<c && g<d && g<e && g>f && g>a ){
        console.log('g is fifth gfter bcde')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    if (g<b && g<c && g<d && g>e && g<f && g>g ){
        console.log('g is fifth gfter bcdf')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    if (g<b && g<c && g<d && g>e && g>f && g<a ){
        console.log('g is fifth gfter bcdg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    // bcef bceg
    if (g<b && g<c && g>d && g<e && g<f && g>g ){
        console.log('g is fifth gfter bcef')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    if (g<b && g<c && g>d && g<e && g>f && g<a ){
        console.log('g is fifth gfter bceg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    //bcfg
    if (g<b && g<c && g>d && g>e && g<f && g<a ){
        console.log('g is fifth gfter bcfg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    //bdef bdeg
    if (g<b && g>c && g<d && g<e && g<f && g>a ){
        console.log('g is fifth gfter bdef')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    if (g<b && g>c && g<d && g<e && g>f && g<a ){
        console.log('g is fifth gfter bdeg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    // bdfg
    if (g<b && g>c && g<d && g>e && g<f && g<a ){
        console.log('g is fifth gfter bdfg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    //befg
    if (g<b && g>c && g>d && g<e && g<f && g<a ){
        console.log('g is fifth gfter befg')
        document.getElementById("ScoreOfarefin").style.top="250px";
    }
    
    
    
    
    // sixth scr of g ------------------------------666666666---------
    
    
    
    if (g>b && g<c && g<d && g<e && g<f && g<a ){
        console.log('g is sixth before b')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    if (g<b && g>c && g<d && g<e && g<f && g<a ){
        console.log('g is sixth before c')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    if (g<b && g<c && g>d && g<e && g<f && g<a ){
        console.log('g is sixth before d')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    if (g<b && g<c && g<d && g>e && g<f && g<a ){
        console.log('g is sixth before e')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    if (g<b && g<c && g<d && g<e && g>f && g<a ){
        console.log('g is sixth before f')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    if (g<b && g<c && g<d && g<e && g<f && g>a ){
        console.log('g is sixth before f')
        document.getElementById("ScoreOfarefin").style.top="310px";
    }
    
    
    
    // lgst scr of g ------------------------------777777777------------
    if (g<b && g<c && g<d && g<e && g<f && g<a ){
        console.log('g is smgllest')
        document.getElementById("ScoreOfarefin").style.top="370px";
    }
    
    
    
    
    
    



}


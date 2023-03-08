var t=Math.floor((Math.random()*100)+1);
document.getElementById("dd").innerHTML="Sonuç";
var count=0;

function Kontrol(){
    var i=document.getElementById("in1").value;
    if(i<t){
        count++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin sayınızı büyütün";
    }else if(i>t){
        count++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin sayınızı küçültün";
    }else if(i==t){
        count++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tebrikler";
    }
}
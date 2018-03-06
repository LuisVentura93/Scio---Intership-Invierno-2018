var flag = false;
var p1active =true;
var p2active=false;
var cantClicks_1P = 0, cantClicks_2P = 0, time = 15, key1 = 97, key2 = 108;
var name1, name2;

name1 = prompt("Ingrese nombre del jugador 1");
name2 = prompt("Ingrese nombre del jugador 2");
document.getElementById("p1").innerHTML=name1;
document.getElementById("p2").innerHTML=name2;

function key(event){
    if(!flag)
    {
        flag=true;
        startClock();
    }
    if (time>0)
    {
        if(event.keyCode == 65)
        {
            cantClicks_1P++;
            document.getElementById("cont1").innerHTML = cantClicks_1P;
        }
        if(event.keyCode == 76){
            cantClicks_2P++;
            document.getElementById("cont2").innerHTML = cantClicks_2P;
        }
    }
}

function clicks(){
    if(!flag)
    {
        flag=true;
        startClock();
    }
    if(time>0 && p1active)
    {
        cantClicks_1P++;
        document.getElementById("contador").innerHTML = "Clicks: " + cantClicks_1P;
    }
    else if(time>0)
    {
        cantClicks_2P++;
        document.getElementById("contador").innerHTML = "Clicks: " + cantClicks_2P;
    }
}

function startClock(){
document.getElementById("audio").play();
var timeSet = setInterval(function(){
    if(time > 0) 
    {
    time--;
    document.getElementById("reloj").innerHTML = "00:"+time;
    } 
    else 
    {
    clearInterval(timeSet);
    document.getElementById("finalp1").innerHTML ="La puntuación de "+name1+" es: "+ cantClicks_1P;
    document.getElementById("finalp2").innerHTML ="La puntuación de "+name2+  " es: "+ cantClicks_2P;
    alert( cantClicks_1P === cantClicks_2P? "Empate":( (cantClicks_1P>cantClicks_2P? name1:name2)+" gana"));
    document.getElementById("audio").pause();
    }
    }, 1000);
}
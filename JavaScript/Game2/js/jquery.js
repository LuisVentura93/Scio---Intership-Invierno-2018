var flag = false;
var p1active =true;
var p2active=false;
var cantClicks_1P = 0, cantClicks_2P = 0, time = 15, key1 = 97, key2 = 108;
var name1, name2;

$(document).ready(function(){
    name1=prompt("Ingrese el nombre del jugador 1: ");
});

$(document).ready(function(){
    name2=prompt("Ingrese el nombre del jugador 2: ");
});

function key(event){
if(!flag)
{
    flag=true;
    startClock();
}

if (time>0)
{
    if(event.keyCode == 65)
        $(document).ready(function(){
            cantClicks_1P++;
            $("#cont1").html(cantClicks_1P);
        });

    if(event.keyCode == 76)
        $(document).ready(function(){
            cantClicks_2P++;
            $("#cont2").html(cantClicks_2P);
        });
}
}

function startClock(){

    /*$(document).ready(function(){
        $("#audio").play();
    });*/

document.getElementById("audio").play();
var timeSet = setInterval(function(){
    if(time > 0) 
    {
        $(document).ready(function(){
            time--;
            $("#reloj").html("00:"+time);
        }); 
    }
    else 
    {
    clearInterval(timeSet);
        
        $(document).ready(function(){
            $("#finalp1").html("La puntuación de "+name1+" es: "+ cantClicks_1P);
        });

        $(document).ready(function(){
            $("#finalp2").html("La puntuación de "+name2+" es: "+ cantClicks_2P);
         });

        $(document).ready(function(){
            alert(cantClicks_1P === cantClicks_2P? "Empate":( (cantClicks_1P>cantClicks_2P? name1:name2)+" gana"));
        });
        
        document.getElementById("audio").pause();
    }
    }, 1000);
}
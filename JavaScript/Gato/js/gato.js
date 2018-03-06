var turno=1;
var turn;
var arreglo=new Array(9);
var cells=document.getElementsByClassName("gato");

function checker(letra){
	if (
		(arreglo[0]==letra && arreglo[1]==letra && arreglo[2]==letra) ||
		(arreglo[3]==letra && arreglo[4]==letra && arreglo[5]==letra) ||
		(arreglo[6]==letra && arreglo[7]==letra && arreglo[8]==letra) ||
		(arreglo[0]==letra && arreglo[3]==letra && arreglo[6]==letra) ||
		(arreglo[1]==letra && arreglo[4]==letra && arreglo[7]==letra) ||
		(arreglo[2]==letra && arreglo[5]==letra && arreglo[8]==letra) ||
		(arreglo[0]==letra && arreglo[4]==letra && arreglo[8]==letra) ||
		(arreglo[0]==letra && arreglo[4]==letra && arreglo[6]==letra) 
		)
	{
		alert("Jugador "+letra+" gana!");
		window.location.reload();
	}
}

function gato(evento){
	var cell=evento.target;
	var idCell=evento.target.id;
	var cellToMark=idCell[1]-1;
	alert(cellToMark);
	turn=turno%2;
	if (turn!=0)
	{
		cell.innerHTML="X";
		cell.style.background="#EC673A";	
		arreglo[cellToMark]="X";
		checker("X");
	}
	else
	{
		cell.innerHTML="O";
		cell.style.background="#1C5F81";
		arreglo[cellToMark]="O";
		checker("O");
	}
	console.log(turno, turn, arreglo);
	if (turno==9)
	{
		alert("¡Empate!");
		window.location.reload();	//La página se recarga por sí misma
	}
	turno++;
}

function cargarDoc(){
	for (var i=0; i<cells.length; i++)
	{
		cells[i].addEventListener("click", gato);
	}
}

window.addEventListener("load", cargarDoc);
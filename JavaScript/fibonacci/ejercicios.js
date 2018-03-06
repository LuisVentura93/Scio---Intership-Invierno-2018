

function fibbonacci(){
	var input=document.getElementById("n");
	var num=parseInt(input.value);
	var ini=0, fibo1=0, fibo2=1, fibbo="", cad="";
	fibbo=fib(num, ini, fibo1, fibo2, fibbo, cad);
	console.log(fibbo);
}

function fib(num, ini, fibo1, fibo2, fibbo, cad){
	if (ini==0)
            cad+=fibo1+", "+fibo2+", ";
        if (ini>0)
            cad+=fibo1+", ";
        if (ini>0 && (ini+1)<num)
            cad+=fibo2+", ";
        fibo1+=fibo2;
        fibo2+=fibo1;
        ini+=2;
        if (ini<num)
            return fib(num, ini, fibo1, fibo2, fibbo, cad);
        else
            return cad;
}
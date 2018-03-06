exports.Sum = function(a,b){
    return a + b;
}

exports.Res = function(a,b){
    return a - b;
}

exports.Mul = function(a,b){
    return a * b;
}

exports.Div = function(a,b){
    var cadena="Imagina que tienes 0 galletas y las repartes entre 0 amigos...lo ves? "+
    "No tiene sentido entonces el monstruo comegalletas esta triste porque no tiene galletas y tu estas triste porque no tienes amigos :(";
    if (a == 0 && b == 0)
        return cadena;
    if (a == 0 || b == 0)
        return 0;
    else
        return a / b;
}

exports.Sqrt1 = function(a)
{
    return Math.sqrt(a);
}

exports.Sqrt2 = function(b)
{
    return Math.sqrt(b);
}

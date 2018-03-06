console.log("JavaScript externo");
var users = [{"name": "Pablo", "age": 25, "gender": "M" },
{"name": "Ventura", "age": 24, "gender": "M" },
{"name": "Alma", "age": 22, "gender": "F" }];
function Usuarios() {
  for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
}
function crear(nuevo){
  users.push(nuevo);
}

var nuevousuario = {"name":"Juan","age":23,"gender":"M"};

crear(nuevousuario);

function findbyname(name){
  var res;
  for (var i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase()==name.toLowerCase()) {
      res=users[i];
    }
  }
  if (res) {
    return res;
  }
  else {
    console.warn("No se encontró usuario");
    return false;
  }
}

function fechabyName(name){
  var user=findbyname(name);
  var today=new Date();
  if(!user)
    return;
  var year=today.getFullYear();
  var fecha=year-user.age;
  console.log(user.name+", nació en el año "+fecha);
}

function getByGender(sexo){
  var res = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].gender.toUpperCase()==sexo.toUpperCase()) {
      res.push(users[i]);
    }
  }
  if(res.length==0){
    console.log("No existe nadie del sexo "+sexo);
    return
  }
  console.log(res);
}

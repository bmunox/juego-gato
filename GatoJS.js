var turn = 1;
var option = "X";
var jugador1 = "";
var jugador2 = "";

function actions(boton){
  jugador1 = document.getElementById("jugador1").value;
  jugador2 = document.getElementById("jugador2").value;
  if (jugador1 == "" || jugador2 == "") {
    alert("Falta nombre de jugadores!!");
    location.reload()
  }
  if (boton.className != "clicked") {
    boton.innerHTML = option;
    boton.value = option;
    boton.className = "clicked";
    validate(option);
    if (turn == 1 ) {
      turn = 0;
      option ="O"
    }else{
      turn = 1;
      option ="X"
    }
  }
}

function validate(option){
  var element;
  var btns = "";
  var winner = "";
  var tie = 0;
  var btn = new Array();

  for (let index = 1; index < 10; index++) {
    btns = "";
    btns = btns.concat("b",index);
    element = document.getElementById(btns);
    if (element.value != "") {
      btn[index] = element.value; 
    }else{btn[index] = index}
    if (element.className == "clicked") {
      tie++;
    }
  }
  //Validaciones de posibles jugadas
  if (/*filas*/btn[1]==btn[2] && btn[2]==btn[3] || btn[4]==btn[5] && btn[5]==btn[6] || btn[7]==btn[8] && btn[8]==btn[9] || /*columnas*/ btn[1]==btn[4] && btn[4]== btn[7] || btn[2]==btn[5] && btn[5]==btn[8] || btn[3]==btn[6] && btn[6]==btn[9] || /*cruzados*/ btn[1]==btn[5] && btn[5]==btn[9] || btn[3]==btn[5] && btn[5]==btn[7]) {
        if (option == "X") {
          alert("Ganador: " +jugador1+", Felicidades!!!");
        }else{alert("Ganador: " +jugador2+", Felicidades!!!");}
        location.reload();
    }
  if (tie==9) {
    alert("Empate!!!");
    location.reload();
  }
}

function validate_v1(option){
  //TODO - BMV esto podria ser almacenado en un BD o un archivo para no tocar codigo
  // Si se desea un gato de mas dimensiones solo se debe buscar los resultados ganadores y agregarlo al arreglo
  var results = ["111000000", "000111000", "000000111","100100100","010010010","001001001","100010001","001010100","111100001","111000010","111100000","100100101","101010011","001011001","100101100","101100100","100110100","100101110","101100110","100000111","001000111","100110011","001100111","001001101","001001101","101001001","101011001","011101001","110110000","010010011"];
  //Faltan muchas posibilidades, funciona pero muy largo
  var element;
  var btn = "";
  var winner = "";

  for (let index = 1; index < 10; index++) {
    btn = "";
    btn = btn.concat("b",index);
    element = document.getElementById(btn);
    if (element.value == option) {
      winner = winner.concat("", 1);
    }else{winner = winner.concat("", 0);}
  }
  //console.log(winner);
  const found = results.find(element => element == winner);
  if (!!found) {
    if (option == "X") {
      alert("Ganador: " +jugador1+", Felicidades!!!");
    }else{alert("Ganador: " +jugador2+", Felicidades!!!");}
    location.reload()
  }
  //console.log(found);
  }

function  clean(){location.reload()}
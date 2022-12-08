let player = []; // arr para el id del jugador
let plays = []; // arr para las respuestas
let name = namePlayer.value; // toma el valor de namePlayer

//Selecciona ROOT
let takeRoot = document.getElementById("root");

// función cuerpo

function welcome(name){
  if (
    //si no pones nombre no puedes jugar
    name == "" ||
    name == " " ||
    name == "  " ||
    name == "   " ||
    name == "    "
  ) {
    let sayHi = document.createElement("p");
    let boxForQuestions = document.createElement("form");
    sayHi.textContent = "No te dejaré jugar sí no escribiste un nombre.";
  }
}
function playNow() {
  
  if (
    //si no pones nombre no puedes jugar
    name == "" ||
    name == " " ||
    name == "  " ||
    name == "   " ||
    name == "    "
  ) {
   

    boxForQuestions.append(sayHi);
    takeRoot.appendChild(boxForQuestions);
  } else {
    player.push(name);
    // jugada uno
    let arrs = [];
    let q = questionArr[0];
    let a = correctArr[0];
    let i1 = incorrectArr1[0];
    let i2 = incorrectArr2[0];
    let i3 = incorrectArr3[0];
    arrs.push(q, a, i1, i2, i3);
    createQuestionnaire(arrs);

    let takeRoot = document.getElementById("root");
    takeRoot.querySelectorAll(".button").forEach((item) => {
      item.addEventListener("click", (e) => {
        item.style.background = "green";
        let id = e.target.getAttribute("id");
        plays.push(id);
        let arrs = [];
    let q = questionArr[1];
    let a = correctArr[1];
    let i1 = incorrectArr1[1];
    let i2 = incorrectArr2[1];
    let i3 = incorrectArr3[1];
    arrs.push(q, a, i1, i2, i3);
        
        console.log(plays, player, arrs);
        return createQuestionnaire(arrs);
      });
    });

  }

  // let senD = document.getElementById('sendButton');
  // senD.addEventListener('click', () => {
  //   saveID();
  //   takeRoot.innerHTML = '<h2>siguiente pregunta</h2>';
  // });

  // console.log(plays.id);
}

//función para crear el cuestionario, sin estilo todavía
function createQuestionnaire(arr) {
  let takeRoot = document.getElementById("root");
  let name = namePlayer.value;
  let sayHi = document.createElement("p");
  //let takeRoot = document.getElementById("root");
  let boxForQuestions = document.createElement("form");
  let question = document.createElement("h2");
  let answer = document.createElement("button");
  let answer1 = document.createElement("button");
  let answer2 = document.createElement("button");
  let answer3 = document.createElement("button");
  let send = document.createElement("button");

  answer.className = "button";
  answer.setAttribute("id", "answer");
  answer1.className = "button";
  answer1.setAttribute("id", "answer1");
  answer2.className = "button";
  answer2.setAttribute("id", "answer2");
  answer3.className = "button";
  answer3.setAttribute("id", "answer3");
  send.setAttribute("id", "sendButton");

  takeRoot.innerHTML = "";
  sayHi.textContent =
    "Hola " +
    name +
    " puedes comenzar a jugar. Selecciona la respuesta que consideres correcta.";
  question.textContent = arr[0];
  answer.textContent = arr[1];
  answer1.textContent = arr[2];
  answer2.textContent = arr[3];
  answer3.textContent = arr[4];
  send.textContent = "Enviar respuesta";

  boxForQuestions.append(
    sayHi,
    question,
    answer,
    answer1,
    answer2,
    answer3,
    send
  );
  takeRoot.appendChild(boxForQuestions);
}
//función que escuchá sí se clickeo algún elemento y guarda su id.
// function saveID() {
//   let takeRoot = document.getElementById("root");
//   takeRoot.querySelectorAll(".button").forEach((item) => {
//     item.addEventListener("click", (e) => {
//       item.style.background = 'green';
//       let id = e.target.getAttribute("id");
//       plays.push(id);
//       return id;
//     });
//   });
// }
// //funcion para tomar un objeto diferente y guardarlo

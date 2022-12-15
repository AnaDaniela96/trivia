const questionnaire = [
  {
    categoria: "Cine chickflick",
    pregunta: "¿Quién produjo el Diario de la princesa?",
    respuesta: "Excelente.",
    incorrecta1: "Muy mala amiga",
    incorrecta2: "Era demasiado alta",
    incorrecta3: "YOLO, no más xq sí",
    img: "./assets/diarioprincesa.jpg",
  },
  {
    categoria: "Cine chickflick",
    pregunta: "¿Cómo ves a Dua Lipa",
    respuesta: "Excelenfffte.",
    incorrecta1: "Muy malddda amiga",
    incorrecta2: "Era demasiado alta",
    incorrecta3: "YOLO, no más xq sí",
  },
  {
    categoria: "Cine chickflick",
    pregunta: "¿Cómo ves a Dua Lipa",
    respuesta: "Excelente.",
    incorrecta1: "Muy mala amiga",
    incorrecta2: "Era demasiado alta",
    incorrecta3: "YOLO, no más xq sí",
  },
  {
    categoria: "Cine chickflick",
    pregunta: "¿Cómo ves a Dua Lipa",
    respuesta: "Excelente.",
    incorrecta1: "Muy mala amiga",
    incorrecta2: "Era demasiado alta",
    incorrecta3: "YOLO, no más xq sí",
  },
];

let questionArr = questionnaire.map((e) => {
  return `${e.pregunta}`;
});
let correctArr = questionnaire.map((e) => {
  return `${e.respuesta}`;
});
let incorrectArr1 = questionnaire.map((e) => {
  return `${e.incorrecta1}`;
});
let incorrectArr2 = questionnaire.map((e) => {
  return `${e.incorrecta2}`;
});
let incorrectArr3 = questionnaire.map((e) => {
  return `${e.incorrecta3}`;
});
let imgs = questionnaire.map((e) => {
  return `${e.img}`;
});

let players = [];
let jugada = [1, 2, 3, 4, 5];

function sayHi() {
  // para saludar
  let takeRoot = document.getElementById("root");
  let putName = document.getElementById("namePlayer").value;
  let sayHi;
  let boxForQuestions;
  if (
    putName == "" ||
    putName == " " ||
    putName == "  " ||
    putName == "   " ||
    putName == "    "
  ) {
    let sayHi = document.createElement("p");
    let takeRoot = document.getElementById("root");
    let boxForQuestions = document.createElement("form");
    sayHi.textContent = "No te dejaré jugar sí no escribiste un nombre.";
    boxForQuestions.className = 'cont'

    .append(sayHi);
    takeRoot.appendChild(boxForQuestions);
  } else {
    takeRoot.innerHTML ='';
    sayHi.textContent = "<h1>Empieza a triviar</h1> " +
      "<br> " +
      putName +
      " Elige una respuesta para cada pregunta y presiona el botón de enviar respuesta al terminar.</p>";
      boxForQuestions.append(sayHi);
      takeRoot.appendChild(boxForQuestions)
  
      let juego = 1;
    // jugada uno
    let arrs = [];
    let q = questionArr[0];
    let a = correctArr[0];
    let i1 = incorrectArr1[0];
    let i2 = incorrectArr2[0];
    let i3 = incorrectArr3[0];
    let imgss = imgs[0];

    arrs.push(q, a, i1, i2, i3, imgss);

    createForm(arrs);
    botonfinal();
    sendReponse();
    console.log("primera tanda de juegos." + juego);
  }
}
function createForm(arr) {
  //crea el cuestionario.
  let takeRoot = document.getElementById("root");
  let boxForQuestions = document.createElement("form");
  let question = document.createElement("h2");
  let answer = document.createElement("div");
  let answer1 = document.createElement("div");
  let answer2 = document.createElement("div");
  let answer3 = document.createElement("div");
  let send = document.createElement("div");
  let img = document.createElement("img");

  answer.className = "btn";
  answer.setAttribute("id", "answer");
  answer1.className = "btn";
  answer1.setAttribute("id", "answer1");
  answer2.className = "btn";
  answer2.setAttribute("id", "answer2");
  answer3.className = "btn";
  answer3.setAttribute("id", "answer3");
  img.setAttribute("id", "image");
  send.className = "btn";

  question.textContent = arr[0];
  answer.textContent = arr[1];
  answer1.textContent = arr[2];
  answer2.textContent = arr[3];
  answer3.textContent = arr[4];
  img.src = arr[5];

  send.textContent = "Enviar respuesta";

  boxForQuestions.append(question, img, answer, answer1, answer2, answer3);
  return takeRoot.appendChild(boxForQuestions);
}

function sendReponse() {
  //detecta si se apretó un .btn y guarda su id
  let takeRoot = document.getElementById("root");
  takeRoot.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", (e) => {
      let id = e.target.getAttribute("id");
      players.push(id);
    });
  });
}

function cincoJugadas() {
  //ciclo for sin cosas por hacer
  for (let i = 0; i < 5; i++) {}
}

function botonfinal() {
  //Crea un botón para envíar resultados. No tiene funcionalidad
  let takeRoot = document.getElementById("root");
  let box = document.createElement("div");
  let btnFinish = document.createElement("button");
  btnFinish.textContent = "Guardar Respuesta";
  btnFinish.setAttribute("id", "btnSend");
  btnFinish.className = 'btn';

  box.append(btnFinish);
  takeRoot.appendChild(box);
  return btnFinish;
}

function clean() {
  //limpia el DOM
  let takeRoot = document.getElementById("root");
  takeRoot.innerHTML = "";
}

function jugar() {
  sayHi();

  let agarra = document.getElementById("btnSend");
  agarra.addEventListener("click", () => {
    console.log("aquí ya seguiría la respuesta dos");
    // jugada dos
    let arrs = [];
    let q = questionArr[1];
    let a = correctArr[1];
    let i1 = incorrectArr1[1];
    let i2 = incorrectArr2[1];
    let i3 = incorrectArr3[1];
    arrs.push(q, a, i1, i2, i3);
    clean();
    createForm(arrs);
    botonfinal();
    sendReponse();
    juego = 2;
    if (juego == 2) {
      // jugada tres
      let arrs = [];
      let q = questionArr[2];
      let a = correctArr[2];
      let i1 = incorrectArr1[2];
      let i2 = incorrectArr2[2];
      let i3 = incorrectArr3[2];
      arrs.push(q, a, i1, i2, i3);
      let agarra2 = document.getElementById("btnSend");
      agarra2.addEventListener("click", () => {
        clean();
        createForm(arrs);
        botonfinal();
        sendReponse();
        console.log("aquí ya seguiría la respuesta tres");
        juego = 3;
        if (juego == 3) {
          // jugada 4 :O
          let arrs = [];
          let q = questionArr[3];
          let a = correctArr[3];
          let i1 = incorrectArr1[3];
          let i2 = incorrectArr2[3];
          let i3 = incorrectArr3[3];
          arrs.push(q, a, i1, i2, i3);
          let agarra2 = document.getElementById("btnSend");
          agarra2.addEventListener("click", () => {
            clean();
            createForm(arrs);
            botonfinal();
            sendReponse();
            console.log("aquí ya seguiría la respuesta 4");
            juego = 4;
            if (juego == 4) {
              // jugada 5 :O
              let arrs = [];
              let q = questionArr[4];
              let a = correctArr[4];
              let i1 = incorrectArr1[4];
              let i2 = incorrectArr2[4];
              let i3 = incorrectArr3[4];
              arrs.push(q, a, i1, i2, i3);
              let agarra2 = document.getElementById("btnSend");
              agarra2.addEventListener("click", () => {
                clean();
                createForm(arrs);
                botonfinal();
                sendReponse();
                console.log("aquí ya seguiría la respuesta 4");
                juego = 5;
                if (juego == 5) {
                  let takeRoot = document.getElementById("root");
                  takeRoot.innerHTML =
                    "por fin terminaste este es tu resultado, que aún no tengo en modo bello <br>" +
                    players +
                    " probablemente ganaste" +
                    "<br>" +
                    "presiona regrear para jugar otra vez";
                  botonfinal();
                  let agarra2 = document.getElementById("btnSend");
                  agarra2.addEventListener("click", () => {
                    let takeRoot = document.getElementById("root");
                    takeRoot.innerHTML =
                      "siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
                    console.log("por fin se logró");
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

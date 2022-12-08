//Página films
//preguntas
const questionnaire = [
    {
      categoria: "Cine chickflick",
      pregunta: "¿Cómo vddddes a Dua Lipa?",
      respuesta: "Excelente.",
      incorrecta1: "Muy mala amiga",
      incorrecta2: "Era demasiado alta",
      incorrecta3: "YOLO, no más xq sí",
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
  // id del jugador
  let player = [];
  let plays = [];
  let takeRoot = document.getElementById("root");
  //arrays con las propiedades de los objetos.
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
  console.log(
    questionArr,
    correctArr,
    incorrectArr1,
    incorrectArr2,
    incorrectArr3
  );
  
  //main
  function playNow() {
    let name = namePlayer.value;
    if (
      //si no pones nombre no puedes jugar
      name == "" ||
      name == " " ||
      name == "  " ||
      name == "   " ||
      name == "    "
    ) {
      let sayHi = document.createElement("p");
      let takeRoot = document.getElementById("root");
      let boxForQuestions = document.createElement("form");
      sayHi.textContent = "No te dejaré jugar sí no escribiste un nombre.";
  
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
  






function playName() {
    let welcomeMessage = document.getElementById('namePlayer').value;
        if (welcomeMessage=="" || welcomeMessage==" " || welcomeMessage=="  " || welcomeMessage=="   " || welcomeMessage=="    "){
            document.getElementById("texto").innerHTML = "Prueba de nuevo, introduce tu nombre.";
            } else { document.getElementById("root").innerHTML = "Bienvenide " + welcomeMessage + ". Responde las 5 preguntas. Una vez que hayas concluido da click en Terminar y mira tus aciertos al final.";
        }
    };



// elegir trivia
// let slctTriviaFilms = document.getElementById('filmsTrivia');
// slctTriviaFilms.addEventListener('click',() => {
//   let name = prompt('¿Cómo te llamas?');
//     if (name=="" || name==" " || name=="  " || name=="   " || name=="    "){
//       return alert('Debes ingresar un nombre');
//     } //else { let root = document.getElementById('root')
//     //root.innerHTML = 'Ahora esto debe verse así';
//  // }
// });
// let slctTriviaWorld = document.getElementById('worldTrivia');
// slctTriviaWorld.addEventListener('click',() => {
  
// });
// tomar el nombre de prompt



// Función para dar la bienvenida con el nombre.
function save() {
    const name = document.getElementById('fname').value;
  if (name=="" || name==" " || name=="  " || name=="   " || name=="    "){
      document.getElementById("welcome").innerHTML = 
    "Prueba de nuevo, introduce tu nombre.";
    } else {
      document.getElementById("welcome").innerHTML = 
    "Bienvenide " + name + ". Responde las 5 preguntas. Una vez que hayas concluido da click en Terminar y mira tus aciertos al final.";
    }
}

// // Arreglo con preguntas y respuestas
// const cuestionary = [
//   {
//     "question": " 1. En Orgullo y prejuicio de Jane Austen, ¿qué edad tenía Elizabeth Bennet a mitad de la novela?",
//     "answers": ["20 años","29","55"] //Corecta 20 años
//   },
//   {
//     "question": "2. ¿Quién es la reina de Inglaterra?",
//     "answers": ["Isabel","Diana","Sofía"] //Correcta Isabel
//   },
//   {
//     "question": "3. ¿Cuántos planetas hay en el sistema solar?",
//     "answers": ["9","8","7"] //Correcta 8
//   },
//   {
//     "question": "4. ¿Quién escribió la novela Frankenstein?",
//     "answers": ["Lord Byron","Octavio Paz","Mary Shelley"] //Correcta Mary Shelley
//   },
//   {
//     "question": "5. ¿Quién NO fue un heroe de la batalla de Puebla?",
//     "answers": ["Porfirio Díaz","Antonio Lopez de Santa Ana","Ignacio Zaragoza"] //Correcta 8
//   }
// ]

// let i = -1;
// let total = 0;


// function selectQuestion(){
//   if(i==0 && document.getElementById('a1').checked) {
//     total=total+1; //1 Correcta
//   } else if(i==0 && document.getElementById('a2').checked) {
//     total=total; //1 Inccorrecta 
//   } else if(i==0 && document.getElementById('a3').checked) {
//     total=total;//1 Incorrecta
//   }
//   if(i==1 && document.getElementById('a1').checked) {
//     total=total+1;//2 Correcta
//   } else if(i==1 && document.getElementById('a2').checked) {
//     total=total;//2 Incorrecta
//   } else if(i==1 && document.getElementById('a3').checked) {
//     total=total;//2 Incorrecta
//   }
//   if(i==2 && document.getElementById('a1').checked) {
//     total=total;//3 Incorrecta
//   } else if(i==2 && document.getElementById('a2').checked) {
//     total=total+1;//3 Correcta
//   } else if(i==2 && document.getElementById('a3').checked) {
//     total=total;//3 Incorrecta
//   }
//   if(i==3 && document.getElementById('a1').checked) {
//     total=total;//4 Correcta
//   } else if(i==3 && document.getElementById('a2').checked) {
//     total=total;//4 Incorrecta
//   } else if(i==3 && document.getElementById('a3').checked) {
//     total=total+1;//4 Correcta
//   }
//   if(i==4 && document.getElementById('a1').checked) {
//     total=total;//5 Incorrecta
//   } else if(i==4 && document.getElementById('a2').checked) {
//     total=total+1;//5 Correcta
//   } else if(i==4 && document.getElementById('a3').checked) {
//     total=total;//5 Incorrecta
//   }
//   i = i+1;
  
//   let q = cuestionary[i].question
//   let a = cuestionary[i].answers
//   document.getElementById("qstns").innerHTML = 
//   "<h3>"+q+"</h3>"; //Pregunta
//   document.getElementById("ans1").innerHTML = a[0]; //Respuesta 1
//   document.getElementById("ans2").innerHTML = a[1]; //Respuesta 2
//   document.getElementById("ans3").innerHTML = a[2]; //Respuesta 3
// }

// function back(){
//   i=i-2;
//   selectQuestion()
// }

// function results(){
//    document.getElementById("total").innerHTML = 
//     "Obtuviste "+total+" respuestas buenas de "+cuestionary.length;
//   total=0;
// }



// restart.addEventListener("click",gameRestart);

// function gameRestart (){
//   document.getElementById("selectQuestion()");
// }

///// nuevo desmadre por acá esto es lo que copie del video pero que no ncesariament ees util
// asi que 
//no la vaya yo a cagar

// lógica del funcionamiento de la página
// let preguntas_aleatorias = true;
// let mostrar_pantalla_juego_términado = true;
// let reiniciar_puntos_al_reiniciar_el_juego = true;

// window.onload = function () {
//   base_preguntas = readText("base-preguntas.json");
//   interprete_bp = JSON.parse(base_preguntas);
//   escogerPreguntaAleatoria();
// };

// let base_preguntas = readText("questions.json")
// let interprete_bp = JSON.parse(base_preguntas)
// let pregunta
// let posiblesRespuestas
// let btn_correspondiente = [
//     select_id("btn1"), select_id("btn2"), select_id("btn3", select_id("btn4"))
// ]

// function escogerPreguntaAleatoria() {
//     escogerPregunta(Math.floor(Math.random()*interprete_bp.length))
// }
// function escogerPregunta(n){
//     pregunta = interprete_bp[n]
//     select_id("categoria").innerHTML = pregunta.categoria 
//     select_id("preguntas").innerHTML = pregunta.pregunta
//     select_id("image").setAttribute('src', pregunta.imagen)
//     style('image').objectFit = pregunta.object_it;
//     desordenarRespuestas(pregunta)
//     if(pregunta.imagen){
//         select_id('imagen').setAttribute('src', pregunta.imagen)
//         style('imagen').height = "2000px"
//         style('imagen').width = "100%"
//     }else{
//         style('imagen').height = "0px"
//         style('imagen').width = "0px"
//     }
// }
// let btns = [
//     select_id("btn1"),
//     select_id("btn2"),
//     select_id("btn3"),
//     select_id("btn4"),
// ]
// function desordenarRespuestas(pregunta) {
//     let posiblesRespuestas = [
//         pregunta.respuesta, 
//         pregunta.incorrecta1, 
//         pregunta.incorrecta2, 
//         pregunta.incorrecta3
//     ]
//     posiblesRespuestas.sort(() => Math.random()-0.5)
//     select_id("btn1").innerHTML = posiblesRespuestas[0]
//     select_id("btn2").innerHTML = posiblesRespuestas[1]
//     select_id("btn3").innerHTML = posiblesRespuestas[2]
//     select_id("btn4").innerHTML = posiblesRespuestas[3]
// }
// function oprimir_btn(i){
//     if(posiblesRespuestas[i] == pregunta.respuesta){
//         btn_correspondiente[i].style.background = "green"
//     } else {
//         btn_correspondiente[i].style.background = "red"
//     }
//     setTimeout(() => {
//         reiniciar()
//     }, 30000);
// }
// function reiniciar(){
//     for (const btn of btn_correspondiente) {
//         btn.style.background = "white"
//     }
//     escogerPreguntaAleatoria()
// }

// function select_id(id ) {
//     return document.getElementById(id);
// }
// function style(id){
//     return select_id(id).style
// }
// function readText(ruta_local){
//     var texto = null;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", ruta_local, false);
//     xmlhttp.send();
//     if (xmlhttp == 200) {
//         texto = xmlhttp.responseText;
//     }
//     return texto;
// }
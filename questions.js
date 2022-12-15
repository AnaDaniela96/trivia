// Preguntas para la trivia
export const questionnaire = [
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

// arrays con las propiedades de los objetos.
export default questionArr = questionnaire.map((e) => {
  return `${e.pregunta}`;
});
export const correctArr = questionnaire.map((e) => {
  return `${e.respuesta}`;
});
export const incorrectArr1 = questionnaire.map((e) => {
  return `${e.incorrecta1}`;
});
export const incorrectArr2 = questionnaire.map((e) => {
  return `${e.incorrecta2}`;
});
export const incorrectArr3 = questionnaire.map((e) => {
  return `${e.incorrecta3}`;
});

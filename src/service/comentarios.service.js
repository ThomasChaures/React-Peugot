
import { call } from "./api.service.js";

export const addComent = (comentario, id) => {
  return call({
    uri: `auto/${id}/comentar`,
    method: "POST",
    body: {
      name: comentario.name,
      surname: comentario.surname,
      text: comentario.text
    },
  });
};


export const addAnswer = (comentario, id) => {
  return call({
    uri: `auto/${id}/comentario/${comentario.index}/responder`,
    method: "POST",
    body: {
      name: comentario.name,
      surname: comentario.surname,
      text: comentario.text
    },
  });
};
import { call } from "./api.service.js";

export function getTipos() {
  return call({ uri: `tipos` });
}


export function addTipo(tipo){
  return call({ uri: `tipos/nuevo`, method: "POST", body: tipo });
}
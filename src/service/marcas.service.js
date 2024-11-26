import { call } from "./api.service.js";

export function getMarcas() {
  return call({ uri: `marcas` });
}


export function addMarca(marca){
  return call({ uri: `marcas/nueva`, method: "POST", body: marca });
}
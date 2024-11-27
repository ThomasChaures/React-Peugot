import { call } from "./api.service.js";

export async function getAutos() {
  return call({ uri: "autos" });
}

export async function getAutosAll() {
  return call({ uri: "au/all" });
}


export async function getSearch(uri) {
  return call({ uri: `autos?${uri}` });
}


export async function getAuto(id) {
  return call({ uri: `autos/${id}` });
}

export async function postAuto(auto) {
  return call({ uri: `autos`, method: "POST", body: auto });
}

export async function patchAuto(auto, id) {
  console.log(auto)
  return call({ uri: `autos/${id}`, method: "PATCH", body: auto });
}


export async function deleteAuto(id) {
  return call({ uri: `autos/${id}`, method: "DELETE", });
}


export async function comprarAuto(auto_id, auto, user_id) {
  return call({ uri: `autos/compra/${auto_id}/${user_id}`, method: "PATCH", body: auto });
}
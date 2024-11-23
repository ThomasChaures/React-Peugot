import { call } from "./api.service.js";

export async function getAutos() {
  return call({ uri: "autos" });
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

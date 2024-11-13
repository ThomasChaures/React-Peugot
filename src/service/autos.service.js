import { call } from "./api.service.js";

export async function getAutos(){
    return call({uri: "autos"})
}

export async function getAuto(id) {
    return call({ uri: `autos/${id}`})
}
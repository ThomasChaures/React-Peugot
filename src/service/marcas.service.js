import { call } from "./api.service.js";

export function getMarcas() {
  return call({ uri: `marcas` });
}

import { call } from "./api.service.js";

export function getTipos() {
  return call({ uri: `tipos` });
}

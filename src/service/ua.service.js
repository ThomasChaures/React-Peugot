import { call } from "./api.service.js";

export async function getUa() {
  return call({ uri: "last-activity" });
}
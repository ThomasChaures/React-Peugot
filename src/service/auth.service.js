import { call } from "./api.service.js";

export async function login({ email, password }) {
  return call({
    uri: "usuarios/login",
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  });
}

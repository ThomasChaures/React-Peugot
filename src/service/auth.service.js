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

export async function register({
  email,
  password,
  confirmPassword,
  name,
  surname,
}) {
  return call({
    uri: "usuarios",
    method: "POST",
    body: {
      email: email,
      password: password,
      passwordConfirm: confirmPassword,
      name: name,
      surname: surname,
      role: ''
    },
  });
}

export async function getUsers() {
   return call({uri: 'usuarios'})
}

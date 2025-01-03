import { call } from "./api.service.js";

export async function login({ email, password }) {
  return call({
    uri: "usuarios/login",
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  })
}

export async function register({
  email,
  password,
  passwordConfirm,
  name,
  surname,
}) {
  return call({
    uri: "usuarios/register",
    method: "POST",
    body: {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      name: name,
      surname: surname,
      role: ''
    },
  });
}

export async function getUsers() {
   return call({uri: 'usuarios'})
}

export async function getUserData(id){
    return call({uri: `usuario/${id}`})
}

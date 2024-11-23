import { call } from "./api.service";

export const getVendedor = (email) => {
  return call({uri: `vendedores/${email}`});
};

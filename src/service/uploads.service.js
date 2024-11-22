import { call } from "./api.service";
export const postUploads = async (fileData) => {
  return call({ uri: `uploads`, method: "POST", body: fileData });
};

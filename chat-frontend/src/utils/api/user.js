import { axios } from "core";

export default {
  signIn: (postData) => axios.post("/user/signin", postData),
  signUp: (postData) => axios.post("/user/signup", postData),
  verifyHash: (hash) => axios.get("/user/verify?=" + hash),
  getMe: () => axios.get("/user/me"),
};

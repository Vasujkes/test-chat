import { axios } from "core";

export default {
  signIn: (postData) => axios.post("/user/signin", postData, { validateStatus: false }),
  signUp: (postData) => axios.post("/user/signup", postData),
  verifyHash: (hash) => axios.get("/user/verify?hash=" + hash, { validateStatus: false }),
  getMe: () => axios.get("/user/me"),
};

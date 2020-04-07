export default (key, touched, errors) => {
  if (touched.email && errors.email) {
    return "error";
  } else if (!touched.email) {
    return "";
  } else {
    return "success";
  }
};

import { userApi } from "utils/api";
import { openNotification } from "utils/helpers";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => dispatch(Actions.setUserData(data)));
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.signIn(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        openNotification({
          text: "Неверный логин или пароль",
          type: "error",
          title: "Ошибка при авторизации",
        });
      } else {
        openNotification({
          text: "Отлично!",
          type: "success",
          title: "Авторизация успешна",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }
      return data;
    });
  },
  fetchUserRegistration: (postData) => () => {
    return userApi.signUp(postData);
  },
};

export default Actions;

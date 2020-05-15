import React from "react";
import { Form, Icon, Input } from "antd";

import { Link } from "react-router-dom";
import { Button, Block, FormField } from "components";

import { validateField } from "utils/helpers";

const success = false;
const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit,isSubmitting } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>

      <Block>
        {success ? (
          <div className="auth__succes-block">
            <div>
              <Icon type="info-circle" theme="twoTone" />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} className="login-form">
            <FormField
              name="email"
              placeholder="E-mail"
              icon="mail"
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <FormField
              name="fullname"
              placeholder="Ваше Имя"
              icon="user"
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <FormField
              name="password"
              placeholder="Пароль"
              icon="lock"
              type="password"
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <FormField
              name="password_2"
              placeholder="Повторите Пароль"
              icon="lock"
              type="password"
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button button"
                size="large"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Войти в Аккаунт
            </Link>
          </Form>
        )}
      </Block>
    </div>
  );
};
export default RegisterForm;

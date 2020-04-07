import React from "react";
import { Form, Icon, Input } from "antd";

import { Link } from "react-router-dom";
import { Button, Block } from "components";

import { validateField } from "utils/helpers";

const success = false;
const RegisterForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
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
            <Form.Item
              hasFeedback
              validateStatus={validateField("email", touched, errors)}
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="text"
                size="large"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={validateField("password", touched, errors)}
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                size="large"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item validateStatus={validateField("password", touched, errors)}>
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password2"
                size="large"
                placeholder="Повторите Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button button"
                size="large"
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в Аккаунт
            </Link>
          </Form>
        )}
      </Block>
    </div>
  );
};
export default RegisterForm;

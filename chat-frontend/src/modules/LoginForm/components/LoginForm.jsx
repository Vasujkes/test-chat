import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const LoginForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>

      <Block>
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
          <Form.Item
            hasFeedback
            validateStatus={validateField('password', touched, errors)}
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button button"
              size="large"
              onClick={handleSubmit}
            >
              Войти в Аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;

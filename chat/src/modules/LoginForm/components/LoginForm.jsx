import React, { Component } from "react";
import { Form, Icon, Input} from "antd";
import { Link } from 'react-router-dom'
import { Button, Block } from "../../../components";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>

        <Block>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item hasFeedback validateStatus="success">
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button button"
                size="large"
              >
                Войти в Аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться!
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}
export default LoginForm;

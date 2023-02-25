import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import { Card, Space } from 'antd';

const formItemLayout = {
    labelCol: {
      xs: {
        span: 40,
      },
      sm: {
        span: 16,
      },
    },
    wrapperCol: {
      xs: {
        span: 40,
      },
      sm: {
        span: 26,
      },
    },
  };


const Login = () => {

    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { username, password } = values

        const data = {
            login: username,
            password: password
        }

        // const user = { login, password }
        console.log("coming from front ", data);

        axios
            .post("http://localhost:8000/api/v1/users/login", data /* , config */)
            .then((res) => {
                console.log("for response posted from backend: ", res); // consoles in the node terminal
                if (res.status === 200) {
                    // localStorage.setItem("token", 'Bearer ' + res.data.token);
                    localStorage.setItem("token", res.data.token);
                    // window.location.href = "/dashboard";

                    navigate("/user/dashboard");
                } else {
                    alert("Wrong Login/Password");

                    // clearing out form
                    // setLogin("");
                    // setPassword("");
                }
            })
            .catch((err) => console.log(err));
    };
    
    const toResetPassword = () => {
        navigate('/user/password/reset/request')  // , { state: { id: 1, name: 'test' } }
    }

    return (
        <Space direction="vertical" size={16}>
            <Card title="LOGIN" style={{ width: 450, marginLeft: 400, marginTop: 100, textAlign: "center" }}>
                <Form
                    {...formItemLayout}
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Login!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        {/* <a className="login-form-forgot" href="/user/password/reset/request">
                            Forgot password
                        </a> */}

                        <a className="login-form-forgot" onClick={() => { toResetPassword() }}>
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="/user/signup">Sign Up</a>

                        {/* <Link to="/user/signup"> Sign Up</Link> */}
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    );
    
};

export default Login;
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { Card, Space } from 'antd';
import { toast } from 'react-toastify';

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


const ResetPasswordRequest = () => {

    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { email } = values

        const data = {
            email: email
        }

        console.log("coming from front ", data);

        axios
            .post("http://localhost:8000/api/v1/users/password/reset/request", data)
            .then((res) => {
                console.log("for response posted from backend: ", res); // consoles in the node terminal
                if (res.status === 200) {

                    navigate('/user/password/reset/validate', { state: { email: email } })
                } else {
                    toast.error("Email failed to send", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    return;
                }
            })
            .catch((err) => console.log(err));
    };

    const backToLogin = () => {
        navigate('/user/login')  // , { state: { id: 1, name: 'test' } }
    }

    return (
        <Space direction="vertical" size={16}>
            <Card title="Enter your Registered Email" style={{ width: 450, marginLeft: 400, marginTop: 100, textAlign: "center" }}>
                <Form
                    {...formItemLayout}
                    name="reset_password"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input a valid Email!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Reset Password
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        {/* <a className="login-form-forgot" href="/user/login">
                            Go back to Login
                        </a> */}
                        {/* <Link to="/user/signup"> Sign Up</Link> */}

                        <a className="login-form-forgot" onClick={() => { backToLogin() }}>
                            Go back to Login
                        </a>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    );
}

export default ResetPasswordRequest;
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate, useLocation  } from "react-router-dom";
import axios from "axios";
import { Card, Space } from 'antd';

import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


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


const SetNewPassword = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { password, confirmPassword } = values

        const emailFromState = location.state.email;

        if(password !== confirmPassword) {
            toast.error("Passwords do not match", {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        const data = {
            email: emailFromState,
            newPassword: password
        }

        console.log("coming from front ", data);

        axios
            .put("http://localhost:8000/api/v1/users/password/reset/new", data)
            .then((res) => {
                console.log("for response posted from backend: ", res); // consoles in the node terminal
                if (res.status === 200) {

                    toast.success("Successfully reset your password", {
                        position: toast.POSITION.TOP_CENTER
                    });
                      
                    navigate('/user/login')
                } else {
                    // alert("");
                    // email didn't send
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Space direction="vertical" size={16}>
            <Card title="Enter your New Password" style={{ width: 450, marginLeft: 400, marginTop: 100, textAlign: "center" }}>
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
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                        {
                            required: true,
                            message: 'Please Confirm your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                        />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Create Password
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
        
    );
}

export default SetNewPassword;
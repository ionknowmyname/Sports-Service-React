import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import { Card, Space } from 'antd';


const Signup = () => {

    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { email, phonenumber, password } = values

        const data = {
            email: email,
            phonenumber: phonenumber,
            password: password
        }

        console.log("coming from front ", data);

        axios
            .post("http://localhost:8000/api/v1/users/register", data /* , config */)
            .then((res) => {
                console.log("for response posted from backend: ", res); 

                if (res.status === 200) {
                    // localStorage.setItem("token", 'Bearer ' + res.data.token);
                    localStorage.setItem("token", res.data.token);
                    // window.location.href = "/dashboard";

                    navigate("/user/login");
                } else {
                    alert("Error signing up, Try again");
                    return;

                    // clearing out form
                    // setLogin("");
                    // setPassword("");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Space direction="vertical" size={16}>
            <Card title="LOGIN" style={{ width: 370, marginLeft: 400, marginTop: 100 }}>
                <Form
                name="normal_signup"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
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
                    <Form.Item
                        name="phonenumber"
                        rules={[
                        {
                            required: true,
                            message: 'Please input a valid Phone number!',
                        },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
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
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>

                        {/* Or <a href="">Sign Up</a> */}
                        {/* <Link to="/user/signup"> Sign Up</Link> */}
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="/user/login">
                            Already have an account? Login
                        </a>
                    </Form.Item>
                </Form>
            </Card>
        </Space>                   
    );
}

export default Signup;
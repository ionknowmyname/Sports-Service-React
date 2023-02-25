import React from 'react';
import { Form, Input, Button } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Space } from 'antd';


const formItemLayout = {
    labelCol: {
      xs: {
        span: 30,
      },
      sm: {
        span: 20,
      },
    },
    wrapperCol: {
      xs: {
        span: 30,
      },
      sm: {
        span: 25,
      },
    },
  };



const ValidateOTP = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { otp } = values
        const emailFromState = location.state.email;
        const data = {
            otp: otp,
            email: emailFromState
        }

        console.log("coming from front ", data);

        axios
            .post("http://localhost:8000/api/v1/users/password/reset/validate", data)
            .then((res) => {
                console.log("for response posted from backend: ", res); // consoles in the node terminal
                if (res.status === 200) {
                    
                    navigate('/user/password/reset/setnew', { state: { email: emailFromState } })
                } else {
                    alert("Error validating OTP, Try again");
                }
            })
            .catch((err) => console.log(err));
    };


    return (
        <Space direction="vertical" size={16}>
            <Card title="Enter your OTP" style={{ width: 300, marginLeft: 400, marginTop: 100, textAlign: "center" }}>
                <Form
                    {...formItemLayout}
                    name="validate_otp"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="otp"
                        rules={[
                        {
                            required: true,
                            message: 'Please input a valid OTP!',
                        },
                        ]}
                    >
                        <Input prefix={<CodeOutlined className="site-form-item-icon" />} placeholder="OTP" />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Validate
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="/user/password/reset/request">
                            Didn't get the email? Re-request
                        </a>
                        {/* <Link to="/user/signup"> Sign Up</Link> */}
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    );
}

export default ValidateOTP;
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
// import * as RBS from 'react-bootstrap';
import { Form as Form2, Button as Button2 } from 'react-bootstrap';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLocation, useNavigate  } from "react-router-dom";
import axios from "axios";
import { Card, Space, Row, Col, Avatar } from 'antd';
import { toast } from 'react-toastify';



const formItemLayout = {
    labelCol: {
      xs: {
        span: 30,
      },
      sm: {
        span: 16,
      },
    },
    wrapperCol: {
      xs: {
        span: 30,
      },
      sm: {
        span: 20,
      },
    },
};

const styleForLabelLeft = {
    paddingRight: 20,
    fontSize: 20
}

const styleForLabelRight = {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20
}




const Profile = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // const user = location.state.user;
    const userLocal = JSON.parse(localStorage.getItem("user"));
    // use from local storage instead coz if you go to profile page but not from dashboard, user from location state might be undefined
    console.log("Parsed user from localStorage --> " + userLocal);

    const [showUpdateUsername, setShowUpdateUsername] = useState(false);
    const [showUpdateEmail, setShowUpdateEmail] = useState(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);

    const onFinishUsername = values => {
        console.log('Received values of form: ', values);
        const { email } = values

        const data = {
            email: email
        }

        console.log("coming from front ", data);

        axios
            .put(`http://localhost:8000/api/v1/users/${userLocal._id}/username/update`, data)
            .then((res) => {
                console.log("for response posted from backend: ", res); // consoles in the node terminal
                if (res.status === 200) {

                    toast.success("Further instructions sent to your email", {
                        position: toast.POSITION.TOP_CENTER
                    });

                    navigate('/user/password/reset/validate', { state: { email: email } })
                } else {
                    toast.error("Email failed to send", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    return;
                }
            })
            .catch((err) => {
                console.log(err)

                toast.error("Email failed to send", {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            });
    };

    const onFinishEmail = values => {
        
    };

    const onFinishPassword = values => {
        
    };

    const logoutFunction = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        toast.success("Successfully logged out", {
            position: toast.POSITION.TOP_CENTER
        });

        navigate('/user/login')
    }


    return (
        <Space direction="vertical" size={8}>
            <Card title="PROFILE" style={{ width: 1100, marginLeft: 150, marginTop: 50, textAlign: "center" }}>
                <Row>
                    <Avatar size={150} icon={<UserOutlined />} style={{ position: "relative" }} />
                </Row>
                <div className="site-input-group-wrapper">
                    <Row style={{ height: 20 }}></Row>
                    <Row>
                        <Col span={14}>
                            {/* <RBS.Form.Label style={styleForLabelLeft}>Username</RBS.Form.Label>
                            <RBS.Form.Label style={styleForLabelRight}>user.username</RBS.Form.Label> */}

                            <Form2.Label style={styleForLabelLeft}>Username :</Form2.Label>
                            <Form2.Label style={styleForLabelRight}>{userLocal.username}</Form2.Label>
                            <Button type="primary" size="large" onClick={() => setShowUpdateUsername((prev) => !prev)}>
                                Change Username
                            </Button>
                        </Col>
                        <Col span={10}>
                            {showUpdateUsername === true ? (
                                <Form
                                    {...formItemLayout}
                                    name="change_username"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinishUsername}
                                    size="large"
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input a valid Username!',
                                        },
                                        ]}
                                    >
                                        <Input.Group compact>  {/* size="large" instead of compact */}
                                            <Input style={{ width: 200, textAlign: "left" }} defaultValue="" /> {/* width: 'calc(100% - 200px) */}
                                            <Button type="primary" htmlType="submit">Submit</Button>
                                        </Input.Group>
                                    </Form.Item>        
                                </Form>
                            ) : (<p></p>)}
                            
                        </Col>
                    </Row>

                    <Row style={{ height: 20 }}></Row>
                    <Row>
                        <Col span={14}>
                            <Form2.Label style={styleForLabelLeft}>Email :</Form2.Label>
                            <Form2.Label style={styleForLabelRight}>{userLocal.email}</Form2.Label>
                            <Button type="primary" size="large" onClick={() => setShowUpdateEmail((prev) => !prev)}>
                                Change Email
                            </Button>
                        </Col>
                        <Col span={10}>
                            {showUpdateEmail === true ? (
                                <Form
                                    {...formItemLayout}
                                    name="change_email"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinishEmail}
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
                                        <Input.Group compact>  {/* size="large" instead of compact */}
                                            <Input style={{ width: 200, textAlign: "left" }} defaultValue="" />
                                            <Button type="primary" htmlType="submit">Submit</Button>
                                        </Input.Group>
                                    </Form.Item>        
                                </Form>
                            ) : (<p></p>)}
                            
                        </Col>
                    </Row>

                    <Row style={{ height: 20 }}></Row>
                    <Row>
                        <Col span={6}>
                            <Form2.Label style={styleForLabelLeft}>User Status :</Form2.Label>
                            {userLocal.isActive === true ? (
                                <Form2.Label style={styleForLabelRight}>Activated</Form2.Label>
                            ) : (
                                <Form2.Label style={styleForLabelRight}>Inactive</Form2.Label>
                            )}
                        </Col>
                        <Col span={18}>
                        <Form2.Label style={styleForLabelLeft}>User Interests :</Form2.Label>
                            {userLocal.interest !== [] ? (
                               <p></p> 
                            ) : (<h3>None</h3>)}
                            
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6}>
                            <Button type="primary" size="large" onClick={() => setShowUpdatePassword((prev) => !prev)}>
                                Change Password
                            </Button>
                        </Col>
                        <Col span={18}>
                            {showUpdatePassword === true ? (
                                <Card style={{ width: 400, marginLeft: 0, marginTop: 0}}>
                                <Form
                                    {...formItemLayout}
                                    name="change_password"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinishPassword}
                                >
                                    <Form.Item
                                        name="oldPassword"
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
                                        placeholder="Old Password"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="newPassword"
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
                                        placeholder="New Password"
                                        />
                                    </Form.Item>
                                    
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Update Password
                                        </Button>
                                    </Form.Item>  
                                </Form>
                                </Card>
                            ) : (<p></p>)}
                            
                            <Button type="primary" size="large" onClick={logoutFunction}>
                                Log Out
                            </Button>
                        </Col>
                    </Row>
                    
                </div>
            </Card>
        </Space> 
    )

}

export default Profile;
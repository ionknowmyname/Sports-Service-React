import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
// import * as RBS from 'react-bootstrap';
import { Form as Form2, Button as Button2 } from "react-bootstrap";
import Nav from "../components/Nav";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Space, Row, Col, Avatar, Divider } from "antd";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

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

// const styleForLabelLeft = {
//   paddingRight: 20,
//   fontSize: 20,
// };

// const styleForLabelRight = {
//   paddingLeft: 20,
//   paddingRight: 20,
//   fontSize: 20,
// };

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  let userLocal;

  // const user = location.state.user;

  // const userLocal = JSON.parse(localStorage.getItem("user"));
  // console.log("Parsed user username from localStorage --> " + userLocal.username);

  // use from local storage instead coz if you go to profile page but not from dashboard, user from location state might be undefined

  const [userState, setUserState] = useState({});
  const [usernameState, setUsernameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [showUpdateUsername, setShowUpdateUsername] = useState(false);
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const getData = async () => {
    const endpoint = `http://localhost:8000/api/v1/users/${userLocal._id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get(endpoint, config);

    console.log(
      "username from user get request response --> " +
        response.data.user.username
    );

    setUserState(response.data.user);

    console.log("userState username --> " + userState.username);
    console.log("userState interests --> " + userState.interests);
  };

  useEffect(() => {
    userLocal = JSON.parse(localStorage.getItem("user"));
    console.log(
      "Parsed user username from localStorage --> " + userLocal.username
    );
    console.log("Parsed user id from localStorage --> " + userLocal._id);

    console.log("userLocal interests in useEffect --> " + userLocal.interests);

    getData();
  }, []);

  const onFinishUsername = (values) => {
    console.log("Received values of form: ", values);
    const { username } = values;

    const data = {
      username: username,
    };

    console.log("coming from front ", data);

    axios
      .put(
        `http://localhost:8000/api/v1/users/${userLocal._id}/username/update`,
        data
      )
      .then((res) => {
        console.log("for response posted from backend: ", res); // consoles in the node terminal
        if (res.status === 200) {
          toast.success("Successfully updated username", {
            position: toast.POSITION.TOP_CENTER,
          });

          navigate("/user/profile");
        } else {
          toast.error("Username failed to update", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Username failed to send", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      });
  };

  const onFinishUsername2 = (e) => {
    e.preventDefault();

    const data = {
      username: usernameState,
    };

    console.log("coming from front ", data);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(
        `http://localhost:8000/api/v1/users/${userState._id}/username/update`,
        data,
        config
      )
      .then((res) => {
        console.log("for response posted from backend: ", res); // consoles in the node terminal
        if (res.status === 200) {
          toast.success("Successfully updated username", {
            position: toast.POSITION.TOP_CENTER,
          });

            //   navigate("/user/profile");
            setShowUpdateUsername((prev) => !prev);
        } else {
          toast.error("Username failed to update", {
            position: toast.POSITION.TOP_CENTER,
          });
          setShowUpdateUsername((prev) => !prev);
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Username failed to update", {
          position: toast.POSITION.TOP_CENTER,
        });
        setShowUpdateUsername((prev) => !prev);
      });
  };

  const onFinishEmail = (e) => {
    e.preventDefault();

    const data = {
      email: emailState,
    };

    console.log("coming from front ", data);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(
        `http://localhost:8000/api/v1/users/${userState._id}/email/update`,
        data,
        config
      )
      .then((res) => {
        console.log("for response posted from backend: ", res); // consoles in the node terminal
        if (res.status === 200) {
          toast.success("Successfully updated email", {
            position: toast.POSITION.TOP_CENTER,
          });

          setShowUpdateEmail((prev) => !prev);
        } else {
          toast.error("Email failed to update", {
            position: toast.POSITION.TOP_CENTER,
          });
          setShowUpdateEmail((prev) => !prev);
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Email failed to update", {
          position: toast.POSITION.TOP_CENTER,
        });
        setShowUpdateEmail((prev) => !prev);
      });
  };

  const onFinishPassword = (values) => {
    console.log("Received values of form: ", values);
    const { oldPassword, newPassword } = values;

    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    console.log("coming from front ", data);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .put(
        `http://localhost:8000/api/v1/users/${userState._id}/password/update`,
        data,
        config
      )
      .then((res) => {
        console.log("for response posted from backend: ", res);
        if (res.status === 200) {
          toast.success("Successfully updated Password", {
            position: toast.POSITION.TOP_CENTER,
          });

          navigate("/user/profile");
        } else {
          toast.error("Failed to change Password", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed to change Password", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      });
  };

  const logoutFunction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Successfully logged out", {
      position: toast.POSITION.TOP_CENTER,
    });

    navigate("/user/login");
  };

  return (
    <div className="profile_section">
      <Nav />

      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <div className="site-input-group-wrapper">
          <div className="profile_avatar">
            <Avatar
              size={150}
              icon={<UserOutlined />}
              style={{ position: "relative" }}
            />
          </div>
          <div className="profile_inputs">
            <Divider style={{ fontSize: "1.5rem" }} plain>
              PROFILE
            </Divider>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row">
                {showUpdateUsername === false ? (
                  <>
                    <div className="profile_userName">
                      <div className="proflie_userName_input">
                        <Form2.Label className="userName_label">
                          Username:{" "}
                        </Form2.Label>
                        <Form2.Label className="userName">
                          {userState.username}
                        </Form2.Label>
                      </div>
                      <div className="profile_userNamebutton">
                        <Button
                          type="primary"
                          size="large"
                          onClick={() => setShowUpdateUsername((prev) => !prev)}
                        >
                          Change Username
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Form
                    {...formItemLayout}
                    name="change_email"
                    initialValues={{
                      remember: true,
                    }}
                    size="large"
                  >
                    <Input.Group size="large">
                      {" "}
                      {/* size="large" instead of compact */}
                      <Input
                        style={{ width: 200, textAlign: "left" }}
                        name="username"
                        onChange={(e) => setUsernameState(e.target.value)}
                        value={usernameState}
                      />
                      {/* width: 'calc(100% - 200px) */}
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={onFinishUsername2}
                      >
                        Update
                      </Button>
                    </Input.Group>
                  </Form>
                )}
              </Col>
            </Row>
          </div>

          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row">
              {showUpdateEmail === false ? (
                <div className="profile_userName">
                  <div className="proflie_userName_input">
                    <Form2.Label className="userName_label">
                      Email :
                    </Form2.Label>
                    <Form2.Label className="userName">
                      {userState.email}
                    </Form2.Label>
                  </div>
                  <div className="profile_userNamebutton">
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => setShowUpdateEmail((prev) => !prev)}
                    >
                      Change Email
                    </Button>
                  </div>
                </div>
              ) : (
                <Form
                  {...formItemLayout}
                  name="change_email"
                  initialValues={{
                    remember: true,
                  }}
                  size="large"
                >
                  <Input.Group compact>
                    {" "}
                    {/* size="large" instead of compact */}
                    <Input
                      style={{ width: 200, textAlign: "left" }}
                      onChange={(e) => setEmailState(e.target.value)}
                      value={emailState}
                    />
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={onFinishEmail}
                    >
                      Update
                    </Button>
                  </Input.Group>
                </Form>
              )}
            </Col>
          </Row>

          {/* <Row style={{ height: 20 }}></Row> */}
          <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
          >
            <Col className="gutter-row">
                <div className="profile_userName">
                    <div className="proflie_userName_input">
                        <Form2.Label className="userName_label">User Status : </Form2.Label>
                        {userState.isActive === true ? (
                            <Form2.Label className="userName">Activated</Form2.Label>
                        ) : (
                            <Form2.Label className="userName">Inactive</Form2.Label>
                        )}
                    </div>
                </div>
            </Col>
          </Row>

        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
        >
            <Col className="gutter-row">
                <div className="profile_userName">
                    <div className="proflie_userName_input">
                        <Form2.Label className="userName_label">User Interests : </Form2.Label>
                        {userState.interests !== null ? (
                            <p className="userName">{userState.interests}</p>
                        ) : (
                            <h3>None</h3>
                        )}
                    </div>
                </div>
            </Col>
        </Row>

        <Row 
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
        >
            <Col span={6}>
              <Button
                type="primary"
                size="large"
                onClick={() => setShowUpdatePassword((prev) => !prev)}
              >
                Change Password
              </Button>
            </Col>
            <Col span={18}>
              {showUpdatePassword === true ? (
                <Card style={{ width: 400, marginLeft: 0, marginTop: 0 }}>
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
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Old Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="newPassword"
                      rules={[
                        {
                          required: true,
                          message: "Please Confirm your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="New Password"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Update Password
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              ) : (
                <p></p>
              )}

            </Col>
        </Row>

        <Row style={{ height: 20 }}></Row>
        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
        >
            <Col className="gutter-row">
                <div className="profile_userName">
                    <div className="proflie_userName_input">
                        <Button type="primary" size="large" onClick={logoutFunction}>
                            Log Out
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
      </Card>
    </div>
  );
};

export default Profile;


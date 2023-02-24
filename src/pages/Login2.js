import { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/material/styles';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";

const Login2 = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "34ch",
            },
        },
    }));

    const classes = useStyles();
    const paperStyle = {
        paddingTop: 0,
        width: 350,
        margin: "0 auto",
        marginTop: 30,
    };

    // const btnStyle = { margin: '8px 0'}

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const checkUser = (e) => {
        e.preventDefault();

        if (!login || !password) {
            // phone not required
            alert("Please make sure all fields are filled");
            return;
        }

        const user = { login, password };
        console.log("coming from front ", user);

        // const config = { headers: { "Content-type": "application/json" } };
        axios
            .post("http://localhost:8000/api/v1/users/login", user /* , config */)
            .then((res) => {
                console.log("for response posted to backend: ", res); // consoles in the node terminal
                if (res.status === 200) {
                    // localStorage.setItem("token", 'Bearer ' + res.data.token);
                    localStorage.setItem("token", res.data.token);
                    // window.location.href = "/dashboard";

                    navigate("/user/dashboard");
                } else {
                    alert("Wrong Login/Password");

                    // clearing out form
                    setLogin("");
                    setPassword("");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Typography>
                    <h3>LOGIN</h3>
                </Typography>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={checkUser}
                >
                    <TextField
                        id="filled-basic"
                        label="login*"
                        variant="filled"
                        name="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password*"
                        type="password"
                        name="password"
                        variant="filled"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        endIcon={<LockOpenIcon />}
                        // stlye={btnStyle}
                        onClick={checkUser}
                    >
                        Login
                    </Button>
                    <Typography>
                        Do you have an account?
                        <Link to="/user/signup"> Sign Up</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default Login2;

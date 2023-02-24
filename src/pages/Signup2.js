import { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from '@mui/material/styles';
// import Icon from '@material-ui/core/Icon';
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";
import axios from "axios";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

const Signup2 = () => {
    // const theme = createTheme();
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
        padding: 0,
        width: 350,
        margin: "0 auto",
        marginTop: 30,
    };

    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    // const [interests, setInterests] = useState({});

    const submitUser = (e) => {
        e.preventDefault();

        if (!email || !phonenumber || !password) {
            // phone not required
            alert("Please make sure all fields are filled");
            return;
        }
        if (password.length < 5) {
            alert("Password must be at least 6 characters");
            return;
        }

        const registered = { email, phonenumber, password };
        console.log("For Registered ", registered);

        const config = { headers: { "Content-type": "application/json" } };
        axios
            .post("http://localhost:8000/api/v1/users/register", registered, config)
            .then((res) => {
                console.log("for response posted to backend ", res); // consoles in the node terminal

                // clearing out form
                setEmail("");
                setPhonenumber("");
                setPassword("");

                if (res.status === 200) {
                    window.location.href = "/user/login";
                } else {
                    alert("Error signing up, Try again");
                    return;
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Typography>
                    <h3>SIGN UP</h3>
                </Typography>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitUser}
                >
                    <TextField
                        id="outlined-basic"
                        label="email*"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Phone number*"
                        variant="outlined"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic4"
                        label="Password*"
                        name="password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={submitUser}
                    >
                        Save
                    </Button>

                    <Typography>
                        Already Registered? Go to
                        <Link to="/user/login"> Login</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default Signup2;

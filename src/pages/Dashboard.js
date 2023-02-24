import { useState, useContext /* useEffect */ } from "react";
import { Grid, Paper, Typography, Box, Tab, Tabs } from '@mui/material';
// import axios from "axios";

// import AddMemo from "./AddMemo";
// import Memolist from "./Memolist";
// import ResolvedMemolist from "./ResolvedMemolist";
import { UserContext } from "../UserContext";

const Dashboard = () => {
    const user = useContext(UserContext);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {
        width: 1200,
        height: "90vh",
        margin: "0 auto",
    }; /* , alignItems: "center" */
    // const alignItemsStyle={alignItems: "center"}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }


    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Paper style={paperStyle}>
                    

                    
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;

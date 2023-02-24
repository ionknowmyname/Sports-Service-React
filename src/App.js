import "./App.css";
import Routes from "./Routes";
// import 'antd/dist/antd.css';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { indigo, pink } from "@mui/material/colors";

function App() {
    // const theme = createTheme({
    //     palette: {
    //         primary: {
    //             light: "#757de8",
    //             main: "#3f51b5",
    //             dark: "#002984",
    //             contractText: "#fff",
    //         },
    //         secondary: {
    //             light: "#ff79b0",
    //             main: "#ff4081",
    //             dark: "#c60055",
    //             contractText: "#000",
    //         },
    //         openTitle: indigo["400"],
    //         protectedTitle: pink["400"],
    //         type: "light",
    //     },
    // });

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                <Routes />
            {/* </ThemeProvider> */}

            {/* <p1>Testing if its working at all</p1> */}
        </>
    );
}

export default App;

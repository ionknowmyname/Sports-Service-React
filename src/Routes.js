import {
    BrowserRouter as Router, Routes as Routes2, Route
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import { UserContext } from "./UserContext";

const Routes = () => {
    return (
        <div>
            <Router>
                <Routes2>
                    {/* <UserContext.Provider value="testing context"> */}
                        <Route path="/" element={<Login />} />

                         <Route path="/user/signup" element={<Signup />} />   

                        <Route path="/user/login" element={<Login />} />

                        {/* <Route path="/user/dashboard" element={<Dashboard />} />

                        <Route path="/user/profile" element={<Profile />} /> */}
                    {/* </UserContext.Provider> */}
                </Routes2>
            </Router>
        </div>
    );
};

export default Routes;

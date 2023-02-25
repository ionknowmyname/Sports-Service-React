import {
    BrowserRouter as Router, Routes as Routes2, Route
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ResetPasswordRequest from "./pages/ResetPasswordRequest";
import ValidateOTP from "./pages/ValidateOTP";
import SetNewPassword from "./pages/SetNewPassword";
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

                        <Route path="/user/dashboard" element={<Dashboard />} />

                        <Route path="/user/profile" element={<Profile />} /> 

                        <Route path="/user/password/reset/request" element={<ResetPasswordRequest />} /> 

                        <Route path="/user/password/reset/validate" element={<ValidateOTP />} /> 

                        <Route path="/user/password/reset/setnew" element={<SetNewPassword />} />
                    {/* </UserContext.Provider> */}
                </Routes2>
            </Router>
        </div>
    );
};

export default Routes;

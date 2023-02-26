import react, { useState, useContext /* useEffect */ } from "react";
import * as RBS from 'react-bootstrap'
import "../navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;




const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 500,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


const Dashboard = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    // console.log("user from login state in Dashboard --> " + location.state.user.email);
    console.log("user from localstorage --> " + JSON.parse(localStorage.getItem("user")).username);
    

    return (
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
            </Layout>            
        </Space>



        // <RBS.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        //             {/* expand="sm" makes it collapse to burger icon at a smaller screen size */}
        //             <RBS.Navbar.Brand href="/">SIGN UP</RBS.Navbar.Brand>
        //             <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />

        //             <RBS.Navbar.Collapse id="responsive-navbar-nav">
        //                 <RBS.Nav className="mr-auto">
        //                     {/* leave this nav so the other nav can align to the right */}
        //                 </RBS.Nav>

        //                 <RBS.Nav>   
        //                     {/* <Link href='#' className='nav-link' onClick={() => { doHandleChange('event', 0) }}>Sign Up</Link> */}
        //                     <Link to='/signup' className='nav-link'>Sign Up</Link>
        //                     <Link to='/login' className='nav-link'>Login</Link>
                            
        //                     <RBS.Dropdown as={RBS.ButtonGroup}>
        //                         <Link to='/profile' className='btn btn-info'>Profile</Link>

        //                         <RBS.Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

        //                         <RBS.Dropdown.Menu>
        //                             <Link to='/logout' className='dropdown-item'>Log out</Link>                                   
        //                         </RBS.Dropdown.Menu>
        //                     </RBS.Dropdown>
        //                 </RBS.Nav>
        //             </RBS.Navbar.Collapse>
        //         </RBS.Navbar>




    //     <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj ">
    //     <div class="container-fluid">
    //       <img
    //         src="https://i.gifer.com/RrVB.gif"
    //         width="90vh="
    //         style={{
    //           marginTop: "10px",
    //           marginBottom: "10px",
    //           marginRight: "20px"
    //         }}
    //       />

    //       <div class="webname">studentlist.com</div>

    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="nv navbar-nav justify-content-center">
    //           <li class="lnv nav-item">
    //             <Link
    //               to="./"
    //               className="lnv"
    //               style={{
    //                 textDecoration: "none",
    //                 fontSize: "20px"
    //               }}
    //             >
    //               Home
    //             </Link>{" "}
    //           </li>

    //           <li class="lnv nav-item">
    //             <Link
    //               className="lnv"
    //               to="./studentlist"
    //               style={{
    //                 textDecoration: "none",
    //                 fontSize: "20px"
    //               }}
    //             >
    //               All Students
    //             </Link>{" "}
    //           </li>
    //           <li class="lnv nav-item">
    //             <Link
    //               to="./student/add"
    //               className="lnv"
    //               style={{
    //                 textDecoration: "none",

    //                 fontSize: "20px"
    //               }}
    //             >
    //               Add Student
    //             </Link>{" "}
    //           </li>
    //           <li class="lnv nav-item">
    //             <Link
    //               to="./about"
    //               className="lnv"
    //               style={{
    //                 textDecoration: "none",
    //                 fontSize: "20px"
    //               }}
    //             >
    //               About
    //             </Link>{" "}
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
        
    );
};

export default Dashboard;

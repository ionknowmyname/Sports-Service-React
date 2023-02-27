import react, { useState, useContext /* useEffect */ } from "react";
import * as RBS from 'react-bootstrap'
// import "../navbar.css";
import Nav from "../components/Nav";
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
        <Space direction="vertical" style={{width: '100vw'}} size={[0, 48]}>
            {/* <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
            </Layout>             */}

            <Nav />
        </Space>
        
    );
};

export default Dashboard;

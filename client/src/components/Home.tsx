import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
//import axios from "axios";

const Home = ()=> {
    return(
        <>
        
        <Container fluid className="vh-100 d-flex p-0">
            <Col md={3} className="bg-yellow-100 text-white p-3 d-flex flex-column">
                <Sidebar />                
            </Col>

            {/* Chat Window - Takes up 70% width */}
            <Col md={9} className="bg-light p-3 d-flex flex-column">
                <ChatWindow/>
            </Col>
        </Container>
        </>
    );
}
export default Home;
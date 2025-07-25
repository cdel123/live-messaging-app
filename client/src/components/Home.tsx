import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";


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
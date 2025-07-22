import { Container, ListGroup } from "react-bootstrap";
import Users from "../Users";

function ChatContext(){
    return (
        <>
        <Container>
        {Users.map((user,index)=>(
            <ListGroup.Item key={index}>{user.email} {user.password}</ListGroup.Item>
            
        ))}
        </Container>
        </>
    );
}
export default ChatContext;
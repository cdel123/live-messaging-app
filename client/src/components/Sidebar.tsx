import { Container, ListGroup } from "react-bootstrap";
import { useChat } from '../ChatContext'; // Import the useChat hook

function Sidebar() {
  const { setSelectedChat } = useChat(); // Use the useChat hook to access the chat context

  const handleChatClick = (chatId: number) => {
    setSelectedChat(`chat${chatId}`); // Update the selected chat using the setSelectedChat function
    //navigate(`/chat${chatId}`); this used to directly navigate to the chat page, but now using state to render it in Chatwindow comp
  };

  return (
    <Container>
      <ListGroup className="w-full p-0" style={{cursor:"pointer"}}>
        <ListGroup.Item
          className="w-full"
          onClick={() => handleChatClick(1)}
        >
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item
          className="w-full"
          onClick={() => handleChatClick(2)}
        >
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item
          className="w-full"
          onClick={() => handleChatClick(3)}
        >
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item
          className="w-full"
          onClick={() => handleChatClick(4)}
        >
          Porta ac consectetur ac
        </ListGroup.Item>
        <ListGroup.Item
          className="w-full"
          onClick={() => handleChatClick(5)}
        >
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Sidebar;
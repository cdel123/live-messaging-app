import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat1 from "./screens/Chat1";
 import Home from "./components/Home";
 import AuthPage from "./components/AuthPage";
 import Header from "./components/Header";
 import Footer from "./components/Footer";
 import { ChatProvider } from "./ChatContext";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import './App.css';
 

function App() {
  return (
    <ChatProvider>
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ChatProvider>
  );
}

export default App;

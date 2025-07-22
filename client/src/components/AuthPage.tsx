// components/AuthPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../ChatContext';
import Users from '../Users';

function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { setSelectedChat, setLoggedInUser  } = useChat();

  const handleLogin = async () => {
    const user = Users.find((user) => user.email === username && user.password === password);
    if (user) {
      // If the login is successful, set the logged in user and navigate to the actual screen components
      setLoggedInUser (user);
      navigate('/home');
      setSelectedChat(null);
    } else {
      // If the login fails, display an error message
      alert('Invalid username or password');
    }
  };

  const handleRegister = async () => {
    // Implement register logic here
    // For example, you can add the new user to the users array
    Users.push({ email: username, password: password });
    // If the registration is successful, set the logged in user and navigate to the actual screen components
    setLoggedInUser ({ email: username, password: password });
    navigate('/home');
    setSelectedChat(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      {isRegistering ? (
        <button onClick={handleRegister} className="w-full p-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
          Register
        </button>
      ) : (
        <button onClick={handleLogin} className="w-full p-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
          Login
        </button>
      )}
      <button onClick={() => setIsRegistering(!isRegistering)} className="w-full p-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
        {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
      </button>
    </div>
  );
}

export default AuthPage;
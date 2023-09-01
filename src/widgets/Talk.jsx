import React, { useState } from 'react';
import logo from '../assets/ChatGPT_logo.png';
import profile from '../assets/profile.png';

const ChatMessage = ({ message, isUser }) => (
  <div className={`grid grid-cols-1 p-5 ${isUser ? 'bg-[#efefef]' : ''}`}>
    <div className={`flex ${isUser ? 'flex-row-reverse' : 'justify-start'} gap-5`}>
      <img className='w-[30px]' src={isUser ? profile : logo} alt="" />
      <p>{message}</p>
    </div>
  </div>
);

const Talk = () => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Add user input to chat messages
    setChatMessages([...chatMessages, { message: userInput, isUser: true }]);
    setUserInput('');

    // You can also make an API call here to get the AI response and add it to chatMessages
    // Example:
    // fetchAIResponse(userInput).then((response) => {
    //   setChatMessages([...chatMessages, { message: response, isUser: false }]);
    // });
  };

  return (
    <>
      <div className='chat_container bg-[#ffff] p-10 h-[70vh] overflow-y-scroll flex flex-col gap-5 shadow-lg'>
        {chatMessages.map((messageObj, index) => (
          <ChatMessage
            key={index}
            message={messageObj.message}
            isUser={messageObj.isUser}
          />
        ))}
      </div>

      <div className='shadow-md'>
        <form className='flex justify-center items-center' onSubmit={handleSubmit}>
          <input
            className='w-full p-2'
            type="text"
            name="Query"
            placeholder='Enter your Query'
            value={userInput}
            onChange={handleInputChange}
          />
          <input className='text-white p-2 bg-[#367e2c] ' type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Talk;

// import React, { useState } from 'react';
// import axiosClient from '../utils/axiosClients';

// const Chatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([
//         { sender: 'bot', text: 'Hey there! How can I help you today?' },
//     ]);
//     const [input, setInput] = useState('');

//     const toggleChat = () => setIsOpen(!isOpen);

//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         const userMessage = { sender: 'user', text: input };
//         setMessages(prev => [...prev, userMessage]);
//         setInput('');

//         try {
//             const { data } = await axiosClient.post('/user/api/chat', JSON.stringify({ message: input }));
//             // const res = await fetch('http://localhost:3000/api/chat', {
//             //     method: 'POST',
//             //     headers: { 'Content-Type': 'application/json' },
//             //     body: JSON.stringify({ message: input }),
//             // });

//             // const data = await res.json();
//             const botReply = { sender: 'bot', text: data.reply };
//             setMessages(prev => [...prev, botReply]);
//         } catch (err) {
//             setMessages(prev => [...prev, { sender: 'bot', text: '⚠ Something went wrong.' }]);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') sendMessage();
//     };

//     return (
//         <div>
//             {/* Floating Button */}
//             <button
//                 onClick={toggleChat}
//                 className="fixed bottom-5 right-5 bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
//             >
//                 <img
//                     src="chatbot.png"
//                     alt="Chatbot"
//                     className="w-10 h-10"
//                 />
//                 <span className="font-medium text-sm hidden sm:block">Chatbot</span>
//             </button>

//             {/* Chatbox */}
//             {isOpen && (
//                 <div className="fixed bottom-20 right-5 w-80 max-h-[500px] flex flex-col bg-[#1f2937] text-white border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
//                     {/* Header */}
//                     <div className="bg-[#111827] px-4 py-3 flex items-center gap-2 text-white font-semibold border-b border-gray-700">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//                             alt="Chatbot Icon"
//                             className="w-6 h-6"
//                         />
//                         Chatbot
//                     </div>

//                     {/* Messages */}
//                     <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-[#1f2937]">
//                         {messages.map((msg, idx) => (
//                             //   <div
//                             //     key={idx}
//                             //     className={`p-2 rounded-lg max-w-[75%] break-words ${
//                             //       msg.sender === 'user'
//                             //         ? 'bg-blue-600 text-white ml-auto text-right'
//                             //         : 'bg-gray-700 text-white mr-auto text-left'
//                             //     }`}
//                             //   >
//                             //     {msg.text.split('\n').map((line, i) => (
//                             //       <p key={i}>{line}</p>
//                             //     ))}
//                             //   </div>


//                             <div
//                                 key={idx}
//                                 className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'
//                                     }`}
//                             >
//                                 {msg.sender === 'bot' && (
//                                     <img
//                                         src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//                                         alt="Bot"
//                                         className="w-6 h-6 mt-1"
//                                     />
//                                 )}

//                                 <div
//                                     className={`p-2 rounded-lg max-w-[75%] break-words ${msg.sender === 'user'
//                                         ? 'bg-blue-600 text-white text-right'
//                                         : 'bg-gray-700 text-white text-left'
//                                         }`}
//                                 >
//                                     {msg.text.split('\n').map((line, i) => (
//                                         <p key={i}>{line}</p>
//                                     ))}
//                                 </div>
//                             </div>

//                         ))}
//                     </div>

//                     {/* Input */}
//                     <div className="flex items-center border-t border-gray-700 p-2 bg-[#111827]">
//                         <input
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyDown={handleKeyDown}
//                             placeholder="Type your message..."
//                             className="flex-1 bg-[#1f2937] border border-gray-600 text-white px-3 py-1 rounded-lg text-sm placeholder-gray-400 focus:outline-none"
//                         />
//                         <button
//                             onClick={sendMessage}
//                             className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-lg"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Chatbot;

import React, { useState } from 'react';
import axiosClient from '../utils/axiosClients'; // Assuming this is defined elsewhere

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hey there! How can I help you today?' },
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        console.log(userMessage);

        try {
            const { data } = await axiosClient.post('/user/api/chat', JSON.stringify({ message: input }));
            console.log(data);

            const botReply = { sender: 'bot', text: data.reply };
            setMessages(prev => [...prev, botReply]);
        } catch (err) {
            setMessages(prev => [...prev, { sender: 'bot', text: '⚠ Something went wrong.' }]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div>
            {/* Floating Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 bg-gradient-to-tr from-blue-600 to-indigo-700 hover:scale-105 transition-transform duration-200 text-white px-4 py-1 rounded-full shadow-lg flex items-center gap-3"
            >
                <img src="/hero_photo/69.png" alt="Chatbot" className="w-12 h-12" />
                <span className="font-medium text-sm hidden sm:block">Chatbot</span>
            </button>

            {/* Chatbox */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 max-h-[500px] flex flex-col bg-[#1f2937] text-white border border-gray-600 rounded-2xl shadow-2xl overflow-hidden z-50">
                    {/* Header */}
                    <div className="bg-[#111827] px-4 py-3 flex items-center gap-2 text-white font-semibold border-b border-gray-600">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                            alt="Chatbot Icon"
                            className="w-6 h-6"
                        />
                        Chatbot
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-[#1f2937] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.sender === 'bot' && (
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                                        alt="Bot"
                                        className="w-6 h-6 mt-1"
                                    />
                                )}
                                <div
                                    className={`p-2 rounded-lg max-w-[75%] break-words whitespace-pre-wrap ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white text-right'
                                        : 'bg-gray-700 text-white text-left'
                                        }`}
                                >
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex items-center border-t border-gray-700 p-2 bg-[#111827]">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="flex-1 bg-[#1f2937] border border-gray-600 text-white px-3 py-2 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

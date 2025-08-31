import React, { useEffect, useState } from 'react'
import useConversation from './Useconversation';
import axios from 'axios';

function Usegetmessage  ()  {
    const [ loading , setloading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    useEffect(()=>{
        const getMessages = async () =>{
            setloading(true);
          if(selectedConversation && selectedConversation._id){
              try {
                  const response = await axios.get(`/api/message/get/${selectedConversation._id}`);
                  setMessages(response.data);
                  setloading(false);
              } catch (error) {
                  console.log("Error in usegetmessages" + error);
              }
          }
        }
        getMessages();
    }, [selectedConversation, setMessages])
  return (
    {
        messages,loading
    }
  )
}

export default Usegetmessage
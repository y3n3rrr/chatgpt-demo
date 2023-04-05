import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { BASE_URL } from "../../utils/config";
import './style.css'

export const MessageInput = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post(`${BASE_URL}/abb/Message/SendMessage`, {
            title: "react title",
            content: message,
            createdDate: "2023-04-04"
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      debugger
    }
    // use axios to post data to service
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mesaj</Form.Label>
        <Form.Control type="text" value={message} onChange={(e)=>  setMessage(e.target.value)} />
      </Form.Group>
      <input type="submit" hidden />
    </Form>
  );
}


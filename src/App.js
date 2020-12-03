import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { input, username }]);
  };

  return (
    <div className="App">
      <h1>Hello messanger</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.input}
          username={message.username}
        />
      ))}
    </div>
  );
}

export default App;

import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = ({ message, username }) => {
  //   username = "gedi";
  const isUser = username === message.username;
  const messageClass = ["message_card"];
  if (isUser) messageClass.push("message__user");
  return (
    <div className={messageClass.join(" ")}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}::{message.input}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;

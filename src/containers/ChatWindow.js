import React from "react";
import store from "../store";
import Header from "../components/Header";
import _ from "lodash";
import Chats from "./Chats";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} activeUser={activeUser} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;

import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import socket from "core/socket";

import { Messages as BaseMessages } from "components";

const Dialogs = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user }) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    socket.on("connect", function () {
      socket.emit("room", currentDialogId);
    });
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);

    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 9999);
  }, [items]);

  return <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} user={user} />;
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Dialogs);

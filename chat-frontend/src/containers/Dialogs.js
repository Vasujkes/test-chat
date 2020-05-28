import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
import { Dialogs as BaseDialogs } from "components";
import socket from "core/socket";

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(items));

  const onChangeInput = (value = "") => {
    console.log(items);
    setFiltred(
      items.filter(
        (dialog) =>
          console.log(dialog.author.fullname.toLowerCase()) ||
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  const onNewDialog = () => {
    fetchDialogs();
  };
  useEffect(() => {
    onChangeInput();
  }, [items]);

  useEffect(() => {
    fetchDialogs();
    // if (!items.length) {
    //   fetchDialogs();
    // } else {
    //   setFiltred(items);
    // }
    socket.on("SERVER:DIALOG_CRATED", onNewDialog);

    return () => socket.removeListener("SERVER:DIALOG_CRATED", onNewDialog);
  }, []);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);

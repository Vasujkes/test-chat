import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";

import "./ChatInput.scss";

const ChatInput = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button shape="circle" icon="smile" />
      </div>
      <Input
        placeholder="Введите сообщение"
        size="large"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="chat-input__actions">
        <Button shape="circle" icon="camera" />

        {value ? (
          <Button shape="circle" icon="check-circle" />
        ) : (
          <Button shape="circle" icon="audio" />
        )}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;

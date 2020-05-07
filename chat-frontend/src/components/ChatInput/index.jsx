import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import "./ChatInput.scss";

const ChatInput = (props) => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" size={14} />
          </div>
        )}
        <Button
          onClick={toggleEmojiPicker}
          shape="circle"
          icon="smile"
        />
      </div>
      <Input
        placeholder="Введите сообщение"
        size="large"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn",
          }}
          uploadProps={{
            accept: ".jpg,.jpeg,.gif,.png",
            multiple: "multiple",
          }}
        >
          <Button shape="circle" icon="camera" />
        </UploadField>

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

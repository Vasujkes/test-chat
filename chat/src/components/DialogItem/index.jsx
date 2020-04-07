import React from "react";
import classNames from "classnames";

import { Time, ReadedIcon } from "../";

import "./DialogItem.scss";

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt="ss" />;
  } else {
    //make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames("dialogs__item", { "dialogs__item-online": user.isOnline })}>
    <div className="dialogs__item-avatar ">
      {/* <img src={user.avator} alt={`${user.fullname} avatar`}/> */}
      {getAvatar("http://pixeljoint.com/files/icons/kraken__r177826211.png")}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          <Time date="Apr 07 2020 22:45:00" />
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{message.lastMessage}</p>
        {message.isMe ? (
          <ReadedIcon isMe={true} isReaded={message.isReaded} />
        ) : (
          unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;

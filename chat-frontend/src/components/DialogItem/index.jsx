import React from "react";
import classNames from "classnames";

import { Time, ReadedIcon, Avatar } from "../";

import "./DialogItem.scss";

const DialogItem = ({
  _id,
  created_at,
  onSelect,
  currentDialogId,
  lastMessage,
  isMe,
  partner,
  author,
}) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": lastMessage.user.isOnline,
        "dialogs__item--selected": currentDialogId === _id,
      })}
      onClick={onSelect.bind(this, _id)}
    >
      <div className="dialogs__item-avatar ">
        <Avatar user={lastMessage.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{isMe ? author.fullname : partner.fullname}</b>

          <Time date={created_at} />
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage.text}</p>
          {isMe ? (
            <ReadedIcon isReaded={lastMessage.unread} />
          ) : (
            lastMessage.unread > 0 && (
              <div className="dialogs__item-info-bottom-count">{lastMessage.unread}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;

import React from "react";
import classNames from "classnames";

import { Time, ReadedIcon, Avatar } from "../";

import "./DialogItem.scss";

const DialogItem = ({ _id, user, created_at, text, isReaded, unread, isMe, onSelect }) => (
  <div
    className={classNames("dialogs__item", { "dialogs__item-online": user.isOnline })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar ">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>

        <Time date={created_at} />
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe ? (
          <ReadedIcon isReaded={isReaded} />
        ) : (
          unread > 0 && <div className="dialogs__item-info-bottom-count">{unread}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;

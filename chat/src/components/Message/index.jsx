import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import checkedSvg from "assets/img/checked.svg";
import unCheckedSvg from "assets/img/unchecked.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={classNames("message", { "message--isme": isMe })}>
    <div className="message__content">
      {isMe ? (
        isReaded ? (
          <img className="message__icon-readed" src={checkedSvg} alt="Readed icon" />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={unCheckedSvg}
            alt="No readed icon"
          />
        )
      ) : (
        ""
      )}

      <div className="message__avatar">
        <img src={avatar} alt={`avatart ${user.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <div className="message__attachments">
          {attachments &&
            attachments.map((item, index) => (
              <div className="message__attachments-item" key={index} >
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        <span className="message__date">
          {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}
        </span>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {}
};
Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object
};

export default Message;

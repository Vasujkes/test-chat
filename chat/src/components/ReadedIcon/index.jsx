import React from "react";
import PropTypes from "prop-types";

import checkedSvg from "assets/img/checked.svg";
import unCheckedSvg from "assets/img/unchecked.svg";

const ReadedIcon = ({ isMe, isReaded }) =>
  isMe ? (
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
  );

ReadedIcon.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
};

export default ReadedIcon;

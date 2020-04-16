import React from "react";
import PropTypes from "prop-types";
import { generateAvatarFromHash } from "utils/helpers";
import "./Avatar.scss";

const Avatar = ({ user }) => {

  if (user.avatar) {
    return <img src={user.avatar} alt="ss" />;
  } else {
    const colors = generateAvatarFromHash(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.color} 0%, ${colors.colorLighten} 96.52%)`,
        }}
        className="avatar avatar--char"
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;

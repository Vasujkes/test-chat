import React from "react";
import PropTypes from "prop-types";

import { isToday } from 'date-fns'
import format from "date-fns/format";

const Time = ({ date }) => {

  return isToday(new Date(date)) ? (
    <span className="date-format">{format(new Date(date), "HH:mm")}</span>
  ) : (
    <span className="date-format">{format(new Date(date), "dd.MM.yy")}</span>
  );
};

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
  return (
    <Fragment>
      {/*  {formatDistanceToNow(new Date(date),"h 'o''clock'", { addSuffix: true, locale: ruLocale })} */}
      {format(new Date(date), "HH:mm", { addSuffix: true, locale: ruLocale })}
    </Fragment>
  );
};

Time.propTypes = {
  date: PropTypes.string
};

export default Time;

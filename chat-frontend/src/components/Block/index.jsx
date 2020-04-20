import React from "react";
import classNames from "classnames";

const Block = ({ children, className }) => {
  return <div className={classNames("block")}>{children}</div>;
};

export default Block;

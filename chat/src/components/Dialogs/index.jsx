import React from "react";
import orderBy from "lodash/orderBy";
import { isToday } from "date-fns";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem
        key={item._id}
        unread={3}
        isMe={item.user._id === userId}
        {...item}
      />
    ))}
    {/*  {sortBy(items, (dialog) =>
      dialog.created_at.map((item) => (
        <DialogItem
          key={item._id}
          user={item.user}
          message={item}
          unreaded={3}
          isMe={item.user._id === userId}
        />
      ))
    )} */}
  </div>
);

export default Dialogs;

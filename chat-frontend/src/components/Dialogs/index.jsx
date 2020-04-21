import React, { Fragment } from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog }) => (
  <Fragment>
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактам"
        onChange={(e) => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    <div className="dialogs__list">
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <DialogItem
            onSelect={onSelectDialog}
            key={item._id}
            unread={3}
            isMe={item.user._id === userId}
            {...item}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="ничего не найдено" />
      )}
    </div>
  </Fragment>
);

export default Dialogs;

import React from "react";
import { Icon, Button } from "antd";

import { Dialogs, Messages, ChatInput, Status } from "containers";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" />
            <span>Список диалогов</span>
          </div>
          <Button shape="circle" icon="form" />
        </div>
        <div className="chat__sidebar-dialogs">
          <Dialogs userId={1} />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div className="chat__dialog-header-block">
            <Status online />
          </div>
          <div className="chat__dialog-header-icon">
            <Button shape="circle" icon="ellipsis" />
          </div>
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

import React from "react";
import { Message } from "components";
import { DialogItem } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="dialogs">
      <DialogItem
        user={{
          fullname: "Гай Юлий Цезарь",
          isOnline: true
        }}
        message={{
          lastMessage: " Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях",
          isMe: true,
          isReaded: true
        }}
        unreaded={3}
      />
      <DialogItem
        user={{
          fullname: "Гай Юлий Цезарь",
          isOnline: false
        }}
        message={{
          lastMessage: " Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях",
          isMe: true,
          isReaded: false
        }}
        unreaded={1}
      />
      <DialogItem
        user={{
          fullname: "Гай Юлий Цезарь",
          isOnline: false
        }}
        message={{
          lastMessage: " Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях",
          isMe: false
        }}
        unreaded={3}
      />
    </div>
    <div className="messages">
      <Message
        avatar="http://pixeljoint.com/files/icons/kraken__r177826211.png"
        text="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона"
        date="Mar 12 2020 15:35:00"
      />
      <Message avatar="http://pixeljoint.com/files/icons/kraken__r177826211.png" isTyping />
      <Message
        avatar="http://pixeljoint.com/files/icons/kraken__r177826211.png"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          }
        ]}
        date="Apr 7 2020 23:35:00"
      />
      <Message
        avatar="http://pixeljoint.com/files/icons/demon_final_icon.png"
        text="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона"
        date="Mar 12 2020 15:40:00"
        isMe={true}
        isReaded={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]}
      />
    </div>
  </section>
);

export default Home;

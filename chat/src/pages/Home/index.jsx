import React from "react";

import { Message, Dialogs } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Dialogs
      userId={1}
      items={[
        {
          _id: "2a3dfa66c2d8e8c67b77f2a25886e3cf",

          text:
            " Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях",
          created_at: "Apr 07 2020 22:45:00",
          isReaded: false,

          user: {
            _id: "2a3dfa66c2d8e8c67b77f2a25886e3cf",
            fullname: "Гай Юлий Цезарь",
            isOnline: true,
            avatar: null,
          },
        },
        {
          _id: Math.random(),

          text:
            " Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях",
          created_at: "Apr 08 2020 12:45:00",
          isReaded: false,

          user: {
            _id: 1,
            fullname: "Марк Юний Брут",
            isOnline: true,
            avatar:
              "https://regnum.ru/uploads/pictures/news/2017/03/15/regnum_picture_1489528288154172_normal.jpg",
          },
        },
      ]}
    />

    <div className="messages">
      <Message
        avatar="http://pixeljoint.com/files/icons/kraken__r177826211.png"
        date="Mar 12 2020 15:35:00"
        audio="https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3"
      />
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
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
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
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
          },
        ]}
      />
    </div>
  </section>
);

export default Home;

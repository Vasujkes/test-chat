import React from "react";
import { Message } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Message
      avatar="http://pixeljoint.com/files/icons/kraken__r177826211.png"
      text="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона"
      date="Mar 12 2020 15:35:00"
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
  </section>
);

export default Home;

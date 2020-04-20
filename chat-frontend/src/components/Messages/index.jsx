import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
  return items ? (
    <Fragment>
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
    </Fragment>
  ) : (
    <Empty description="сообщений нет" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;

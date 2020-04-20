import React from "react";
import { Icon, Button } from "antd";

import { Messages, Status, ChatInput } from "components";
import { Dialogs } from "containers";

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
          <Dialogs
            userId={1}
            items={[
              {
                _id: "6ef2d8df5bf07d13e25e8e1488367dc1",
                text:
                  "Exercitation aliquip cupidatat occaecat eu esse deserunt commodo magna officia voluptate reprehenderit. Ut laborum cupidatat sit amet consectetur tempor non voluptate cupidatat aliqua do ut velit. Laborum nostrud quis sint cupidatat eiusmod cupidatat cillum.",
                created_at: "Tue Feb 06 2007 08:03:11 GMT+0000 (UTC)",
                isReaded: false,
                user: {
                  _id: "6ef2d8df5bf07d13e25e8e1488367dc1",
                  fullname: "Sophie Hardy",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "5900cd06848c3e6f19e9aba8d61cd651",
                text:
                  "Sit reprehenderit officia adipisicing culpa velit culpa culpa veniam nostrud nostrud cupidatat id eu dolor. Ea amet exercitation dolore occaecat aute fugiat non quis pariatur aute qui. Nisi adipisicing reprehenderit Lorem cupidatat sit consectetur labore duis et qui nostrud.",
                created_at: "Tue May 10 2005 21:41:53 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "5900cd06848c3e6f19e9aba8d61cd651",
                  fullname: "Terrell Whitfield",
                  isOnline: false,
                  avatar: null,
                },
              },
              {
                _id: "f1567ddebbef561ab27e014b57f20693",
                text:
                  "Duis deserunt consequat aliquip eu incididunt nulla consectetur magna ullamco officia excepteur nisi eiusmod. Est nisi magna ea minim minim ut elit sunt tempor incididunt laborum. Voluptate magna occaecat aute quis ut ipsum duis nulla ea fugiat.",
                created_at: "Sat Oct 03 1970 05:41:15 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "f1567ddebbef561ab27e014b57f20693",
                  fullname: "Rene Boyd",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "38b9218065c95bd05c6a3f8aad961cef",
                text:
                  "Do elit consectetur est consequat cupidatat sunt adipisicing reprehenderit sunt. Qui ipsum exercitation amet deserunt ex culpa. Cupidatat proident laborum ad labore.",
                created_at: "Wed Apr 14 1971 00:12:55 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "38b9218065c95bd05c6a3f8aad961cef",
                  fullname: "Celeste Lott",
                  isOnline: false,
                  avatar: null,
                },
              },
              {
                _id: "1780b934541ee332723b0ce4001db3ee",
                text:
                  "Minim minim velit aute elit consequat reprehenderit cillum excepteur. Aute amet commodo esse consequat ullamco do mollit proident eu. Sint enim ea duis et magna do nisi cillum ad et sint.",
                created_at: "Sat Apr 13 1985 15:30:41 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "1780b934541ee332723b0ce4001db3ee",
                  fullname: "Twila Crawford",
                  isOnline: false,
                  avatar: null,
                },
              },
              {
                _id: "597723164dbfc74212fe03b5afbbd6b5",
                text:
                  "Id nisi dolore aliquip cillum incididunt deserunt esse commodo. Proident incididunt sit ipsum amet velit. Minim commodo irure occaecat dolore eu eiusmod esse consequat consequat mollit exercitation proident amet.",
                created_at: "Mon Jul 08 2013 00:14:26 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "597723164dbfc74212fe03b5afbbd6b5",
                  fullname: "Katy Pearson",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "b9ae6d4b8fc3c687625022e047a0d2f7",
                text:
                  "Aute sit nostrud reprehenderit minim mollit qui consequat pariatur aliquip commodo sit eu laboris. Lorem dolor culpa elit aliqua tempor ipsum aute nulla esse. Lorem qui id cillum ullamco sunt et minim.",
                created_at: "Wed Jan 27 1982 14:21:08 GMT+0000 (UTC)",
                isReaded: false,
                user: {
                  _id: "b9ae6d4b8fc3c687625022e047a0d2f7",
                  fullname: "Sofia Griffith",
                  isOnline: false,
                  avatar: null,
                },
              },
              {
                _id: "4167005c7e73455e2d59aad8627e241e",
                text:
                  "Proident veniam laboris id velit irure ea aliqua aute aute adipisicing voluptate labore esse. Eu ut nisi est ut sunt eiusmod Lorem voluptate adipisicing velit eiusmod incididunt laboris. Minim Lorem cillum anim officia magna est.",
                created_at: "Tue Apr 04 2000 10:07:54 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "4167005c7e73455e2d59aad8627e241e",
                  fullname: "Jessica Conley",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "b754dbe950e095e63855ae8161eb6bf3",
                text:
                  "Voluptate ea ut elit est ut ad ullamco voluptate velit reprehenderit eu sit incididunt. Pariatur Lorem qui occaecat dolor deserunt id deserunt dolor. Irure aute dolor Lorem exercitation proident eiusmod nisi officia ea magna.",
                created_at: "Sun Nov 11 2012 04:26:45 GMT+0000 (UTC)",
                isReaded: false,
                user: {
                  _id: "b754dbe950e095e63855ae8161eb6bf3",
                  fullname: "Parks Edwards",
                  isOnline: false,
                  avatar: null,
                },
              },
              {
                _id: "2547607b03513256dd057334a4877d56",
                text:
                  "Tempor non adipisicing laboris exercitation dolore quis ad velit minim do ad dolor magna. Ut sit et deserunt voluptate aliqua veniam enim excepteur do incididunt ad fugiat do. Tempor nostrud ad excepteur est eiusmod do labore pariatur anim magna.",
                created_at: "Tue May 16 1978 11:37:30 GMT+0000 (UTC)",
                isReaded: true,
                user: {
                  _id: "2547607b03513256dd057334a4877d56",
                  fullname: "Anita Neal",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "7f77e47535c4e980001b6e7bd0842673",
                text:
                  "Ea amet minim veniam veniam id dolor elit velit adipisicing deserunt duis consequat exercitation. Nisi cupidatat consequat nisi amet aliqua elit cupidatat pariatur id cupidatat id exercitation tempor cupidatat. Elit velit commodo sunt non pariatur ut laboris eu cupidatat tempor cupidatat nostrud.",
                created_at: "Tue Feb 11 2014 19:37:33 GMT+0000 (UTC)",
                isReaded: false,
                user: {
                  _id: "7f77e47535c4e980001b6e7bd0842673",
                  fullname: "Ray Barr",
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: "03134b544be7fce186301453d9196309",
                text:
                  "Nisi enim cillum sunt cillum aliqua sit adipisicing. Ipsum pariatur ad dolor minim culpa ea et aliqua sit elit ea. Laboris Lorem elit enim labore et velit.",
                created_at: "Mon Nov 28 1988 15:41:00 GMT+0000 (UTC)",
                isReaded: false,
                user: {
                  _id: "03134b544be7fce186301453d9196309",
                  fullname: "Mcmillan Weeks",
                  isOnline: false,
                  avatar: null,
                },
              },
            ]}
          />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div className="chat__dialog-header-block">
            <div className="chat__dialog-header-wrapper">
              <b className="chat__dialog-header-username">qwe </b>
              <div className="chat__dialog-header-status">
                <Status online />
              </div>
            </div>
          </div>
          <div className="chat__dialog-header-icon">
            <Button shape="circle" icon="ellipsis" />
          </div>
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput/>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

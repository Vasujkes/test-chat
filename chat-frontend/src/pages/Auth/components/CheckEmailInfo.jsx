import React, { useEffect, useState } from "react";
import { Result } from "antd";
import { SmileOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { userApi } from "utils/api";

import { Block } from "components";

const CheckEmailInfo = ({ location }) => {
  const [verefied, setVerefied] = useState(true);
  useEffect(() => {
    const hash = location.search.split("hash=")[1];
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerefied(true);
        }
      });
    }
  }, []);
  return (
    <div>
      <Block>
        {verefied ? (
          <Result
            icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
            title="Готово!"
            subTitle={<p>Акаунт успешно подтвержден.</p>}
          />
        ) : (
          <Result
            icon={<SmileOutlined />}
            title="Отлично!"
            subTitle={
              <p>
                Регистрация прошла успешна.
                <br />
                Ссылка с подтверждением аккаунта отправленная на E-mail
              </p>
            }
          />
        )}
      </Block>
    </div>
  );
};

export default CheckEmailInfo;

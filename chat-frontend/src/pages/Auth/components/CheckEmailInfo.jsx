import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";
import { SmileOutlined, CheckCircleTwoTone, FrownTwoTone } from "@ant-design/icons";
import { userApi } from "utils/api";

import { Block } from "components";

const CheckEmailInfo = ({ location, history }) => {
  const [verefied, setVerefied] = useState(null);
  useEffect(() => {
    const hash = location.search.split("hash=")[1];
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerefied("success");
        }
        if (data.status === "error") {
          setVerefied("error");
        }
      });
    } else {
      setVerefied("initialize");
    }
  }, []);
  return (
    <div>
      <Block>
        {
          {
            initialize: (
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
            ),
            success: (
              <Result
                icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
                title="Готово!"
                subTitle={<p>Акаунт успешно подтвержден.</p>}
                extra={
                  <Button type="primary" onClick={() => history.push("/signin")}>
                    Войти
                  </Button>
                }
              />
            ),
            error: (
              <Result
                icon={<FrownTwoTone twoToneColor="#D8000C" />}
                title="Ошибка!"
                subTitle={
                  <p>
                    Чтото пошло не так.
                    <br />
                    Попробуйте снова
                  </p>
                }
              />
            ),
          }[verefied]
        }
      </Block>
    </div>
  );
};

export default CheckEmailInfo;

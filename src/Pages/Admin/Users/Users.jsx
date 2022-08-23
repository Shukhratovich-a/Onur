import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import styles from "./Users.module.scss";

const PartnerEdit = () => {
  const [status, setStatus] = React.useState("waiting");

  const normalizeTime = (time) => {
    const date = new Date(Date.parse(time));

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const normalizeNumber = (number) => {
    const array = number.split("");

    array.splice(3, 0, " ");
    array.splice(6, 0, " ");
    array.splice(10, 0, " ");
    array.splice(13, 0, " ");

    return "+" + array.join("");
  };

  const [token] = useToken();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/users?status=" + status, {
        headers: {
          token,
        },
      });

      const data = await responce.json();

      console.log(data);

      if (data.status === 200) {
        setUsers(() => data.data);
      } else {
        setUsers(() => []);
      }
    })();
  }, [token, status]);

  const handleEditStatus = (evt) => {
    setStatus(evt.target.name);
  };

  const putMessage = (evt, id) => {
    (async () => {
      const responce = await fetch(HOST + "/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          status: evt.target.name,
        }),
      });

      const data = await responce.json();

      if (data.status === 202) {
        if (data.data.status !== status) {
          const array = [...users];

          const index = users.findIndex((user) => user.userId === id);

          array.splice(index, 1);
          setUsers(() => array);
        }
      }
    })();
  };

  return (
    <main className="main">
      <section className={`${styles.users}`}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.users__top}`}>
            <Button
              className={`${styles.users__top__button}`}
              name={"waiting"}
              variant={"contained"}
              type={"button"}
              onClick={handleEditStatus}
            >
              Waiting
            </Button>
            <Button
              className={`${styles.users__top__button}`}
              name={"enabled"}
              variant={"contained"}
              type={"button"}
              onClick={handleEditStatus}
            >
              Enabled
            </Button>
            <Button
              className={`${styles.users__top__button}`}
              name={"disabled"}
              variant={"contained"}
              type={"button"}
              onClick={handleEditStatus}
            >
              Disabled
            </Button>
          </div>

          <ul className={`${styles.users__list}`}>
            {users.length > 0 &&
              users.map((user) => (
                <li className={`${styles.user}`} key={user.userId}>
                  <div className={`${styles.user__left}`}>
                    <span>{user.username}</span>
                    <p>{user.userMessage}</p>
                    <a href={"tel:+" + user.userNumber}>{normalizeNumber(user.userNumber)}</a>
                  </div>

                  <div className={`${styles.user__right}`}>
                    <div className="">
                      {status !== "enabled" && (
                        <Button
                          className={`${styles.users__top__button}`}
                          name={"enabled"}
                          variant={"contained"}
                          type={"button"}
                          onClick={(evt) => putMessage(evt, user.userId)}
                        >
                          Enabled
                        </Button>
                      )}

                      {status !== "disabled" && (
                        <Button
                          className={`${styles.users__top__button}`}
                          name={"disabled"}
                          variant={"contained"}
                          type={"button"}
                          onClick={(evt) => putMessage(evt, user.userId)}
                        >
                          Disabled
                        </Button>
                      )}
                    </div>
                    <time>{normalizeTime(user.createAt)}</time>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PartnerEdit;
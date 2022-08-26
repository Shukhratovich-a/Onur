import React from "react";

import { HOST } from "../../../config";

import useToken from "../../../Hooks/useToken";

import styles from "./Admins.module.scss";

const Admins = () => {
  const [token] = useToken();

  const [admins, setAdmins] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/admins", {
        headers: {
          token,
        },
      });

      const data = await responce.json();

      console.log(data);

      if (data.status === 200) {
        setAdmins(() => data.data);
      } else {
        setAdmins(() => []);
      }
    })();
  }, [token]);

  return (
    <main className="main">
      <section className={`${styles.admins}`}>
        <div className={`${styles.container} container`}>
          {/* <TextField
            className={`${styles.partner__form__input}`}
            name={"name"}
            label={"Name"}
            value={name}
            variant={"outlined"}
            fullWidth
            onChange={(newValue) => setName(newValue.target.value)}
          /> */}
        </div>
      </section>
    </main>
  );
};

export default Admins;

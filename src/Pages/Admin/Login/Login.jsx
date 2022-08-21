import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, TextField } from "@mui/material";

import { HOST } from "../../../config";

import useToken from "../../../Hooks/useToken";

import styles from "./Login.module.scss";

const Login = () => {
  const [errored, setErrored] = React.useState(false);

  const [setToken] = useToken(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    setToken("");
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, password } = evt.target.elements;

    (async () => {
      const responce = await fetch(HOST + "/admins/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: name.value.trim(),
          password: password.value.trim(),
        }),
      });

      const data = await responce.json();

      if (data.status === 200 && data.token) {
        navigate("/admin");
        evt.target.reset();
        setToken(data.token);
      } else {
        setErrored(true);
      }
    })();
  };

  return (
    <main className={`${styles.login}`}>
      <form className={`${styles.login__form}`} onSubmit={handleSubmit}>
        {errored && (
          <Alert className={`${styles.login__alert}`} severity="error">
            Wrong username or password
          </Alert>
        )}

        <TextField
          className={`${styles.login__form__input}`}
          name={"name"}
          label={"Name"}
          variant={"outlined"}
          type={"text"}
          fullWidth
        />

        <TextField
          className={`${styles.login__form__input}`}
          name={"password"}
          label={"Password"}
          variant={"outlined"}
          type={"password"}
          fullWidth
        />

        <Button
          className={`${styles.login__form__button}`}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default Login;

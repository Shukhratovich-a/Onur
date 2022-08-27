import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextareaAutosize, Button, Modal, Box } from "@mui/material";

import { HOST } from "../../../config";

import useToken from "../../../Hooks/useToken";

import styles from "./About.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const { aboutLanguage } = useParams();
  const [about, setAbout] = React.useState("");
  const [result, setResult] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [token] = useToken();

  React.useEffect(() => {
    (async () => {
      const response = await fetch(HOST + "/about?lang=" + aboutLanguage);

      const data = await response.json();

      if (data.status === 200 && data.data) {
        setAbout(data.data.aboutDesctiption.split(`\n`).join("\n\n"));
        setResult(data.data.aboutDesctiption.split(`\n`).join("\n\n"));
      }
    })();
  }, [aboutLanguage]);

  const saveAbout = () => {
    let array = result.split("\n");

    array = array.filter((str) => str !== "").join("\n");

    (async () => {
      const responce = await fetch(HOST + "/about", {
        method: "PUT",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lang: aboutLanguage, aboutDescription: array }),
      });

      const data = await responce.json();

      if (data.status === 201) {
        setIsOpen(true);
      }
    })();
  };

  return (
    <main className="main">
      <Modal
        className={`${styles.about__modal}`}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={`${styles.about__modal__inner}`}>
          <span>Saved</span>

          <Button
            className={`${styles.about__modal__button}`}
            variant={"contained"}
            type={"submit"}
            onClick={() => setIsOpen(false)}
          >
            ok
          </Button>
        </Box>
      </Modal>

      <section className={`${styles.about}`}>
        <div className={`${styles.container} container`}>
          <ul className={`${styles.about__list}`}>
            <li className={`${styles.about__item}`}>
              <Button
                className={`${styles.about__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/about/en")}
              >
                en
              </Button>
            </li>
            <li className={`${styles.about__item}`}>
              <Button
                className={`${styles.about__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/about/ru")}
              >
                ru
              </Button>
            </li>
            <li className={`${styles.about__item}`}>
              <Button
                className={`${styles.about__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/about/uz")}
              >
                uz
              </Button>
            </li>
          </ul>

          <div className={`${styles.about__inner}`}>
            <TextareaAutosize
              className={`${styles.about__area}`}
              maxRows={100}
              value={about}
              onChange={(evt) => {
                setAbout(evt.target.value);
                setResult(evt.target.value);
              }}
            />

            <Button
              className={`${styles.about__button}`}
              variant={"contained"}
              type={"button"}
              onClick={saveAbout}
            >
              Save
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

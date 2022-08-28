import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, TextareaAutosize, Button, Modal, Box } from "@mui/material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import Images from "../../../Components/Lib/Icons/Images";

import styles from "./ServiceEdit.module.scss";

const ServiceEdit = () => {
  const navigate = useNavigate();
  const [token] = useToken();

  const { serviceSlug, serviceLang } = useParams();

  const [serviceId, serServiceId] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/services/" + serviceSlug + "?lang=" + serviceLang);

      const data = await responce.json();

      if (data.status === 200) {
        setImage(() => data.data[0].serviceImage);
        setName(() => data.data[0].serviceName);
        setDescription(() => data.data[0].serviceDescription);
        serServiceId(() => data.data[0].serviceId);
      }
    })();
  }, [serviceSlug, serviceLang]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    const file = evt.target.file.files[0];

    formData.append("serviceLang", serviceLang);
    formData.append("serviceName", name);
    formData.append("serviceDescription", description);
    if (file) formData.append("image", evt.target.file.files[0]);

    (async () => {
      const responce = await fetch(HOST + "/services/" + serviceId, {
        method: "PUT",
        headers: {
          token: token,
        },
        body: formData,
      });

      const data = await responce.json();

      if (data.status === 202) {
        setIsOpen(true);
      }
    })();
  };

  return (
    <main className="main">
      <Modal
        className={`${styles.service__modal}`}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={`${styles.service__modal__inner}`}>
          <span>Saved</span>

          <Button
            className={`${styles.service__modal__button}`}
            variant={"contained"}
            type={"submit"}
            onClick={() => setIsOpen(false)}
          >
            ok
          </Button>
        </Box>
      </Modal>

      <section className={`${styles.service}`}>
        <div className={`${styles.container} container`}>
          <Button
            className={`${styles.service__button}`}
            variant={"contained"}
            type={"button"}
            onClick={() => navigate("/admin/services")}
          >
            back
          </Button>

          <ul className={`${styles.service__list}`}>
            <li className={`${styles.service__item}`}>
              <Button
                className={`${styles.service__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/services/edit/" + serviceSlug + "/en")}
              >
                en
              </Button>
            </li>
            <li className={`${styles.service__item}`}>
              <Button
                className={`${styles.service__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/services/edit/" + serviceSlug + "/ru")}
              >
                ru
              </Button>
            </li>
            <li className={`${styles.service__item}`}>
              <Button
                className={`${styles.service__link}`}
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/admin/services/edit/" + serviceSlug + "/uz")}
              >
                uz
              </Button>
            </li>
          </ul>

          <form className={`${styles.service__form}`} onSubmit={handleSubmit}>
            <label className={`${styles.service__form__label}`}>
              <div
                className={`${styles.service__form__inner} ${
                  image ? styles["service__form__inner--image"] : ""
                }`}
              >
                {image ? (
                  <img
                    className={`${styles.service__form__image}`}
                    src={image}
                    alt="Select file"
                    width={500}
                    height={500}
                  />
                ) : null}

                <div className={`${styles.service__form__wrapper}`}>
                  <Images />
                  <span>Upload profile image here</span>
                  <span>(JPG, PNG)</span>
                </div>
              </div>

              <input
                className={`${styles.service__form__input} visually-hidden`}
                name="file"
                type="file"
                onChange={(evt) => {
                  const file = evt.target.files[0];
                  const path = (window.URL || window.webkitURL).createObjectURL(file);
                  setImage(path);
                }}
              />
            </label>

            <div className={`${styles.service__form__aside}`}>
              <TextField
                className={`${styles.service__form__input}`}
                name={"name"}
                label={"Name"}
                value={name}
                variant={"outlined"}
                fullWidth
                onChange={(newValue) => setName(newValue.target.value)}
              />

              <TextareaAutosize
                className={`${styles.service__form__area}`}
                value={description}
                onChange={(newValue) => setDescription(newValue.target.value)}
              />

              <Button
                className={`${styles.service__form__button}`}
                variant={"contained"}
                type={"submit"}
                fullWidth
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ServiceEdit;

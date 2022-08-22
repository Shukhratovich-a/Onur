import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import Images from "../../../Components/Lib/Icons/Images";

import styles from "./PartnerEdit.module.scss";

const PartnerEdit = () => {
  const navigate = useNavigate();

  const { partnerId } = useParams();
  const [token] = useToken();

  const [name, setName] = React.useState("");
  const [site, setSite] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (partnerId) {
      (async () => {
        const responce = await fetch(HOST + "/partners/" + partnerId);

        const data = await responce.json();

        if (data.status === 200) {
          setImage(() => data.data.partnerImage);
          setName(() => data.data.partnerName);
          setSite(() => data.data.partnerSite);
        }
      })();
    }
  }, [partnerId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    const file = evt.target.file.files[0];

    formData.append("partnerName", name);
    formData.append("partnerSite", site);
    if (file) formData.append("image", evt.target.file.files[0]);

    (async () => {
      const responce = await fetch(HOST + "/partners/" + (partnerId ? partnerId : ""), {
        method: partnerId ? "PUT" : "POST",
        headers: {
          token: token,
        },
        body: formData,
      });

      const data = await responce.json();

      if (data.status === partnerId ? 202 : 201) {
        navigate("/admin/partners/edit/" + data.data.partnerId);
      }
    })();
  };

  const handleDelete = (evt) => {
    evt.preventDefault();

    (async () => {
      const responce = await fetch(HOST + "/partners/" + partnerId, {
        method: "DELETE",
        headers: {
          token: token,
        },
      });

      const data = await responce.json();

      console.log(data);

      if (data.status === 202) {
        navigate("/admin/partners");
      }
    })();
  };

  return (
    <main className="main">
      <section className={`${styles.partner}`}>
        <div className={`${styles.container} container`}>
          <form className={`${styles.partner__form}`} onSubmit={handleSubmit}>
            <label className={`${styles.partner__form__label}`}>
              <div
                className={`${styles.partner__form__inner} ${
                  image ? styles["partner__form__inner--image"] : ""
                }`}
              >
                {image ? (
                  <img
                    className={`${styles.partner__form__image}`}
                    src={image}
                    alt="Select file"
                    width={500}
                    height={500}
                  />
                ) : null}

                <div className={`${styles.partner__form__wrapper}`}>
                  <Images />
                  <span>Upload profile image here</span>
                  <span>(JPG, PNG)</span>
                </div>
              </div>

              <input
                className={`${styles.partner__form__input} visually-hidden`}
                name="file"
                type="file"
                onChange={(evt) => {
                  const file = evt.target.files[0];
                  const path = (window.URL || window.webkitURL).createObjectURL(file);
                  setImage(path);
                }}
              />
            </label>

            <div className={`${styles.partner__form__aside}`}>
              <TextField
                className={`${styles.partner__form__input}`}
                name={"name"}
                label={"Name"}
                value={name}
                variant={"outlined"}
                fullWidth
                onChange={(newValue) => setName(newValue.target.value)}
              />

              <TextField
                className={`${styles.partner__form__input}`}
                name={"site"}
                label={"Site"}
                value={site}
                variant={"outlined"}
                fullWidth
                onChange={(newValue) => setSite(newValue.target.value)}
              />

              <Button
                className={`${styles.partner__form__button}`}
                variant={"contained"}
                type={"submit"}
                fullWidth
              >
                Save
              </Button>

              {partnerId ? (
                <Button
                  className={`${styles.partner__form__button}`}
                  variant={"contained"}
                  type={"button"}
                  fullWidth
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PartnerEdit;

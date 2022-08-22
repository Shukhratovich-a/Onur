import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import Images from "../../../Components/Lib/Icons/Images";

import styles from "./ProductEdit.module.scss";

const PartnerEdit = () => {
  const navigate = useNavigate();
  let { productId, partnerId } = useParams();

  const [token] = useToken();

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (productId) {
      (async () => {
        const responce = await fetch(HOST + "/products/" + productId);

        const data = await responce.json();

        if (data.status === 200) {
          setImage(() => data.data.productImage);
          setName(() => data.data.productName);
        } else {
          navigate(-1);
        }
      })();
    }
  }, [productId, navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    const file = evt.target.file.files[0];

    formData.append("productName", name);
    if (partnerId) formData.append("partnerId", partnerId);
    if (file) formData.append("image", evt.target.file.files[0]);

    (async () => {
      const responce = await fetch(HOST + "/products/" + (productId ? productId : ""), {
        method: productId ? "PUT" : "POST",
        headers: {
          token: token,
        },
        body: formData,
      });

      const data = await responce.json();

      if (data.status === 201) {
        navigate("/admin/partners/product/edit/" + data.data.productId);
      }
    })();
  };

  const handleDelete = (evt) => {
    evt.preventDefault();

    (async () => {
      const responce = await fetch(HOST + "/products/" + productId, {
        method: "DELETE",
        headers: {
          token: token,
        },
      });

      const data = await responce.json();

      if (data.status === 202) {
        navigate("/admin/partners/" + data.data.partnerId);
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

              <Button
                className={`${styles.partner__form__button}`}
                variant={"contained"}
                type={"submit"}
                fullWidth
              >
                Save
              </Button>

              {productId ? (
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

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Modal, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import Images from "../../../Components/Lib/Icons/Images";

import styles from "./ProductEdit.module.scss";

const ProductEdit = () => {
  const navigate = useNavigate();
  let { productId, partnerId } = useParams();

  const [token] = useToken();
  const [isOpen, setIsOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  const [params, setParams] = React.useState([]);

  const paramObj = {
    productParamName: "",
    productParamText: "",
    productParamId: params.length ? params.at(-1).productParamId + 1 : 1,
    productId,
  };

  React.useEffect(() => {
    if (productId) {
      (async () => {
        const responce = await fetch(HOST + "/products/" + productId);

        const data = await responce.json();

        if (data.status === 200) {
          setImage(() => data.data.productImage);
          setName(() => data.data.productName);
          setParams(() => data.data.productParams);
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
        setIsOpen(true);
      }
      if (data.status === 202) {
        setIsOpen(true);
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

  const saveParams = () => {
    const result = {
      productId,
    };

    result.params = params.map((param) => {
      if (param.productParamName.length > 0 && param.productParamText.length > 0) {
        return {
          productParamName: param.productParamName,
          productParamText: param.productParamText,
        };
      } else {
        return null;
      }
    });

    (async () => {
      const responce = await fetch(HOST + "/productparams", {
        method: "POST",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      const data = await responce.json();

      if (data.status === 201) {
        setIsOpen(true);
      }
    })();
  };

  return (
    <main className="main">
      <section className={`${styles.product}`}>
        <Modal
          className={`${styles.product__modal}`}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box className={`${styles.product__modal__inner}`}>
            <span>Saved</span>

            <Button
              className={`${styles.product__modal__button}`}
              variant={"contained"}
              type={"submit"}
              onClick={() => setIsOpen(false)}
            >
              ok
            </Button>
          </Box>
        </Modal>

        <div className={`${styles.container} container`}>
          {partnerId && (
            <Button
              className={`${styles.partner__button}`}
              variant={"contained"}
              type={"button"}
              onClick={() => navigate("/admin/partners/" + partnerId)}
            >
              back
            </Button>
          )}

          <form className={`${styles.product__form}`} onSubmit={handleSubmit}>
            <label className={`${styles.product__form__label}`}>
              <div
                className={`${styles.product__form__inner} ${
                  image ? styles["product__form__inner--image"] : ""
                }`}
              >
                {image ? (
                  <img
                    className={`${styles.product__form__image}`}
                    src={image}
                    alt="Select file"
                    width={500}
                    height={500}
                  />
                ) : null}

                <div className={`${styles.product__form__wrapper}`}>
                  <Images />
                  <span>Upload profile image here</span>
                  <span>(JPG, PNG)</span>
                </div>
              </div>

              <input
                className={`${styles.product__form__input} visually-hidden`}
                name="file"
                type="file"
                onChange={(evt) => {
                  const file = evt.target.files[0];
                  const path = (window.URL || window.webkitURL).createObjectURL(file);
                  setImage(path);
                }}
              />
            </label>

            <div className={`${styles.product__form__aside}`}>
              <TextField
                className={`${styles.product__form__input}`}
                name={"name"}
                label={"Name"}
                value={name}
                variant={"outlined"}
                fullWidth
                onChange={(newValue) => setName(newValue.target.value)}
              />

              <Button
                className={`${styles.product__form__button}`}
                variant={"contained"}
                type={"submit"}
                fullWidth
              >
                Save
              </Button>

              {productId ? (
                <Button
                  className={`${styles.product__form__button}`}
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

          <ul className={`${styles.product__params}`}>
            {params.length > 0 &&
              params.map((param) => (
                <li className={`${styles.product__param}`} key={param.productParamId}>
                  <TextField
                    className={`${styles.product__param__input}`}
                    name={"name"}
                    label={"Name"}
                    defaultValue={param.productParamName}
                    variant={"outlined"}
                    onChange={(evt) => {
                      const array = [...params];
                      const data = array.find(
                        (item) => item.productParamId === param.productParamId
                      );
                      data.productParamName = evt.target.value;
                      setParams(array);
                    }}
                  />

                  <TextField
                    className={`${styles.product__param__input}`}
                    name={"text"}
                    label={"Text"}
                    defaultValue={param.productParamText}
                    variant={"outlined"}
                    onChange={(evt) => {
                      const array = [...params];
                      const data = array.find(
                        (item) => item.productParamId === param.productParamId
                      );
                      data.productParamText = evt.target.value;
                      setParams(array);
                    }}
                  />
                </li>
              ))}
          </ul>

          {productId && (
            <div className={`${styles.product__bottom}`}>
              {params.length < 10 && (
                <Button
                  className={`${styles.products__bottom__button}`}
                  variant={"contained"}
                  type={"button"}
                  onClick={() => {
                    const array = [...params];
                    if (params.length === 0) {
                      array.push(paramObj);
                      setParams(array);
                    } else {
                      if (params.length >= 10) return;
                      if (params.at(-1).productParamName === "") return;
                      if (params.at(-1).productParamText === "") return;
                      array.push(paramObj);
                      setParams(array);
                    }
                  }}
                >
                  <Add />
                </Button>
              )}

              <Button
                className={`${styles.products__bottom__button}`}
                variant={"contained"}
                type={"button"}
                onClick={saveParams}
              >
                Save Params
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductEdit;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Select, MenuItem, Modal, Box, TextareaAutosize } from "@mui/material";

import useToken from "../../../Hooks/useToken";

import { HOST } from "../../../config";

import Images from "../../../Components/Lib/Icons/Images";

import styles from "./PostsEdit.module.scss";

const NewsEdit = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const [token] = useToken();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [serviceId, setServiceId] = React.useState("");

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/services");

      const data = await responce.json();

      if (data.status === 200) {
        setServices(() => data.data);
        if (!postId) setServiceId(() => data.data[0].serviceId);
      }
    })();
  }, [postId]);

  React.useEffect(() => {
    if (postId) {
      (async () => {
        const responce = await fetch(HOST + "/news/" + postId);

        const data = await responce.json();

        console.log(data);

        if (data.status === 200) {
          setTitle(() => data.data.newsTitle);
          setDescription(() => data.data.newsDescription);
          setImage(() => data.data.newsImage);
          setServiceId(() => data.data.serviceId);
        }
      })();
    }
  }, [postId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    const file = evt.target.file.files[0];

    formData.append("newsTitle", title);
    formData.append("newsDescription", description);
    formData.append("serviceId", serviceId);
    if (file) formData.append("image", evt.target.file.files[0]);

    (async () => {
      const responce = await fetch(HOST + "/news/" + (postId ? postId : ""), {
        method: postId ? "PUT" : "POST",
        headers: {
          token: token,
        },
        body: formData,
      });

      const data = await responce.json();

      console.log(data);

      if (data.status === postId ? 202 : 201) {
        navigate("/admin/posts/edit/" + data.data.newsId);
        setIsOpen(true);
      }
    })();
  };

  const handleDelete = (evt) => {
    evt.preventDefault();

    (async () => {
      const responce = await fetch(HOST + "/news/" + postId, {
        method: "DELETE",
        headers: {
          token: token,
        },
      });

      const data = await responce.json();

      if (data.status === 202) {
        navigate("/admin/posts");
      }
    })();
  };

  return (
    <main className="main">
      <Modal
        className={`${styles.post__modal}`}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={`${styles.post__modal__inner}`}>
          <span>Saved</span>

          <Button
            className={`${styles.post__modal__button}`}
            variant={"contained"}
            type={"submit"}
            onClick={() => setIsOpen(false)}
          >
            ok
          </Button>
        </Box>
      </Modal>

      <section className={`${styles.post}`}>
        <div className={`${styles.container} container`}>
          <Button
            className={`${styles.post__button}`}
            variant={"contained"}
            type={"button"}
            onClick={() => navigate("/admin/posts")}
          >
            back
          </Button>

          <form className={`${styles.post__form}`} onSubmit={handleSubmit}>
            <label className={`${styles.post__form__label}`}>
              <div
                className={`${styles.post__form__inner} ${
                  image ? styles["post__form__inner--image"] : ""
                }`}
              >
                {image ? (
                  <img
                    className={`${styles.post__form__image}`}
                    src={image}
                    alt="Select file"
                    width={500}
                    height={500}
                  />
                ) : null}

                <div className={`${styles.post__form__wrapper}`}>
                  <Images />
                  <span>Upload profile image here</span>
                  <span>(JPG, PNG)</span>
                </div>
              </div>

              <input
                className={`${styles.post__form__input} visually-hidden`}
                name="file"
                type="file"
                onChange={(evt) => {
                  const file = evt.target.files[0];
                  const path = (window.URL || window.webkitURL).createObjectURL(file);
                  setImage(path);
                }}
              />
            </label>

            <div className={`${styles.post__form__aside}`}>
              <TextField
                className={`${styles.post__form__input}`}
                name={"title"}
                label={"Title"}
                value={title}
                variant={"outlined"}
                fullWidth
                onChange={(newValue) => setTitle(newValue.target.value)}
              />

              <TextareaAutosize
                className={`${styles.post__form__area}`}
                name={"description"}
                label={"Description"}
                value={description}
                variant={"outlined"}
                onChange={(newValue) => setDescription(newValue.target.value)}
              />

              {services.length > 0 && (
                <Select
                  className={`${styles.post__form__input}`}
                  value={serviceId}
                  fullWidth
                  onChange={(evt) => setServiceId(evt.target.value)}
                >
                  {services.map((service) => (
                    <MenuItem key={service.serviceId} value={service.serviceId} label="Age">
                      {service.serviceSlug}
                    </MenuItem>
                  ))}
                </Select>
              )}

              <Button
                className={`${styles.post__form__button}`}
                variant={"contained"}
                type={"submit"}
                fullWidth
              >
                Save
              </Button>

              {postId ? (
                <Button
                  className={`${styles.post__form__button}`}
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

export default NewsEdit;

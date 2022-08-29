import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { HOST } from "../../config";

import styles from "./AdminPosts.module.scss";

const AdminNews = () => {
  const [news, setNews] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/news");

      const data = await responce.json();

      if (data.status === 200) {
        setNews(() => data.data);
      }
    })();
  }, []);

  return (
    <section className={`${styles.posts}`}>
      <div className={`${styles.container} container`}>
        <Button
          className={`${styles.posts__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin")}
        >
          back
        </Button>

        <Button
          className={`${styles.posts__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/posts/create")}
        >
          create
        </Button>

        <ul className={`${styles.posts__list}`}>
          {news.length > 0 &&
            news.map((item) => (
              <li className={`${styles.post}`} key={item.newsId}>
                <img
                  className={`${styles.post__image}`}
                  src={item.newsImage}
                  alt=""
                  width={240}
                  height={180}
                />

                <h3 className={`${styles.post__heading}`}>{item.newsTitle}</h3>

                <div className={`${styles.post__buttons}`}>
                  <Button
                    className={`${styles.post__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/posts/edit/" + item.newsId)}
                  >
                    Edit
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminNews;

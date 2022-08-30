import React from "react";
import { Link } from "react-router-dom";
import Parse from "html-react-parser";

import { HOST } from "../../config";

import Loading from "../Lib/Loading/Loading";
import Refresh from "../Lib/Icons/Refresh";

import styles from "./News.module.scss";

const News = ({ serviceId }) => {
  const [news, setNews] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(true);

  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const normalizeTime = (time) => {
    const date = new Date(Date.parse(time));

    const day = String(date.getDate()).padStart(2, 0);
    let month = date.toLocaleString("en-us", { month: "short" });
    const year = String(date.getFullYear()).padStart(4, 0);

    return `${day} ${month} ${year}`;
  };

  const getNews = async (id) => {
    setLoading(true);
    setButtonLoading(false);
    setNews([]);

    try {
      if (id > 0) {
        const responce = await fetch(HOST + "/services/" + id + "/news");

        const data = await responce.json();

        if (data.status === 404) {
          setIsVisible(false);
        }

        if (data.status === 200 && data.data.length > 0) {
          setNews(() => data.data);

          setLoading(false);
          setButtonLoading(false);
        } else {
          setNews([]);
          setLoading(false);
          setButtonLoading(true);
        }
      } else {
        const responce = await fetch(HOST + "/news");

        const data = await responce.json();

        if (data.status === 200 && data.data.length > 0) {
          setNews(() => data.data);

          setLoading(false);
          setButtonLoading(false);
        } else {
          setNews([]);
          setLoading(false);
          setButtonLoading(true);
        }
      }
    } catch (error) {
      setLoading(false);
      setButtonLoading(true);
    }
  };

  React.useEffect(() => {
    getNews(serviceId);
  }, [serviceId]);

  return (
    isVisible && (
      <section className={`${styles.news}`}>
        <div className={`${styles.news} container`}>
          <h2 className={`${styles.news__heading}`}>News</h2>

          <ul className={`${styles.news__list}`}>
            {news.length > 0 &&
              news.map((item) => (
                <li className={`${styles.news__item}`} key={item.newsId}>
                  <img
                    className={`${styles.news__item__image}`}
                    src={item.newsImage}
                    alt=""
                    width={400}
                    height={300}
                  />

                  <div className={`${styles.news__item__inner}`}>
                    <h3 className={`${styles.news__item__title}`} title={item.newsTitle}>
                      {item.newsTitle}
                    </h3>

                    <p className={`${styles.news__item__text}`}>{Parse(item.newsDescription)}</p>

                    <div className={`${styles.news__item__bottom}`}>
                      <Link className={`${styles.news__item__link}`} to={"/news/" + item.newsId}>
                        read more
                      </Link>

                      <time>{normalizeTime(item.createAt)}</time>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          {loading && (
            <div className={styles.news__loading}>
              <div className={styles.news__loading__load}>
                <Loading />
              </div>
            </div>
          )}

          {buttonLoading && (
            <div className={styles.news__loading}>
              <button
                className={styles.news__loading__refresh}
                onClick={() => {
                  getNews(serviceId);
                }}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      </section>
    )
  );
};
export default News;

import React from "react";
import Parse from "html-react-parser";

import { HOST } from "../../../config";

import styles from "./News.module.scss";

const News = () => {
  const [news, setNews] = React.useState([]);

  const normalizeTime = (time) => {
    const date = new Date(Date.parse(time));

    const day = String(date.getDate()).padStart(2, 0);
    let month = date.toLocaleString('en-us', { month: 'short' }); /* June */
    const year = String(date.getFullYear()).padStart(4, 0);

    return `${day} ${month} ${year}`;
  };

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
                    <a className={`${styles.news__item__link}`} href="#l">
                      read more
                    </a>

                    <time>{normalizeTime(item.createAt)}</time>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default News;

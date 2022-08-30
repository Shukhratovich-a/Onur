import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { HOST } from "../../../config";

import NewsSect from "../../../Components/News/News";

import Loading from "../../../Components/Lib/Loading/Loading";
import Refresh from "../../../Components/Lib/Icons/Refresh";

import styles from "./News.module.scss";

const News = () => {
  const { newsId } = useParams();

  const [news, setNews] = React.useState([]);
  const [newsDescription, setNewsDescription] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const getNews = async (id) => {
    setLoading(true);
    setButtonLoading(false);
    setNews([]);

    try {
      const response = await fetch(HOST + "/news/" + id);

      const data = await response.json();

      if (data.status === 200 && data.data) {
        setNewsDescription(
          data.data.newsDescription.split("\n").filter((description) => description.length > 1)
        );
        setNews(data.data);

        setLoading(false);
        setButtonLoading(false);
      } else {
        setLoading(false);
        setButtonLoading(true);
      }
    } catch (error) {
      setLoading(false);
      setButtonLoading(true);
    }
  };

  React.useEffect(() => {
    getNews(newsId);
  }, [newsId]);

  return (
    <main>
      <section className={styles.news}>
        <div className={`container ${styles.container}`}>
          {news.newsId && (
            <div className={`${styles.news__inner}`}>
              <h2 className={styles.news__heading}>{news.newsTitle}</h2>

              <img
                className={`${styles.news__image}`}
                src={news.newsImage}
                alt=""
                width={1000}
                height={500}
              />

              {newsDescription.length > 0 && (
                <div className={styles.news__inner}>
                  {newsDescription.map((text, index) => (
                    <p className={styles.news__description} key={index}>
                      {parse(String(text))}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

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
                  getNews(newsId);
                }}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      </section>

      <NewsSect />
    </main>
  );
};

export default News;

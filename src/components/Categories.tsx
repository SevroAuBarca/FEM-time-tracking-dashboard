import React from "react";
import styles from "../App.module.scss";
import { AppProps } from "../TypeScript/types.modules";

export const Categories = ({ data, time, timeframe }: AppProps) => {
  return (
    <>
      {data?.map(({ title, color, image, timeframes }) => (
        <section className={`${styles.card} ${styles[color]}`}>
          <img
            className={`${styles.card_icon} `}
            src={image}
            alt="icon image"
          />
          <article className={styles.card_data}>
            <div className={styles.card_flex}>
              <h2 className={styles.card_title}>{title}</h2>
              <img
                className={`${styles.card_states} ${styles.card_states_img}`}
                src="../images/icon-ellipsis.svg"
                alt="elipsis"
              />
            </div>
            <div className={styles.card_flex}>
              <h3 className={styles.card_hours}>
                {timeframes[timeframe]["current"]}hrs
              </h3>
              <p className={`${styles.card_states} ${styles.card_annuary}`}>
                Last {time} - {timeframes[timeframe]["previous"]}hrs
              </p>
            </div>
          </article>
        </section>
      ))}
    </>
  );
};

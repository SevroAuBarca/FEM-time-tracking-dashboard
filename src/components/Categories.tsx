import React from "react";
import styles from "../App.module.scss";
import { AppProps } from "../TypeScript/types.modules";
import icon from "../images/icon-ellipsis.svg";
import { imgs } from "../server/utils";

export const Categories = ({ data, time, timeframe }: AppProps) => {
  return (
    <>
      {data?.map(({ title, color, timeframes }, index) => (
        <section key={title} className={`${styles.card} ${styles[color]}`}>
          <img
            className={`${styles.card_icon} `}
            src={imgs[index]}
            alt="icon image"
          />
          <article className={styles.card_data}>
            <div className={styles.card_flex}>
              <h2 className={styles.card_title}>{title}</h2>
              <img
                className={`${styles.card_states} ${styles.card_states_img}`}
                src={icon}
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

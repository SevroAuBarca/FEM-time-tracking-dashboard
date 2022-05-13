import React from "react";
import styles from "../App.module.scss";
import { AppProps } from "../TypeScript/types.modules";
import img from "../images/image-jeremy.png";

export const Profile = ({ timeframe, handleClick }: AppProps) => {
  return (
    <section className={`${styles.card_profile} ${styles.card_data_profile}`}>
      <div className={styles.card_article_menu}>
        <p
          onClick={(e) => {
            handleClick?.(e, "Day");
          }}
          className={` ${timeframe === "daily" && styles.active} ${
            styles.menu_hv
          } `}
        >
          Daily
        </p>
        <p
          onClick={(e) => handleClick?.(e, "Week")}
          className={` ${timeframe === "weekly" && styles.active} ${
            styles.menu_hv
          } `}
        >
          Weekly
        </p>
        <p
          onClick={(e) => handleClick?.(e, "Month")}
          className={` ${timeframe === "monthly" && styles.active} ${
            styles.menu_hv
          } `}
        >
          Monthly
        </p>
      </div>
      <article className={`${styles.card_data} ${styles.card_article}`}>
        <div className={styles.card_img}>
          <img
            className={styles.card_profile_img}
            src={img}
            alt="profile image"
          />
        </div>
        <div className={styles.card_article_data}>
          <p className={styles.card_article_p}>Report for</p>
          <h1 className={styles.card_article_h1}>Jeremy Robson</h1>
        </div>
      </article>
    </section>
  );
};

export type tf = "daily" | "weekly" | "monthly";
export type time = "Day" | "Week" | "Month";

export interface funcion {
  (e: React.MouseEvent<HTMLElement, MouseEvent>, text: time): void;
}

export type AppProps = {
  data?: dataProps[];
  time?: time;
  timeframe: tf;
  handleClick?: funcion;
};

export type dataProps = {
  title: string;
  color: string;
  image: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
};

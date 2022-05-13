import styles from "./App.module.scss";
import { Categories } from "./components/Categories";
import { Profile } from "./components/Profile";
import { useData } from "./hook/useData";

function App() {
  const { data, time, timeframe, handleClick } = useData();

  return (
    <div className={styles.app}>
      <main className={styles.grid}>
        <Profile timeframe={timeframe} handleClick={handleClick} />
        <Categories data={data} time={time} timeframe={timeframe} />
      </main>
    </div>
  );
}

export default App;

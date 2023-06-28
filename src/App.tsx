import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.screen}>
      <p className={styles.result}>RESULT</p>
      <p className={styles.input}>Calculated expression</p>
      <div className={styles.keyboard}>Keyboard</div>
    </div>
  );
}

export default App;

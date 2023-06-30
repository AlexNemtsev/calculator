import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.displays}>
        <div className={styles.result}>RESULT</div>
        <div className={styles.input}>Calculated expression</div>
      </div>
      <div className={styles.keyboard}>Keyboard</div>
    </>
  );
}

export default App;

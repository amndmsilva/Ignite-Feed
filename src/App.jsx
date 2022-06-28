import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

import styles from "./App.module.css";
import "./Global.css";
import Post from "./component/Post";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;

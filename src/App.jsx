import Header from './component/Header'
import Sidebar from './component/Sidebar'

import styles from './App.module.css'
import './Global.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        </main>
      </div>
    </>
  )
}

export default App

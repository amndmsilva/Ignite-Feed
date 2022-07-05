import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

import styles from "./App.module.css";
import "./Global.css";
import Post from "./component/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/amndmsilva.png",
      name: "Amanda Santos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishetAt: new Date("2022-06-15 20:10:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishetAt: new Date("2022-06-20 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishetAt={post.publishetAt}
            />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

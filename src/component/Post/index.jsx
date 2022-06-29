import Avatar from '../Avatar';
import Comment from "../Comment";
import styles from "./Post.module.css";

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar hasBorder src="http://github.com/amndmsilva.png"/>
          <dir className={styles.authorInfo}>
            <strong>Amanda Santos</strong>
            <span>Web Developer</span>
          </dir>
        </div>

        <time title="11 de maio às 08:13" dayeTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉<a> jane.design/doctorcare</a>
        </p>

        <p>
          <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentLis}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alice in Wonderland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/"><h1 className={styles.title}>
          Story time
        </h1></Link>

        <div className={styles.grid}>
          <Link href="/alice-in-wonderland" className={styles.card}>
            <h3>Alice in Wonderland &rarr;</h3>
            <p>The story of a young girl named Alice who falls through a rabbit hole into wonderland.</p>
          </Link>

          <Link href="/the-three-musketeers" className={styles.card}>
            <h3>The Three Musketeers &rarr;</h3>
            <p>Recounts the adventures of a young man named d'Artagnan and the King's musketeers. </p>
          </Link>
        </div>
        <h3>Alice in wonderland</h3>
        <p className={styles.storytext}>
        Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?'
        </p>
        
      </main>

      <footer>
        <a
          href="https://asabharwal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/ampersand-filled.svg" alt="Ampersand" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

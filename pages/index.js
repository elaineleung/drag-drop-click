import Head from 'next/head';
import UploadImage from '../components/UploadImage';

import styles from '../styles/Home.module.css';
import dropFileReducer from '../store/reducer.js';

export default function Home() {
  const [data, dispatch] = useReducer(dropFileReducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: []
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Drag, Drop, Click</h1>
        <UploadImage data={data} dispatch={dispatch} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}

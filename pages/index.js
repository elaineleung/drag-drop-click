import { useReducer } from "react";

import Head from "next/head";
import UploadImage from "../components/UploadImage";

import styles from "../styles/Home.module.css";
import { dropFileReducer } from "../store/reducer.js";

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
        <div className={styles.main__container}>
          <h1 className={styles.title}>Drag, Drop, Click</h1>
          <UploadImage data={data} dispatch={dispatch}>
            <p>
              Drag and drop your image file here,{" "}
              <span>or click to select file</span>
            </p>
          </UploadImage>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>

          <a>
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>

          <a>
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>
        </div>
      </main>
    </>
  );
}
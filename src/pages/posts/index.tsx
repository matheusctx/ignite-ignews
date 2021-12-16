import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>

          <a href="#">
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>

          <a href="#">
            <time>15 de dezembro de 2021</time>
            <strong>Create a Monorepo</strong>
            <p>In this guide, you will learn how to create a Monorepo</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}
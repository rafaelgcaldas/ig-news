import Head from "next/head";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn</strong>
            <p>Creating a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn</strong>
            <p>Creating a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn</strong>
            <p>Creating a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn</strong>
            <p>Creating a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn a Monorepo with Lerna & Yarn</p>
          </a>
        </div>
      </main>
    </>
  )
}
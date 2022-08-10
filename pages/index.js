import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="ninjas list" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            eligendi soluta a voluptas esse. Ipsum saepe laudantium fugit nulla
            consequatur voluptate aspernatur, veritatis cupiditate perspiciatis
            nesciunt est perferendis, quas aliquid consectetur atque quidem!
            Eaque?
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            incidunt fuga deleniti nihil officia, aliquid dolor. Tempora tempore
            quam, adipisci a eligendi autem deleniti?
          </p>
        </div>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

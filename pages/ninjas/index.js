import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninjas List</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja, index) => (
          <Link href={`/ninjas/${ninja.id}`} key={index}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;

// pages/index.js
import Head from 'next/head';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Simple Next.js App</title>
      </Head>
      <h1>Hello, Next.js!</h1>
      <p>This is a simple Next.js app.</p>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}></div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import ChatView from "../components/ChatView";
import ConversationList from "../components/ConversationList";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  );
};

export default Home;

import styles from "../styles/chatView.module.css";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
import { useContext } from "react";
import { DiscordContext } from "../context/context";
import MessageCard from "./MessageCard";

const ChatView = () => {
  const { state } = useContext(DiscordContext);

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value: any, index: number) => {
      const _value = JSON.stringify(value);

      return (
        index ===
        state.messages.findIndex((obj: any) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });

    return uniqueArray;
  };
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messagesContainer}>
        {formattedMessagesArray().map(
          (
            message: { avatar: any; sender: any; createdAt: any; content: any },
            index: any
          ) => (
            <MessageCard
              key={index}
              avatar={message.avatar}
              sender={message.sender}
              timestamp={message.createdAt}
              content={message.content}
            />
          )
        )}
      </div>
      <MessageForm />
    </div>
  );
};

export default ChatView;

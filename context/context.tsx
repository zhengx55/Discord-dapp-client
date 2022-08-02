/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import {
  createContext,
  useState,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import Gun from "gun";

const gun = Gun(["https://zx-gun-server.herokuapp.com/"]);

interface MessageState {
  messages: Array<string>;
}

enum MessageStateKind {
  CLEAR = "clear",
  ADD = "add",
}

interface MessageAction {
  type: MessageStateKind;
  payload: any;
}

const initialState = { messages: [] };

const reducer = (state: MessageState, action: MessageAction): MessageState => {
  const { type, payload } = action;
  switch (type) {
    case MessageStateKind.ADD:
      return { messages: [] };
    case MessageStateKind.CLEAR:
      return { messages: [...state.messages, payload] };
    default:
      return state;
  }
};

export const DiscordContext = createContext<any>({});

const DiscordProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("Message...");
  const [messageText, setMessageText] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    checkConnected();
  }, []);

  useEffect(() => {
    setRoomName(router.query.name as string);
    dispatch({ type: MessageStateKind.ADD, payload: {} });
    setPlaceholder(`Message ${router.query.name}`);
    setMessageText("");
    getMessages();
  }, [router.query]);

  const getMessages = () => {
    const _name = router.query.name as string;
    const _roomId = router.query.id;
    const messagesRef = gun.get(_name);

    messagesRef.map().once((message: any) => {
      dispatch({
        type: MessageStateKind.ADD,
        payload: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
        },
      });
    });
  };

  const createUserAccount = async (account: string) => {
    const data: { userAddress: string } = { userAddress: account };
    if (!window.ethereum) return;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkConnected = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DiscordContext.Provider
      value={{
        currentAccount,
        roomName,
        setRoomName,
        placeholder,
        messageText,
        setMessageText,
        state,
        gun,
        connectWallet,
        currentUser,
      }}
    >
      {children}
    </DiscordContext.Provider>
  );
};

export default DiscordProvider;

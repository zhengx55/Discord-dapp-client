import "../styles/globals.css";
import type { AppProps } from "next/app";
import DiscordProvider from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  );
}

export default MyApp;

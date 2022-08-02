import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/dmCard.module.css";

interface DmCardProps {
  name: string;
  status: any;
  avatar: any;
  id: number;
}

export default function DmCard({ name, status, avatar, id }: DmCardProps) {
  const router = useRouter();
  const changeUrl = () => {
    router.push("");
  };
  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          height={48}
          width={48}
          src={avatar}
          className={styles.dmAvatar}
          alt={name}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  );
}

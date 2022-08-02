import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/roomAvatar.module.css";

interface RoomAvatarProps {
  id: number;
  avatar: any;
  name: string;
}

export default function RoomAvatar({ id, avatar, name }: RoomAvatarProps) {
  const router = useRouter();
  const changeUrl = () => {
    router.push(`?channel=${id}%name=${name}`);
  };
  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.roomAvatar}>
        <Image
          src={avatar}
          className={styles.roomAvatarImage}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  );
}

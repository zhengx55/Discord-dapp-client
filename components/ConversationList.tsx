import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/conversationList.module.css";
import friends from "../assets/icons/friends.svg";
import nitro from "../assets/icons/nitro.svg";

export default function ConversationList() {
  const [dms, setDms] = useState([]);

  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder="Find or start a conversation" />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt="friends"
            />
          </div>
          <p>Friends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={nitro}
              className={styles.svg}
              alt="friends"
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {/* {dms.map((dm, index) => (
          <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={
              dm.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"
            }
            status="online"
          />
        ))} */}
      </div>
    </div>
  );
}

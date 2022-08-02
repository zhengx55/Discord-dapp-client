import { useRouter } from "next/router";
import React, { useState } from "react";

import avatar1 from "../assets/avatar1.webg";

const dummyChannels = [
  {
    id: 1,
    name: "general",
  },
];

function Sidebar() {
  const router = useRouter();
  const [channels, setChannels] = useState([]);
  return <div>Sidebar</div>;
}

export default Sidebar;

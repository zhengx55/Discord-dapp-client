import { useRouter } from "next/router";
import { createContext, useState, useEffect, useReducer } from "react";
import Gun from "gun";

const gun = Gun(["https://zx-gun-server.herokuapp.com/"]);

export const DisCordContext = createContext();

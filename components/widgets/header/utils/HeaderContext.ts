import { createContext } from "react";
import useHeaderState from "./useHeaderState";

export const HeaderContext = createContext<ReturnType<typeof useHeaderState> | undefined>(undefined)
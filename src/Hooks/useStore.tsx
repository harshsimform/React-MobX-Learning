import { useContext } from "react";
import { rootStoreContext } from "../MobX";
import { enableLogging } from "mobx-logger";

const environment = import.meta.env;

if (environment.VITE_APP_MODE === "development") {
  enableLogging();
}

// custom hook to access store
export const useStore = () => useContext(rootStoreContext);

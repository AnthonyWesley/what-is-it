import { UserType } from "../context/types";

export default function useLocalStorage() {
  const setLocalStorage = (user: UserType[]) =>
    localStorage.setItem("U", JSON.stringify(user));

  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("U") as string) ?? [];

  return {
    getLocalStorage,
    setLocalStorage,
  };
}

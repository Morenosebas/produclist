import { createContext } from "react";
export function loadStorage(user) {
  try {
    const serializedState = sessionStorage.getItem("user");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw new Error("Error al cargar el usuario del sessionStorage");
  } finally {
    console.log("loadStorage ejecutado");
  }
}
export function saveStorage(user) {
  try {
    const serializedState = JSON.stringify({ user }); // solo guardar el estado del slice "session"
    console.log("user: ", serializedState);
    sessionStorage.setItem("user", serializedState);
  } catch {
    throw new Error("Error al guardar el usuario en el sessionStorage");
  } finally {
    console.log("saveStorage ejecutado");
  }
}

const initSession = loadStorage()?.user || {
  username: "",
  products: [],
};

export const UserContext = createContext(initSession);

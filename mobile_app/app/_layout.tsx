import { ChildProvider } from "../contexts/ChildContext"; // dostosuj ścieżkę
import { Slot } from "expo-router"; 

export default function Layout() {
  return (
    <ChildProvider>
      <Slot />
    </ChildProvider>
  );
}
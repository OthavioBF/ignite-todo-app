import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TaskList } from "./src/components/TaskList";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <>
      <Header />
      <TaskList />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

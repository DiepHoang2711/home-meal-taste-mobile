import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import LoginScreen from "./src/screens/Login/LoginScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
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

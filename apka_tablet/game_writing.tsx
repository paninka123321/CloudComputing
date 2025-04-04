import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Gra3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To jest gra pisanie</Text>
      <Button title="Wróć na ekran główny" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

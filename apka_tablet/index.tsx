import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [childId, setChildId] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.label}>Podaj ID dziecka:</Text>
        <TextInput
          style={styles.input}
          placeholder="np. 45"
          value={childId}
          onChangeText={setChildId}
          placeholderTextColor="#aaa"
        />
      </View>

      <Text style={styles.title}>Gry 🧨:</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/game_shapes")}>
        <Text style={styles.buttonText}>🟢🟦🔶</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/game_emotions")}>
        <Text style={styles.buttonText}>😆🤪🤯</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/game_writing")}>
        <Text style={styles.buttonText}>📋🖍️</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#444",
    marginRight: 8,
  },
  input: {
    height: 32,
    width: 80,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
  },
});

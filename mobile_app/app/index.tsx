import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { useChild } from "../contexts/ChildContext";

export default function HomeScreen() {
  const router = useRouter();
  const { childId, setChildId } = useChild();
  const [localId, setLocalId] = useState(childId || "1");
  const [editing, setEditing] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    setLocalId(childId || "1");

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, [childId]);

  const saveId = () => {
    setChildId(localId.trim());
    setEditing(false);
    Keyboard.dismiss();
  };

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.topBar}>
        {!editing ? (
          <TouchableOpacity onPress={() => setEditing(true)} style={styles.idDisplay}>
            <Text style={styles.label}>👶 ID dziecka: {childId} ✏️</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.editRow}>
            <TextInput
              style={styles.input}
              placeholder="np. 45"
              value={localId}
              onChangeText={setLocalId}
              autoFocus
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={saveId} style={styles.saveButton}>
              <Text style={styles.saveText}>✔️</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Animated.Text style={[styles.title, { transform: [{ translateY: slideAnim }] }]}>
        Wybierz grę!
      </Animated.Text>

      <AnimatedTouchable
        style={[styles.button, { backgroundColor: "#FFD1DC", transform: [{ translateY: slideAnim }] }]}
        onPress={() => router.push("/game_shapes")}
      >
        <Text style={styles.buttonText}>Ekspert kształtów</Text>
      </AnimatedTouchable>

      <AnimatedTouchable
        style={[styles.button, { backgroundColor: "#C5E1A5", transform: [{ translateY: slideAnim }] }]}
        onPress={() => router.push("/game_emotions")}
      >
        <Text style={styles.buttonText}>Emocje</Text>
      </AnimatedTouchable>

      <AnimatedTouchable
        style={[styles.button, { backgroundColor: "#81D4FA", transform: [{ translateY: slideAnim }] }]}
        onPress={() => router.push("/game_writing")}
      >
        <Text style={styles.buttonText}>Rysowanie</Text>
      </AnimatedTouchable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: "#FFF7F0",
  },
  topBar: {
    marginBottom: 20,
    marginTop: 50,
  },
  idDisplay: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#ECECEC",
  },
  label: {
    fontSize: 16,
    color: "#444",
  },
  input: {
    height: 40,
    width: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    padding: 18,
    borderRadius: 16,
    marginVertical: 10,
    width: 280,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  editRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: "#DFFFD6",
    borderRadius: 10,
  },
  saveText: {
    fontSize: 20,
  },
});

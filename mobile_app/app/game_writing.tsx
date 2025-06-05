import { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import SignatureScreen from "react-native-signature-canvas";
import { useChild } from "../contexts/ChildContext";
import { sendWritingsData } from "../utils/api";

const { width, height } = Dimensions.get("window");

export default function Gra3() {
  const router = useRouter();
  const signatureRef = useRef<any>(null);
  const { childId } = useChild();

  const [startTime, setStartTime] = useState<number | null>(null);

  const words = ["statek", "samolot", "piłka", "kredka", "astronauta", "słoń", "królewna", "delfin", "hipopotam", "zebra", "listonosz"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    const parsedId = parseInt(childId);
    if (!childId || isNaN(parsedId)) {
      Alert.alert("Błąd", "Brak poprawnego ID dziecka. Wróć do ekranu głównego.");
      router.push("/");
      return;
    }
    
    setStartTime(Date.now());
  }, []);

  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  const handleDone = async (signature: string) => {
    if (!childId || isNaN(parseInt(childId))) {
      Alert.alert("Błąd", "Brak poprawnego ID dziecka.");
      return;
    }

    const endTime = Date.now();
    const durationSec = Math.round((endTime - startTime!) / 1000);

    try {
      await sendWritingsData({
        student: parseInt(childId),
        imageUri: signature, // Base64 bez dodatkowego przetwarzania
        time: durationSec,
      });

      console.log("Wysłano dane rysowania dla " + childId);
      router.push("/");
    } catch (error) {
      console.error("Błąd przy wysyłaniu rysunku:", error);
      Alert.alert("Błąd", "Nie udało się wysłać danych.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.word_small}>Narysuj:</Text>
      <Text style={styles.word}>{randomWord}</Text>

      <SignatureScreen
        ref={signatureRef}
        onOK={handleDone}
        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
        descriptionText=""
        autoClear={false}
        backgroundColor="#f5f5f5"
      />

      <View style={styles.buttons}>
        <Button title="Od nowa" onPress={handleClear} />
        <Button title="Gotowe! 🎉" onPress={() => signatureRef.current?.readSignature()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  word_small: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    fontStyle: "italic",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});


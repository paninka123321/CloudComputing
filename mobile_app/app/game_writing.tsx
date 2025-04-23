import { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { useRouter } from "expo-router";
import SignatureScreen from "react-native-signature-canvas";
import { useChild } from "../contexts/ChildContext";

const { width, height } = Dimensions.get("window");

export default function Gra3() {
  const router = useRouter();
  const signatureRef = useRef<any>(null);
  const { childId } = useChild();

  const [startTime, setStartTime] = useState<number | null>(null);

  const words = ["statek", "samolot", "piłka", "kredka", "astronauta", "słoń", "królewna", "delfin", "hipopotam", "zebra", "listonosz"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  const handleDone = (signature: string) => {
    const endTime = Date.now();
    const durationSec = ((endTime - startTime!) / 1000).toFixed(2);

    const results = [childId, randomWord, signature, durationSec];
    console.log("Wynik rysowania:", results);

    // TODO: tu można dodać zapis do pliku lub wysłanie do serwera, np. jako PNG
    // np. zapis base64 jako obraz PNG do lokalnego pliku

    router.push("/");
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

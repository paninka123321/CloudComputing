import SignatureScreen from "react-native-signature-canvas";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function Gra3() {
  const router = useRouter();
  const signatureRef = useRef<any>(null);

  const words = ["statek", "liczba", "piłka", "kredka"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  const handleClear = () => {
    signatureRef.current?.clearSignature();
  };

  const handleDone = () => {
    console.log("narysowano");
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{randomWord}</Text>

      <SignatureScreen
        ref={signatureRef}
        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
        descriptionText=""
        autoClear={false}
        backgroundColor="#f5f5f5"
      />

      <View style={styles.buttons}>
        <Button title="Od nowa" onPress={handleClear} />
        <Button title="Gotowe! 🎉" onPress={handleDone} />
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

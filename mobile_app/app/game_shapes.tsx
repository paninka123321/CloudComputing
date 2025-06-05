import { useState, useEffect } from "react";
import { useChild } from "../contexts/ChildContext"; 
import { sendShapesData } from "../utils/api";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, Alert } from "react-native";
import { useRouter } from "expo-router";

const shapes = {
  trojkat: [require("../assets/images/shapes/trojkat1.png")],
  kwadrat: [
    require("../assets/images/shapes/kwadrat1.png"),
    require("../assets/images/shapes/kwadrat2.png"),
    require("../assets/images/shapes/kwadrat3.png"),
    require("../assets/images/shapes/kwadrat4.png"),
  ],
  kolko: [
    require("../assets/images/shapes/kolko1.png"),
    require("../assets/images/shapes/kolko2.png"),
  ],
  zle: [
    require("../assets/images/shapes/zle1.png"),
    require("../assets/images/shapes/zle2.png"),
    require("../assets/images/shapes/zle3.png"),
    require("../assets/images/shapes/zle4.png"),
    require("../assets/images/shapes/zle5.png"),
    require("../assets/images/shapes/zle6.png"),
    require("../assets/images/shapes/zle7.png"),
  ],
};

const shapeNames = {
  trojkat: "trójkąt",
  kwadrat: "kwadrat",
  kolko: "kółko",
} as const;

type ShapeKey = keyof typeof shapeNames;

const getRandom = <T,>(arr: T[] | undefined, label = "unknown"): T => {
  if (!arr || arr.length === 0) {
    throw new Error(`getRandom called with empty array [${label}]`);
  }
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function Gra1() {
  const { childId } = useChild();
  const router = useRouter();
  const [round, setRound] = useState(1);
  const [target, setTarget] = useState<ShapeKey>("trojkat");
  const [images, setImages] = useState<ImageSourcePropType[]>([]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [dataSent, setDataSent] = useState(false); // Flaga zapobiegająca wielokrotnemu wysyłaniu danych

  useEffect(() => {
    const parsedId = parseInt(childId);
    if (!childId || isNaN(parsedId)) {
      Alert.alert("Błąd", "Brak poprawnego ID dziecka. Wróć do ekranu głównego.");
      router.push("/");
      return;
    }
    
    setStartTime(Date.now());
    startNewRound();
  }, []);

  const startNewRound = () => {
    const allKeys: ShapeKey[] = ["trojkat", "kwadrat", "kolko"];
    const newTarget = getRandom(allKeys);
    setTarget(newTarget);

    const correctImage = getRandom(shapes[newTarget], newTarget);

    const wrongShapeKeys = allKeys.filter(k => k !== newTarget);
    const wrongImages = [
      ...wrongShapeKeys.flatMap(k => shapes[k]),
      ...shapes.zle,
    ];

    const wrongs: ImageSourcePropType[] = [];
    while (wrongs.length < 3) {
      const pick = getRandom(wrongImages);
      if (!wrongs.includes(pick)) wrongs.push(pick);
    }

    const all = [...wrongs, correctImage].sort(() => Math.random() - 0.5);
    setImages(all);
  };

  const handleRoundCompletion = async (results: number[]) => {
    if (!startTime || dataSent) return; // Zapobiega wielokrotnemu wysyłaniu danych

    try {
      const durationSec = Math.round((Date.now() - startTime) / 1000);
      const correct = results.filter(r => r === 1).length;
      const incorrect = results.filter(r => r === 0).length;

      await sendShapesData({
        student: Number(childId),
        correct,
        incorrect,
        time: durationSec,
      });

      console.log(`Wyniki shapes wysłane dla ${childId}`);
      setDataSent(true); // Ustaw flagę, aby dane nie były wysyłane ponownie
      setShowCongrats(true); // Wyświetl komunikat "Brawo, gotowe!"
      
      // Po sekundzie przekierowanie do menu
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("Błąd wysyłania shapes:", error);
      Alert.alert("Błąd", "Nie udało się wysłać wyników shapes");
      router.push("/");
    }
  };

  const handlePress = async (img: ImageSourcePropType) => {
    const uri = Image.resolveAssetSource(img).uri;
    const isCorrect = uri.includes(target);
    const updatedResults = [...results, isCorrect ? 1 : 0];
    setResults(updatedResults);

    // Przejdź do kolejnej rundy niezależnie od poprawności odpowiedzi
    if (round >= 6) {
      await handleRoundCompletion(updatedResults);
    } else {
      setRound(prev => prev + 1);
      startNewRound();
    }
  };

  if (showCongrats) {
    return (
      <View style={styles.centered}>
        <Text style={styles.bigText}>Brawo, gotowe! 🎉</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title_small}>Znajdź:</Text>
      <Text style={styles.title}>{shapeNames[target]}</Text>
      <Text style={styles.round}>Runda: {round} / 6</Text>
      <View style={styles.grid}>
        {images.map((img, idx) => (
          <TouchableOpacity key={idx} onPress={() => handlePress(img)}>
            <Image source={img} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title_small: {
    fontSize: 18,
    fontStyle: "italic",
  },
  round: {
    fontSize: 18,
    marginBottom: 20,
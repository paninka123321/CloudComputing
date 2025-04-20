import { useState, useEffect } from "react";
import { useChild } from "../contexts/ChildContext"; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
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

  useEffect(() => {
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

  const handlePress = (img: ImageSourcePropType) => {
    const uri = Image.resolveAssetSource(img).uri;
    const isCorrect = uri.includes(target);
    const updatedResults = [...results, isCorrect ? 1 : 0];
    setResults(updatedResults);

    if (round >= 6) {
      if (startTime !== null) {
        const durationMs = Date.now() - startTime;
        const durationSec = Number((durationMs / 1000).toFixed(2));
        const finalResults = [childId, ...updatedResults, durationSec];
        console.log("Wyniki gry w kształty:", finalResults);
      }

      setShowCongrats(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
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
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

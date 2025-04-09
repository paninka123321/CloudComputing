import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated } from "react-native";
import { useNavigate } from "react-router-dom";

const emotions = {
  happy: [
    require("../assets/images/emojis/happy1.png"),
    require("../assets/images/emojis/happy2.png"),
    require("../assets/images/emojis/happy3.png"),
    require("../assets/images/emojis/happy4.png"),
    require("../assets/images/emojis/happy5.png"),
  ],
  sad: [
    require("../assets/images/emojis/sad1.png"),
    require("../assets/images/emojis/sad2.png"),
    require("../assets/images/emojis/sad3.png"),
    require("../assets/images/emojis/sad4.png"),
    require("../assets/images/emojis/sad5.png"),
  ],
  angry: [
    require("../assets/images/emojis/angry1.png"),
    require("../assets/images/emojis/angry2.png"),
    require("../assets/images/emojis/angry3.png"),
    require("../assets/images/emojis/angry4.png"),
    require("../assets/images/emojis/angry5.png"),
  ],
};

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default function Gra2() {
  const navigate = useNavigate(); 
  const [round, setRound] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  const [currentSet, setCurrentSet] = useState({
    happy: getRandom(emotions.happy),
    sad: getRandom(emotions.sad),
    angry: getRandom(emotions.angry),
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animate = (toValue: number, duration = 300) =>
    new Promise((resolve) => {
      Animated.timing(fadeAnim, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start(() => resolve(true));
    });

    const handleChoice = async (choice: "happy" | "sad" | "angry") => {
      await animate(0); // fade-out
      setAnswers((prev) => [...prev, choice]);
    
      if (round >= 4) {
        let finalAnswers = [...answers, choice];
        if (startTime !== null) {
          const timeSec = ((Date.now() - startTime) / 1000).toFixed(2);
          finalAnswers = [...finalAnswers, `${timeSec}`];
        }
        console.log("Wyniki gracza:", finalAnswers);
        setShowCongrats(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        return;
      }
    
      setCurrentSet({
        happy: getRandom(emotions.happy),
        sad: getRandom(emotions.sad),
        angry: getRandom(emotions.angry),
      });
    
      setRound((prev) => prev + 1);
      await animate(1); // fade-in
    };

  useEffect(() => {
    setStartTime(Date.now());
    animate(1); // initial fade-in
  }, []);
  

  if (showCongrats) {
    return (
      <View style={styles.centered}>
        <Text style={styles.bigText}>Brawo, gotowe! 💣💣</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokaż jak się dzisiaj czujesz 🪄</Text>
      <View style={styles.emojiContainer}>
        <Animated.View style={{ flexDirection: "row", opacity: fadeAnim }}>
          {["happy", "sad", "angry"].map((emotion) => (
            <TouchableOpacity key={emotion} onPress={() => handleChoice(emotion as any)}>
              <Animated.Image
                source={currentSet[emotion as keyof typeof currentSet]}
                style={styles.emoji}
              />
            </TouchableOpacity>
          ))}
        </Animated.View>
      </View>
      <Text style={styles.roundText}>Runda: {round} / 4</Text>
      <Button title="Wróć na ekran główny" onPress={() => navigate("/")} />
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
    textAlign: "center",
  },
  emojiContainer: {
    marginBottom: 30,
  },
  emoji: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  roundText: {
    fontSize: 18,
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  bigText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

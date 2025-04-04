import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wybierz gre:</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => router.push("/game_shapes")}>
            <Text style={styles.buttonText}>kształty</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/game_emotions")}>
              <Text style={styles.buttonText}>emotki</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/game_writing")}>
              <Text style={styles.buttonText}>Statki</Text>
            </TouchableOpacity>

        </View>
    );
}
    
// styles:
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
    },
    title: {
      fontSize: 28,
      marginBottom: 40,
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
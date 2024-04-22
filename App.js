import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import RecieveInput from "./Pages/RecieveInput";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Pages/GameScreen";
import GameOverScreen from "./Pages/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <RecieveInput onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    // start screen
    <LinearGradient colors={["#4e0329", "yellow"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageContainer}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/* <View style={styles.rootScreen}>{screen}</View> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  imageContainer: {
    opacity: 0.15,
  },
});

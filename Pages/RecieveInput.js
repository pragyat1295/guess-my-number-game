import { TextInput, View, StyleSheet, Alert } from "react-native";
import CustomButton from "../Components/ui/CustomButton";
import { useState } from "react";
import Title from "../Components/ui/Title";

import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";

export default function RecieveInput({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function onInputChange(val) {
    setEnteredNumber(val);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    console.log("clicked")

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <Title>Guess My Number</Title>
      <Card>
      <InstructionText>
          Enter a Number
        </InstructionText>
        <TextInput
          placeholder="Your Number"
          keyboardType="number-pad"
          maxLength={2}
          style={styles.inputText}
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onInputChange}
        />

        <View style={styles.buttonContainer}>
          <CustomButton onPress={confirmInputHandler}>Done</CustomButton>
          <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: "#db2345",
    // borderRadius: 5,
    // padding: 10,
    // elevation: 10,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
  },
  inputText: {
    width: 200,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    padding: 10,
    color: "yellow",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontWeight: "700",
    fontSize: 26,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
});

import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({ onConfirmed }) {
  const [numberEntered, setNumberEntered] = useState("");

  function resetInputHandler() {
    setNumberEntered("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(numberEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirmed(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={numberEntered}
        onChangeText={(text) => setNumberEntered(text)}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton child="Reset" onPress={resetInputHandler} />
        <PrimaryButton child="Confirm" onPress={confirmInputHandler} />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
  },
  numberInput: {
    height: 50,
    fontSize: 40,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginTop: 8,
    marginBottom: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

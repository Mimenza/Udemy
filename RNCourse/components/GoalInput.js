import { View, TextInput, Button, StyleSheet } from "react-native";

import { useState } from "react";

function GoalInput(props) {
  // Estado para almacenar el texto del objetivo ingresado
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Función para manejar el cambio de texto en el input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Función para manejar el evento de agregar objetivo
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      {/* Input para ingresar el texto del objetivo */}
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      {/* Botón para agregar el objetivo */}
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

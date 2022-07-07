import * as React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { createGame } from "../http_handlers/tic_tac_toe_backend_calls";


export default function ConfigScreen({ navigation }) {
  async function handlePress() {
    let newGame = await createGame();
    navigation.navigate('Game', {
      gameID: newGame.id
    });
    return newGame;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Config Screen</Text>
      <Button
      title="Create new game"
      onPress={() => handlePress()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    welcomeContainer: {
      width: '70%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      backgroundColor: 'green',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

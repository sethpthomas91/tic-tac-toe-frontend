import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Board from '../components/Board';

export default function TabOneScreen() {
  const [canDisplayGame, setCanDisplayGame] = useState(false)

  function handlePress() {
    setCanDisplayGame(true)
  }

  function displayWelcomeMessage() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Tic-Tac-Toe</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}> Play new game </Text>
        </TouchableOpacity>
      </View>
    )
  }

  function displayBoard() {
    return (
      <View style={styles.container}>
        <Board/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {canDisplayGame ? displayBoard() : displayWelcomeMessage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191970',
    height: 80,
    width: 200,
  },
  buttonText: {
    color: "#F0F8FF"
  }
});

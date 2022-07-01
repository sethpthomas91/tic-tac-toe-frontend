import * as React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';


export default function GameScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Game Screen</Text>
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

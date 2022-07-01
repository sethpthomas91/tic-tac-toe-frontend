import * as React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';


export default function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Config Screen</Text>
      <Button
      title="Continue to game"
      onPress={() => navigation.navigate('Game')}
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

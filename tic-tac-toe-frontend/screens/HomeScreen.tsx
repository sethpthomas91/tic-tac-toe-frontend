import * as React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import WelcomeContainer from "../components/home_screen_comp/WelcomeContainer";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WelcomeContainer/>
      <Button
      title="Press to configure a new game"
      onPress={() => navigation.navigate('Config')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    borderColor: 'blue',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

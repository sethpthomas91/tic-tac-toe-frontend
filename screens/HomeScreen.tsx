import * as React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import WelcomeContainer from "../components/home_screen_comp/WelcomeContainer";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WelcomeContainer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

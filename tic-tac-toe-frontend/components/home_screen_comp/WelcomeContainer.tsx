import { StyleSheet } from 'react-native';
import NewGameButton from './NewGameButton';

import { Text, View } from '../themes/Themed';

export default function WelcomeContainer() {

  return (
    <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome to Tic-Tac-Toe</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <NewGameButton/>
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

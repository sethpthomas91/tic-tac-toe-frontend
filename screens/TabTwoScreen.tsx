import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import WelcomeContainer from '../components/WelcomeContainer';

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
     <WelcomeContainer/>
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

import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';

export default function GameInfo() {


  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text>Game ID</Text>
        <Text>Current Player:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center'
  },
});

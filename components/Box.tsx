import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';

export default function Box({ symbol }: { symbol: string }) {
  
  function handleBoxPress() {
    alert(`You pressed box ${symbol}`);
    return;
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TouchableOpacity onPress={handleBoxPress} style={styles.box}>
            <Text style={styles.getStartedText}>
                {symbol}
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 2,
    marginVertical: 2
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    color: 'white'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 80,
    width: 80,
  }
});

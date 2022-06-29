import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import { useState } from 'react';

export default function Board({ path }: { path: string }) {
  const [symbol, setSymbol] = useState('X')

  function handleBoxPress() {
    if (symbol === 'X') {
      setSymbol('O');
    } else {
      setSymbol('X');
    }
    return
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
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    color: 'white'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
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

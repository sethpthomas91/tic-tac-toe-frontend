import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../themes/Themed';

type CellProps = {
    symbol: string,
    id: number,
    getPlayerMove: (id: number) => null
}

export default function Cell(props: CellProps) {
  const {symbol, id, getPlayerMove} = props;

  const handleBoxPress = () => {
    getPlayerMove(id);
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TouchableOpacity onPress={handleBoxPress} style={styles.box} testID="cellPresser">
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
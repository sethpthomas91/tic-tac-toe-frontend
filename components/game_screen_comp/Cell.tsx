import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../themes/Themed';

type CellProps = {
    symbol: string,
    id: number,
    testID?: string,
    getPlayerMove: (id: number) => null
}

export default function Cell(props: CellProps) {
  const {symbol, id, getPlayerMove} = props;

  const handlePress = () => {
    getPlayerMove(id);
  }

  return (
      <View style={styles.cellContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.box} testID="cellPresser">
          <Text style={styles.cellText}>
            {symbol}
          </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  cellContainer: {
      alignItems: 'center',
      marginHorizontal: 2,
      marginVertical: 2,
      borderColor: 'white',
      borderWidth: 3
    },
    cellText: {
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
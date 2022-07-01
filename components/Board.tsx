import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import { useState } from 'react';

import getGame from "/Users/sthomas/Learning/Mobile/tic-tac-toe-frontend/http_handlers/tic_tac_toe_backend_calls"
import Box from './Box';

export default function Board() {
  const [game, setGame] = useState(null)

  async function handlePress() {
    let game = await getGame()
    setGame(game);
    return;
  }

  function generateBoxes(boardObject: any) {
    let array = []
    for( let i = 1; i < 10; i++) {
      array.push(<Box key={i} symbol={`${boardObject[i]}`}></Box>)
    }
    return array
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.box}>
        {
          game ? generateBoxes(game.board) : <Box symbol={"No game"}></Box>
        }
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
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#808080',
    height: 300,
    width: 300,
  }
});

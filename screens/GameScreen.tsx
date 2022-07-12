import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import { getGame, updateGame } from "../http_handlers/tic_tac_toe_backend_calls";
import Board from "../components/game_screen_comp/Board";



export default function GameScreen({ route }) {
  const { gameID } = route.params;
  const [game, setGame] = useState();
  const [userMove, setUserMove] = useState();

  async function getPlayerMove(playerMove) {
    let response = await updateGame(gameID, playerMove);
    setUserMove(playerMove);
    return response;
  };
  
  useEffect(() => {
    async function fetchGame() {
      let newGame = await getGame(gameID);
      setGame(newGame);
    };
    fetchGame();
  }, [userMove]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Game Screen</Text>
      { 
        game 
        &&
        <View>
        <Text>{`Game: ${game.id}`}</Text>
        <Text>{`Current player: ${game.current_player}`}</Text>
        <Board board={game.board} getPlayerMove={getPlayerMove}> </Board>
        </View>
      }
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

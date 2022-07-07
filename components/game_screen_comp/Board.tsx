import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Cell from "./Cell";

type BoardProps = {
  board: {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string,
    9: string
  },
   getPlayerMove: (id: number) => null
}

export default function Board(props: BoardProps) {
    const { board, getPlayerMove } = props;
    
    function generateBoxes(boardObject: any) {
      let array = [];
      for( let i = 1; i < 10; i++) {
        array.push(<Cell key={i} id={i} symbol={`${boardObject[i.toString()]}`} getPlayerMove={getPlayerMove}></Cell>)
      };
      return array;
    }
  
    return (
      <View>
        <View style={styles.getStartedContainer}>
          <View style={styles.box}>
          { generateBoxes(board) }
          </View>
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
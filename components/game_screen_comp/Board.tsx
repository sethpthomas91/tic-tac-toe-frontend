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
    
    return (
        <View style={styles.getStartedContainer}>
          <View style={styles.gridContainer}>
          { Object.values(board).map((cell, index) => {
            return <Cell 
              key={index + 1} 
              id={index + 1} 
              testID={`cell_${index + 1}`}
              symbol={cell}  
              getPlayerMove={getPlayerMove}
            />
          })}
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    gridContainer: {
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
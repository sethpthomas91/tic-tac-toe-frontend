// pass in board that has an X at 1
// count children, should be 9
// test the first child for X
import React from "react";
import { View } from '../components/themes/Themed';
import Board from "../components/game_screen_comp/Board";
import { render, screen } from "@testing-library/react-native";

const BoardWrapper = () => {
    const thisFuncDoesNotMatter = (num: number) => null;
    const testBoard = {
        1 : "X",
        2 : "2",
        3 : "3",
        4 : "4",
        5 : "5",
        6 : "6",
        7 : "7",
        8 : "8",
        9 : "9"
    }
    
    return <View testID='boardWrapper'>
        <Board board={testBoard} getPlayerMove={thisFuncDoesNotMatter}/>
    </View>
}

test('a board with a test board renders 9 cells', () => {
    render(<BoardWrapper/>);
    const cellComponents = screen.getAllByTestId('cellPresser');
    expect(cellComponents.length).toBe(9);
}); 
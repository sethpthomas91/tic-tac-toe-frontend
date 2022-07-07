import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import { View } from '../components/themes/Themed';
import Cell from '../components/game_screen_comp/Cell';

const CellWrapper = () => {
  const [value, setValue] = React.useState('');
  const updateValue = (x: string) => setValue('UPDATED');

  return <View testID='cellWrapper'>
    {value}
    <Cell getPlayerMove={updateValue} id={1} symbol={'BLA'} />
  </View>
}

test('a cell calls getPlayerByID when pressed', () => {
  const { getByText, getByTestId, toJSON } = render(<CellWrapper />);

  const pressable = getByTestId('cellPresser');

  fireEvent.press(pressable);
  const wrapper = getByTestId('cellWrapper');
  expect(wrapper.children[0]).toBe('UPDATED');
})


// const BasicComponent = ({value}) => <View testID={'view'}>{value}</View>;

// test('BasicComponent shows value', () => {
//   const { getByText, getByTestId, toJSON } = render(<BasicComponent value={"Anything"} />);
//   const view = getByTestId('view');
//   expect(view.children[0]).toMatchSnapshot()
// })

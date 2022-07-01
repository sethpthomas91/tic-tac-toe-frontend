import { StyleSheet , TouchableOpacity } from 'react-native';

import { Text } from './Themed';

export default function NewGameButton() {

  return (
    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Play new game </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191970',
        height: 80,
        width: 200,
      },
      buttonText: {
        color: "#F0F8FF"
      }
});

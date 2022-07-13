import { StyleSheet , TouchableOpacity } from 'react-native';

import { Text } from '../themes/Themed';
import { useNavigation } from '@react-navigation/native';

export default function NewGameButton() {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('Config')}
    >
      <Text style={styles.buttonText}> Configure a new game</Text>
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

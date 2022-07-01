import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Press to configure a new game"
      onPress={() => navigation.navigate('Config')}
      />
    </View>
  );
}

function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Config Screen</Text>
      <Button
      title="Continue to game"
      onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}

function GameScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Game Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Welcome'}}
        />
        <Stack.Screen 
        name="Config" 
        component={ConfigScreen} 
        options={{ title: 'Game Options'}}
        />
        <Stack.Screen 
        name="Game" 
        component={GameScreen} 
        options={{ title: 'Game'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

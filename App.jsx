/* eslint-disable react-native/no-inline-styles */
// App.js
import React from 'react';
import './global.css';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './src/components/Menu';
import BottomNavigator from './src/screens/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {SheetProvider} from './src/sheets/GlobalSheetContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SheetComponent from './src/sheets/SheetComponent';
import ModalComponent from './src/sheets/ModalComponent';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SheetProvider>
        <NavigationContainer>
          <Menu />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>

          <SheetComponent id="sheet1" />
          <SheetComponent id="sheet3" />
          <SheetComponent id="sheet4" />
          <ModalComponent id="modal1" />
        </NavigationContainer>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}

export default App;

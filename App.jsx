import React from 'react';
import './global.css';
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Text} from 'react-native';
import Menu from './src/components/Menu';
import BottomNavigator from './src/screens/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {SheetProvider} from './src/sheets/GlobalSheetContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ModalComponent from './src/sheets/ModalComponent';
import {useColorScheme} from 'react-native';
import RightSearchSheet from './src/sheets/RightSearchSheet';
import MenuLeftSheet from './src/sheets/MenuLeftSheet';
import RightCartSheet from './src/sheets/RightCartSheet';
import AuthScreen from './src/screens/AuthScreen';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = [{fontFamily: 'AlbertSans-Regular'}];
const Stack = createNativeStackNavigator();

function App() {
  const theme = useColorScheme();
  return (
    <GestureHandlerRootView className="flex-1 font-sans font-normal">
      <SheetProvider>
        <NavigationContainer
          theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <Menu />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="Account" component={AuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>

          <MenuLeftSheet id="left-menu-sheet" />
          <RightCartSheet id="right-cart-sheet" />
          <RightSearchSheet id="right-search-sheet" />
          <ModalComponent id="modal1" />
        </NavigationContainer>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}

export default App;

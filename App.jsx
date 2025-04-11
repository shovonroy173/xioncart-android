import React from 'react';
import './global.css';
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Menu from './src/components/Menu';
import BottomNavigator from './src/screens/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SheetProvider} from './src/sheets/GlobalSheetContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ModalComponent from './src/sheets/ModalComponent';
import {useColorScheme} from 'react-native';
import RightSearchSheet from './src/sheets/RightSearchSheet';
import MenuLeftSheet from './src/sheets/MenuLeftSheet';
import RightCartSheet from './src/sheets/RightCartSheet';
import AuthScreen from './src/screens/AuthScreen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from './src/utils/NavigationService';
import RightCategoriesSheet from './src/sheets/RightCategoriesSheet';

const Stack = createNativeStackNavigator();

function App() {
  const theme = useColorScheme();

  return (
    <GestureHandlerRootView className="flex-1">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SheetProvider>
            <NavigationContainer
              theme={theme === 'dark' ? DarkTheme : DefaultTheme}
              ref={navigationRef}>
              <Menu />
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="BottomNavigator"
                  component={BottomNavigator}
                />
                <Stack.Screen name="Account" component={AuthScreen} />
              </Stack.Navigator>

              <MenuLeftSheet id="left-menu-sheet" />
              <RightCartSheet id="right-cart-sheet" />
              <RightSearchSheet id="right-search-sheet" />
              <RightCategoriesSheet id="right-categories-sheet" />
              <ModalComponent id="modal1" />
            </NavigationContainer>
          </SheetProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;

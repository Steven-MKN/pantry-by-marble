import { StatusBar } from 'expo-status-bar';
import { Reducer, useReducer } from 'react';
import { Text, View } from 'react-native';
import 'react-native-reanimated';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sceens/auth/Login';
import SignUp from './sceens/auth/SignUp';
import Cart from './sceens/home/Cart';
import Favourites from './sceens/home/Favourites';
import ProductsList from './sceens/home/ProductsList';
import Profile from './sceens/home/Profile';
import { authReducer, initialAuthState } from './state/auth';
import { AuthActions, AuthState } from './state/types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [auth, dispatch] = useReducer<Reducer<AuthState, AuthActions>>(
    authReducer,
    initialAuthState
  );

  return (
    <View style={{ flex: 1 }}>
      {auth.loggedInState === 'logged-in' ? (
        <Tab.Navigator>
          <Tab.Screen
            name="product-list"
            component={ProductsList}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="favourites"
            component={Favourites}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="search" options={{ headerShown: false }}>
            {() => null}
          </Tab.Screen>
          <Tab.Screen
            name="cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : auth.loggedInState === 'logged-out' ? (
        <Stack.Navigator initialRouteName="sign-up">
          <Stack.Screen name="login" options={{ headerShown: false }}>
            {() => <Login onLogin={() => dispatch({ type: 'LOGIN' })} />}
          </Stack.Screen>
          <Stack.Screen name="sign-up" options={{ headerShown: false }}>
            {() => <SignUp onLogin={() => dispatch({ type: 'LOGIN' })} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        // <Loader />
        <Text>Loader</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}


import { StatusBar } from 'expo-status-bar';
import { Reducer, useReducer } from 'react';
import { Text } from "react-native";
import 'react-native-reanimated';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sceens/auth/Login';
import SignUp from "./sceens/auth/SignUp";
import ProductsList from './sceens/home/ProductsList';
import { authReducer, initialAuthState } from './state/auth';
import { AuthActions, AuthState } from './state/types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {

  const [auth, dispatch] = useReducer<Reducer<AuthState, AuthActions>>(authReducer, initialAuthState);

  return (
    <>
      {
        auth.loggedInState === 'logged-in' ? (
          <Tab.Navigator>
            <Tab.Screen name="product-list" component={ProductsList} options={{ headerShown: false }} />
            <Tab.Screen name="favourites" options={{ headerShown: false }} />
            <Tab.Screen name="search" options={{ headerShown: false }} />
            <Tab.Screen name="cart" options={{ headerShown: false }} />
            <Tab.Screen name="profile" options={{ headerShown: false }} />
          </Tab.Navigator>

        ) : auth.loggedInState === 'logged-out' ? (
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} component={SignUp} />
          </Stack.Navigator>
        ) : (
          // <Loader />
          <Text>Loader</Text>
        )
      }
      <StatusBar style="auto" />
    </>
  )
}

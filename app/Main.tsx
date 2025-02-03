import { StatusBar } from 'expo-status-bar';
import { Reducer, useReducer } from 'react';
import { Text, View } from 'react-native';
import 'react-native-reanimated';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CartSvg,
  FavouritesSvg,
  HomeSvg,
  ProfileSvg,
  SearchSvg,
} from '../assets/icons';
import BottomTabBar from './components/BottomTabBar';
import Login from './sceens/auth/Login';
import SignUp from './sceens/auth/SignUp';
import Cart from './sceens/home/Cart';
import Favourites from './sceens/home/Favourites';
import ProductsList from './sceens/home/ProductsList';
import Profile from './sceens/home/Profile';
import { authReducer, initialAuthState } from './state/auth';
import { initialProductState, productReducer } from './state/products';
import {
  AuthActions,
  AuthState,
  ProductActions,
  ProductState,
} from './state/types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [auth, dispatch] = useReducer<Reducer<AuthState, AuthActions>>(
    authReducer,
    initialAuthState
  );

  // Ideally I would wrapp this in a context provider to call it directly, but for the sake of this example I will pass it down as props
  const [productState, dispatchProductAction] = useReducer<
    Reducer<ProductState, ProductActions>
  >(productReducer, initialProductState);

  return (
    <View style={{ flex: 1 }}>
      {auth.loggedInState === 'logged-in' ? (
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
          <Tab.Screen
            name="product-list"
            options={{
              headerShown: false,
              tabBarIcon: props => <HomeSvg {...props} />,
            }}
          >
            {() => (
              <ProductsList
                onBackToLogin={() => {
                  dispatch({ type: 'LOGOUT' });
                }}
                productState={productState}
                dispatchProductAction={dispatchProductAction}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="favourites"
            component={Favourites}
            options={{
              headerShown: false,
              tabBarIcon: props => <FavouritesSvg {...props} />,
            }}
          />

          <Tab.Screen
            name="search"
            options={{
              headerShown: false,
              tabBarIcon: props => <SearchSvg {...props} />,
            }}
          >
            {() => null}
          </Tab.Screen>

          <Tab.Screen
            name="cart"
            options={{
              headerShown: false,
              tabBarIcon: props => <CartSvg {...props} />,
            }}
          >
            {() => (
              <Cart
                onBackToLogin={() => {
                  dispatch({ type: 'LOGOUT' });
                }}
                productState={productState}
                dispatchProductAction={dispatchProductAction}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: props => <ProfileSvg {...props} />,
            }}
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

import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from "expo";
import Main from './app/Main';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

registerRootComponent(App);

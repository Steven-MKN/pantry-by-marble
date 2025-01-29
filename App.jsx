import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from "expo";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Main from './app/Main';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Avenir": require("./assets/fonts/Avenir.ttf"),
    "AGaramondPro-Regular": require("./assets/fonts/AGaramondPro-Regular.otf"),
    "AGaramondPro-Bold": require("./assets/fonts/AGaramondPro-Bold.otf"),
    "AGaramondPro-BoldItalic": require("./assets/fonts/AGaramondPro-BoldItalic.otf"),
    "AGaramondPro-Italic": require("./assets/fonts/AGaramondPro-Italic.otf"),
    "AGaramondPro-SemiboldItalics": require("./assets/fonts/AGaramondPro-SemiboldItalic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

registerRootComponent(App);

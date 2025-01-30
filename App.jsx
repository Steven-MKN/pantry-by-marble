import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider, configureFonts } from 'react-native-paper';
import Main from './app/Main';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Avenir: require('./assets/fonts/Avenir.ttf'),
    'AGaramondPro-Regular': require('./assets/fonts/AGaramondPro-Regular.otf'),
    'AGaramondPro-Bold': require('./assets/fonts/AGaramondPro-Bold.otf'),
    'AGaramondPro-BoldItalic': require('./assets/fonts/AGaramondPro-BoldItalic.otf'),
    'AGaramondPro-Italic': require('./assets/fonts/AGaramondPro-Italic.otf'),
    'AGaramondPro-SemiboldItalics': require('./assets/fonts/AGaramondPro-SemiboldItalic.otf'),
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
      <PaperProvider
        theme={{
          colors: {
            // ...DefaultTheme.colors,
            primary: '#54634B',
            background: 'transparent',
            text: '#54634B',
            placeholder: '#54634B',
            surfaceDisabled: '#5f635c',
            onPrimary: '#54634B',
            backdrop: '#54634B',
            onBackground: '#54634B',
            secondary: '#54634B',
            tertiary: '#54634B',
            surface: '#54634B',
          },
          fonts: configureFonts({
            config: {
              fontFamily: 'AGaramondPro-Italic',
            },
          }),
          mode: 'exact',
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Main />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);

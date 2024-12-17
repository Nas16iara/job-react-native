import { useCallback, useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setIsAppReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      // Ensure the splash screen is hidden only after the app is ready
      console.log('App Layout Loaded, Splash Screen should be hidden.');
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!fontsLoaded) return null; // Keep loading while fonts are loading

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;

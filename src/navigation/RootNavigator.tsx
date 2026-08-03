import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'react-native';

import { LoaderScreen } from '../screens/LoaderScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';

import { colors } from '../theme';
import { MainTabNavigator } from './MainTabNavigator';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.cardMuted,
    border: colors.divider,
    primary: colors.accent,
    text: colors.headingLight,
  },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

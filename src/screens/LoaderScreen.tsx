import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import type { RootStackParamList } from '../navigation/types';

import { colors } from '../theme';

const LOADER_DURATION_MS = 3000;

const BARS = [0, 1, 2];

type LoaderScreenProps = NativeStackScreenProps<RootStackParamList, 'Loader'>;

function LoaderBar({ innecs }: { innecs: number }) {
  const dulChunCinn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(innecs * 150),
        Animated.timing(dulChunCinn, {
          toValue: 1,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(dulChunCinn, {
          toValue: 0,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.delay((BARS.length - 1 - innecs) * 150),
      ]),
    );

    animation.start();
    return () => animation.stop();
  }, [innecs, dulChunCinn]);

  return (
    <Animated.View
      style={[
        styles.LoaderScreenBarMarc,
        {
          opacity: dulChunCinn.interpolate({
            inputRange: [0, 1],
            outputRange: [0.45, 1],
          }),
          transform: [
            {
              scaleY: dulChunCinn.interpolate({
                inputRange: [0, 1],
                outputRange: [0.55, 1],
              }),
            },
          ],
        },
      ]}
    />
  );
}

export function LoaderScreen({ navigation }: LoaderScreenProps) {
  useEffect(() => {
    const timer = setTimeout(
      () => navigation.replace('Onboarding'),
      LOADER_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/sprintto-drrbl-loader-bg.png')}
      resizeMode="cover"
      style={styles.LoaderScreenFramhClud}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.LoaderScreenBarsStiall}>
        {BARS.map(innecs => (
          <LoaderBar key={innecs} innecs={innecs} />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.surfaceDark,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 96,
  },

  LoaderScreenBarsStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 70,
  },
  LoaderScreenBarMarc: {
    width: 20,
    height: 70,
    backgroundColor: colors.accentBright,
  },
});

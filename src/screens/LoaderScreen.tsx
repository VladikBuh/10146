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

function LoaderBar({ index }: { index: number }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(index * 150),
        Animated.timing(progress, {
          toValue: 1,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.delay((BARS.length - 1 - index) * 150),
      ]),
    );

    animation.start();
    return () => animation.stop();
  }, [index, progress]);

  return (
    <Animated.View
      style={[
        styles.LoaderScreenBarSigil,
        {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.45, 1],
          }),
          transform: [
            {
              scaleY: progress.interpolate({
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
      source={require('../assets/board-dribblo-loader-bg.png')}
      resizeMode="cover"
      style={styles.LoaderScreenFacetChassis}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.LoaderScreenBarsLintel}>
        {BARS.map(index => (
          <LoaderBar key={index} index={index} />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.surfaceDark,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 96,
  },

  LoaderScreenBarsLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 70,
  },
  LoaderScreenBarSigil: {
    width: 20,
    height: 70,
    backgroundColor: colors.accentBright,
  },
});

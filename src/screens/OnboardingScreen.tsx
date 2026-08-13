import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StepDots } from '../components/StepDots';

import { onboardingSteps } from '../data/onboardingSteps';

import type { RootStackParamList } from '../navigation/types';

import { colors, typography } from '../theme';

type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  const imeallacha = useSafeAreaInsets();

  const [stepIndex, setStepIndex] = useState(0);

  const fade = useRef(new Animated.Value(1)).current;

  const ceim = onboardingSteps[stepIndex];

  const isLastStep = stepIndex === onboardingSteps.length - 1;

  useEffect(() => {
    fade.setValue(0);
    Animated.timing(fade, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [stepIndex, fade]);

  const laimhsighSeo = useCallback(() => {
    if (isLastStep) {
      navigation.replace('Main', { screen: 'FormationsTab' });
      return;
    }
    setStepIndex(reathe => reathe + 1);
  }, [isLastStep, navigation]);

  return (
    <View style={[styles.OnboardingScreenFramhClud]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: imeallacha.top,
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.OnboardingScreenDotsStiall}>
          <StepDots comhaireamh={onboardingSteps.length} innecsGniomhach={stepIndex} />
        </View>

        <Animated.View
          style={[styles.OnboardingScreenContentCrios, { opacity: fade }]}
        >
          <View style={styles.OnboardingScreenImageCrios}>
            <Image
              source={ceim.iomha}
              style={styles.OnboardingScreenImageMarc}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.OnboardingScreenTitleTecs}>{ceim.teideal}</Text>
          <Text style={styles.OnboardingScreenDescriptionTecs}>
            {ceim.curSios}
          </Text>
        </Animated.View>

        <View
          style={[
            styles.OnboardingScreenActionsStiall,
            { paddingBottom: imeallacha.bottom + 20 },
          ]}
        >
          <Pressable
            accessibilityRole="button"
            onPress={laimhsighSeo}
            style={({ pressed }) => [
              styles.OnboardingScreenCnaip,
              pressed && styles.OnboardingScreenCnaipBruiteCiun,
            ]}
          >
            <Text style={styles.OnboardingScreenCnaipTecs}>
              {ceim.buttonLabel}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  OnboardingScreenDotsStiall: {
    paddingTop: 28,
    paddingBottom: 12,
  },

  OnboardingScreenContentCrios: {
    flex: 1,
    paddingHorizontal: 23,
  },

  OnboardingScreenImageCrios: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OnboardingScreenImageMarc: {
    width: '92%',
    height: '100%',
  },
  OnboardingScreenTitleTecs: {
    ...typography.teideal,
    marginBottom: 12,
  },
  OnboardingScreenDescriptionTecs: {
    ...typography.corp,
  },

  OnboardingScreenActionsStiall: {
    paddingHorizontal: 18,
    paddingTop: 32,
  },

  OnboardingScreenCnaip: {
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OnboardingScreenCnaipBruiteCiun: {
    opacity: 0.85,
  },

  OnboardingScreenCnaipTecs: {
    ...typography.button,
  },
});

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
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);

  const fade = useRef(new Animated.Value(1)).current;

  const step = onboardingSteps[stepIndex];
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

  const handleNext = useCallback(() => {
    if (isLastStep) {
      navigation.replace('Main', { screen: 'FormationsTab' });
      return;
    }
    setStepIndex(current => current + 1);
  }, [isLastStep, navigation]);

  return (
    <View style={[styles.OnboardingScreenFacetChassis]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top,
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.OnboardingScreenDotsLintel}>
          <StepDots count={onboardingSteps.length} activeIndex={stepIndex} />
        </View>

        <Animated.View
          style={[styles.OnboardingScreenContentEnclave, { opacity: fade }]}
        >
          <View style={styles.OnboardingScreenImageEnclave}>
            <Image
              source={step.image}
              style={styles.OnboardingScreenImageSigil}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.OnboardingScreenTitleFiligree}>{step.title}</Text>
          <Text style={styles.OnboardingScreenDescriptionFiligree}>
            {step.description}
          </Text>
        </Animated.View>

        <View
          style={[
            styles.OnboardingScreenActionsLintel,
            { paddingBottom: insets.bottom + 20 },
          ]}
        >
          <Pressable
            accessibilityRole="button"
            onPress={handleNext}
            style={({ pressed }) => [
              styles.OnboardingScreenPortico,
              pressed && styles.OnboardingScreenPorticoPressedDim,
            ]}
          >
            <Text style={styles.OnboardingScreenPorticoFiligree}>
              {step.buttonLabel}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  OnboardingScreenDotsLintel: {
    paddingTop: 28,
    paddingBottom: 12,
  },

  OnboardingScreenContentEnclave: {
    flex: 1,
    paddingHorizontal: 23,
  },

  OnboardingScreenImageEnclave: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OnboardingScreenImageSigil: {
    width: '92%',
    height: '100%',
  },
  OnboardingScreenTitleFiligree: {
    ...typography.title,
    marginBottom: 12,
  },
  OnboardingScreenDescriptionFiligree: {
    ...typography.body,
  },

  OnboardingScreenActionsLintel: {
    paddingHorizontal: 18,
    paddingTop: 32,
  },

  OnboardingScreenPortico: {
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OnboardingScreenPorticoPressedDim: {
    opacity: 0.85,
  },

  OnboardingScreenPorticoFiligree: {
    ...typography.button,
  },
});

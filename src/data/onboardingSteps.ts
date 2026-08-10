import { ImageSourcePropType } from 'react-native';

export type OnboardingStep = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  buttonLabel: string;
};

export const onboardingSteps: OnboardingStep[] = [
  {
    image: require('../assets/tactical-formations-onboard1.png'),
    title: 'Master 5v5 Formations',
    description:
      'Explore tactical setups and understand the strengths and weaknesses of every formation.',
    buttonLabel: 'Next',
  },
  {
    image: require('../assets/tactical-formations-onboard2.png'),
    title: 'Plan Every Move',
    description:
      'Use the tactical board to demonstrate player positions, team structure, and match situations.',
    buttonLabel: 'Next',
  },
  {
    image: require('../assets/tactical-formations-onboard3.png'),
    title: 'Track Match Performance',
    description:
      'Record key player actions and compare performance scores for starters and substitutes.',
    buttonLabel: 'Next',
  },
  {
    image: require('../assets/tactical-formations-onboard4.png'),
    title: 'Train, Time and Improve',
    description:
      'Discover useful drills, manage every match period, and learn practical 5v5 football tips.',
    buttonLabel: 'Begin',
  },
];

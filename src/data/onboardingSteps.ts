import { ImageSourcePropType } from 'react-native';

export type OnboardingStep = {
  iomha: ImageSourcePropType;
  teideal: string;
  curSios: string;
  buttonLabel: string;
};

export const onboardingSteps: OnboardingStep[] = [
  {
    iomha: require('../assets/sprintto-drrbl-onboard1.png'),
    teideal: 'Master 5v5 Formations',
    curSios:
      'Explore tactical setups and understand the strengths and weaknesses of every formation.',
    buttonLabel: 'Next',
  },
  {
    iomha: require('../assets/sprintto-drrbl-onboard2.png'),
    teideal: 'Plan Every Move',
    curSios:
      'Use the tactical board to demonstrate player positions, team structure, and match situations.',
    buttonLabel: 'Next',
  },
  {
    iomha: require('../assets/sprintto-drrbl-onboard3.png'),
    teideal: 'Track Match Performance',
    curSios:
      'Record key player actions and compare performance scores for starters and substitutes.',
    buttonLabel: 'Next',
  },
  {
    iomha: require('../assets/sprintto-drrbl-onboard4.png'),
    teideal: 'Train, Time and Improve',
    curSios:
      'Discover useful drills, manage every match period, and learn practical 5v5 football tips.',
    buttonLabel: 'Begin',
  },
];

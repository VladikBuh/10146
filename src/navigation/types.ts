import type { NavigatorScreenParams } from '@react-navigation/native';

export type DrillsStackParamList = {
  DrillsList: undefined;
  DrillDetail: { drillId: string };
};

export type MainTabParamList = {
  FormationsTab: undefined;
  BoardTab: undefined;
  TrackerTab: undefined;
  DrillsTab: NavigatorScreenParams<DrillsStackParamList>;
  TimerTab: undefined;
  TipsTab: undefined;
};

export type RootStackParamList = {
  Loader: undefined;
  Onboarding: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

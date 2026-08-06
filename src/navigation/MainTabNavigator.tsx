import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import { TabBar } from '../components/nav/TabBar';
import { BoardScreen } from '../screens/BoardScreen';

import { FormationsScreen } from '../screens/FormationsScreen';

import { TimerScreen } from '../screens/TimerScreen';
import { TipsScreen } from '../screens/TipsScreen';

import { TrackerScreen } from '../screens/TrackerScreen';

import { DrillsNavigator } from './DrillsNavigator';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="FormationsTab"
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: 'transparent' },
      }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="FormationsTab" component={FormationsScreen} />
      <Tab.Screen name="BoardTab" component={BoardScreen} />
      <Tab.Screen name="TrackerTab" component={TrackerScreen} />
      <Tab.Screen name="DrillsTab" component={DrillsNavigator} />
      <Tab.Screen name="TimerTab" component={TimerScreen} />
      <Tab.Screen name="TipsTab" component={TipsScreen} />
    </Tab.Navigator>
  );
}

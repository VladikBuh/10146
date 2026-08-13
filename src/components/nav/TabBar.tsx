import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { MainTabParamList } from '../../navigation/types';
import { colors } from '../../theme';

type TabKey = keyof MainTabParamList;

const TAB_LABELS: Record<TabKey, string> = {
  FormationsTab: 'Formations',
  BoardTab: 'Board',
  TrackerTab: 'Tracker',
  DrillsTab: 'Drills',
  TimerTab: 'Timer',
  TipsTab: 'Tips',
};

const TAB_ICONS: Record<TabKey, ImageSourcePropType> = {
  FormationsTab: require('../../assets/sprintto-drrbl-tab-formations.png'),
  BoardTab: require('../../assets/sprintto-drrbl-tab-board.png'),

  TrackerTab: require('../../assets/sprintto-drrbl-tab-tracker.png'),
  DrillsTab: require('../../assets/sprintto-drrbl-tab-drills.png'),
  TimerTab: require('../../assets/sprintto-drrbl-tab-timer.png'),
  TipsTab: require('../../assets/sprintto-drrbl-tab-tips.png'),
};

export function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.TabBarFramhClud}>
      {state.routes.map((route, innecs) => {
        const tabKey = route.name as TabKey;
        const isFocused = state.index === innecs;

        const laimhsighBru = () => {
          const imeacht = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !imeacht.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={TAB_LABELS[tabKey]}
            onPress={laimhsighBru}
            style={styles.TabBarButtonCnaip}
          >
            <Image
              source={TAB_ICONS[tabKey]}
              style={[
                styles.TabBarIconMarc,
                { tintColor: isFocused ? colors.accent : colors.textMuted },
              ]}
            />
            <Text
              style={[
                styles.TabBarLabelTecs,
                isFocused && styles.TabBarLabelTecsActive,
              ]}
            >
              {TAB_LABELS[tabKey]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarFramhClud: {
    paddingBottom: 18,
    flexDirection: 'row',
    backgroundColor: colors.cardMuted,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
  TabBarButtonCnaip: {
    flex: 1,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: 2,
    paddingVertical: 6,
  },

  TabBarIconMarc: {
    width: 20,
    height: 20,
  },

  TabBarLabelTecs: {
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 0.2,
    textAlign: 'center',
    color: colors.textMuted,
  },

  TabBarLabelTecsActive: {
    color: colors.accent,
    fontWeight: '600',
  },
});

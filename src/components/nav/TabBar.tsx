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
  FormationsTab: require('../../assets/board-dribblo-tab-formations.png'),
  BoardTab: require('../../assets/board-dribblo-tab-board.png'),

  TrackerTab: require('../../assets/board-dribblo-tab-tracker.png'),
  DrillsTab: require('../../assets/board-dribblo-tab-drills.png'),
  TimerTab: require('../../assets/board-dribblo-tab-timer.png'),
  TipsTab: require('../../assets/board-dribblo-tab-tips.png'),
};

export function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.TabBarFacetChassis}>
      {state.routes.map((route, index) => {
        const tabKey = route.name as TabKey;
        const isFocused = state.index === index;

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={TAB_LABELS[tabKey]}
            onPress={handlePress}
            style={styles.TabBarButtonPortico}
          >
            <Image
              source={TAB_ICONS[tabKey]}
              style={[
                styles.TabBarIconSigil,
                { tintColor: isFocused ? colors.accent : colors.textMuted },
              ]}
            />
            <Text
              style={[
                styles.TabBarLabelFiligree,
                isFocused && styles.TabBarLabelFiligreeActive,
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
  TabBarFacetChassis: {
    paddingBottom: 18,
    flexDirection: 'row',
    backgroundColor: 'rgba(53, 5, 97, 1)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
  TabBarButtonPortico: {
    flex: 1,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: 2,
    paddingVertical: 6,
  },

  TabBarIconSigil: {
    width: 20,
    height: 20,
  },

  TabBarLabelFiligree: {
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 0.2,
    textAlign: 'center',
    color: colors.textMuted,
  },

  TabBarLabelFiligreeActive: {
    color: colors.accent,
    fontWeight: '600',
  },
});

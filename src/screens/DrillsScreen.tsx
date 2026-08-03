import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DrillListCard } from '../components/drills/DrillListCard';
import { drills } from '../data/drills';

import type { DrillsStackParamList } from '../navigation/types';
import { colors } from '../theme';

type DrillsScreenProps = NativeStackScreenProps<
  DrillsStackParamList,
  'DrillsList'
>;

export function DrillsScreen({ navigation }: DrillsScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.DrillsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.DrillsScreenScrollContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.DrillsScreenHeadingFiligree}>Training Drills</Text>
        {drills.map(drill => (
          <DrillListCard
            key={drill.id}
            drill={drill}
            onPress={() =>
              navigation.navigate('DrillDetail', { drillId: drill.id })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  DrillsScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  DrillsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 20,
  },

  DrillsScreenHeadingFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

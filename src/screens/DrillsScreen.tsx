import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DrillListCard } from '../components/drills/DrillListCard';
import { cleachtai } from '../data/drills';

import type { DrillsStackParamList } from '../navigation/types';
import { colors } from '../theme';

type DrillsScreenProps = NativeStackScreenProps<
  DrillsStackParamList,
  'DrillsList'
>;

export function DrillsScreen({ navigation }: DrillsScreenProps) {
  const imeallacha = useSafeAreaInsets();

  return (
    <View style={styles.DrillsScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.DrillsScreenScrollContent,
          { paddingTop: imeallacha.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.DrillsScreenHeadingTecs}>Training Drills</Text>
        {cleachtai.map(cleachtadh => (
          <DrillListCard
            key={cleachtadh.id}
            cleachtadh={cleachtadh}
            onPress={() =>
              navigation.navigate('DrillDetail', { drillId: cleachtadh.id })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  DrillsScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  DrillsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 20,
  },

  DrillsScreenHeadingTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TipCard } from '../components/tips/TipCard';

import { leidanna } from '../data/tips';

import { colors } from '../theme';

export function TipsScreen() {
  const imeallacha = useSafeAreaInsets();

  return (
    <View style={styles.TipsScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.TipsScreenScrollContent,
          { paddingTop: imeallacha.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TipsScreenHeadingTecs}>5v5 Tip</Text>
        {leidanna.map(leid => (
          <TipCard key={leid.id} leid={leid} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TipsScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },

  TipsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 20,
  },

  TipsScreenHeadingTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

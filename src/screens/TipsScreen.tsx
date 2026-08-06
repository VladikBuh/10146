import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TipCard } from '../components/tips/TipCard';

import { tips } from '../data/tips';

import { colors } from '../theme';

export function TipsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.TipsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.TipsScreenScrollContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TipsScreenHeadingFiligree}>5v5 Tip</Text>
        {tips.map(tip => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TipsScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },

  TipsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 20,
  },

  TipsScreenHeadingFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

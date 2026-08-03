import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

type MetaChipProps = {
  label: string;
  value: string;
};

export function MetaChip({ label, value }: MetaChipProps) {
  return (
    <View style={styles.MetaChipFacetChassis}>
      <Text style={styles.MetaChipLabelFiligree}>{label}</Text>
      <Text style={styles.MetaChipValueFiligree}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MetaChipFacetChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
  },

  MetaChipLabelFiligree: {
    fontSize: 11,
    lineHeight: 16.5,
    color: colors.textFaint,
  },

  MetaChipValueFiligree: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.headingLight,
  },
});

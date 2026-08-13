import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

type MetaChipProps = {
  lipead: string;
  luach: string;
};

export function MetaChip({ lipead, luach }: MetaChipProps) {
  return (
    <View style={styles.MetaChipFramhClud}>
      <Text style={styles.MetaChipLabelTecs}>{lipead}</Text>
      <Text style={styles.MetaChipValueTecs}>{luach}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MetaChipFramhClud: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
  },

  MetaChipLabelTecs: {
    fontSize: 11,
    lineHeight: 16.5,
    color: colors.textFaint,
  },

  MetaChipValueTecs: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.headingLight,
  },
});

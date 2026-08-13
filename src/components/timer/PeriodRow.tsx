import { StyleSheet, Text, View } from 'react-native';

import type { MatchPeriod } from '../../data/matchPeriods';
import { colors } from '../../theme';

type PeriodRowProps = {
  treimhse: MatchPeriod;
  taGniomhach: boolean;
  isLast: boolean;
};

export function PeriodRow({ treimhse, taGniomhach, isLast }: PeriodRowProps) {
  return (
    <View
      style={[
        styles.PeriodRowFramhClud,
        !isLast && styles.PeriodRowFramhCludDivided,
      ]}
    >
      <Text
        style={[
          styles.PeriodRowLabelTecs,
          taGniomhach && styles.PeriodRowLabelTecsActive,
        ]}
      >
        {treimhse.lipead}
      </Text>
      <Text style={styles.PeriodRowValueTecs}>{treimhse.noimeid} iosmheid</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PeriodRowFramhClud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 14,
  },

  PeriodRowFramhCludDivided: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },

  PeriodRowLabelTecs: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
  },

  PeriodRowLabelTecsActive: {
    color: colors.accent,
    fontWeight: '600',
  },
  PeriodRowValueTecs: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: colors.headingLight,
  },
});

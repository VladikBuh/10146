import { StyleSheet, Text, View } from 'react-native';

import type { MatchPeriod } from '../../data/matchPeriods';
import { colors } from '../../theme';

type PeriodRowProps = {
  period: MatchPeriod;
  isActive: boolean;
  isLast: boolean;
};

export function PeriodRow({ period, isActive, isLast }: PeriodRowProps) {
  return (
    <View
      style={[
        styles.PeriodRowFacetChassis,
        !isLast && styles.PeriodRowFacetChassisDivided,
      ]}
    >
      <Text
        style={[
          styles.PeriodRowLabelFiligree,
          isActive && styles.PeriodRowLabelFiligreeActive,
        ]}
      >
        {period.label}
      </Text>
      <Text style={styles.PeriodRowValueFiligree}>{period.minutes} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PeriodRowFacetChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 14,
  },

  PeriodRowFacetChassisDivided: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },

  PeriodRowLabelFiligree: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
  },

  PeriodRowLabelFiligreeActive: {
    color: colors.accent,
    fontWeight: '600',
  },
  PeriodRowValueFiligree: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: colors.headingLight,
  },
});

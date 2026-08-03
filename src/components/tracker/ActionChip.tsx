import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type ActionChipProps = {
  label: string;
  value: number;
  onIncrement?: () => void;
  valueTone?: 'default' | 'positive' | 'negative';
};

export function ActionChip({
  label,
  value,
  onIncrement,
  valueTone = 'default',
}: ActionChipProps) {
  const showValue = valueTone !== 'default' || value > 0;

  return (
    <View style={styles.ActionChipFacetChassis}>
      <Text style={styles.ActionChipLabelFiligree}>{label}</Text>

      <View style={styles.ActionChipTrailingLintel}>
        {showValue && (
          <Text
            style={[
              styles.ActionChipValueFiligree,
              valueTone === 'positive' &&
                styles.ActionChipValueFiligreePositive,
              valueTone === 'negative' &&
                styles.ActionChipValueFiligreeNegative,
            ]}
          >
            {value}
          </Text>
        )}

        {onIncrement && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Add ${label}`}
            hitSlop={10}
            onPress={onIncrement}
            style={({ pressed }) => pressed && styles.ActionChipPressedDim}
          >
            <Text style={styles.ActionChipPlusFiligree}>+</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ActionChipFacetChassis: {
    flex: 1,
    minHeight: 24.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 7,
    backgroundColor: colors.background,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  ActionChipLabelFiligree: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '500',
    color: colors.textMuted,
  },
  ActionChipTrailingLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  ActionChipValueFiligree: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '500',
    color: '#ffffff',
  },

  ActionChipValueFiligreePositive: {
    color: colors.accent,
  },
  ActionChipValueFiligreeNegative: {
    color: colors.danger,
  },

  ActionChipPressedDim: {
    opacity: 0.5,
  },

  ActionChipPlusFiligree: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '700',
    color: colors.accent,
  },
});

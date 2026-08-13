import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type ActionChipProps = {
  lipead: string;
  luach: number;
  onIncrement?: () => void;
  valueTone?: 'default' | 'positive' | 'negative';
};

export function ActionChip({
  lipead,
  luach,
  onIncrement,
  valueTone = 'default',
}: ActionChipProps) {
  const showValue = valueTone !== 'default' || luach > 0;

  return (
    <View style={styles.ActionChipFramhClud}>
      <Text style={styles.ActionChipLabelTecs}>{lipead}</Text>

      <View style={styles.ActionChipTrailingStiall}>
        {showValue && (
          <Text
            style={[
              styles.ActionChipValueTecs,
              valueTone === 'positive' &&
                styles.ActionChipValueTecsPositive,
              valueTone === 'negative' &&
                styles.ActionChipValueTecsNegative,
            ]}
          >
            {luach}
          </Text>
        )}

        {onIncrement && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Add ${lipead}`}
            hitSlop={10}
            onPress={onIncrement}
            style={({ pressed }) => pressed && styles.ActionChipBruiteCiun}
          >
            <Text style={styles.ActionChipPlusTecs}>+</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ActionChipFramhClud: {
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

  ActionChipLabelTecs: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '500',
    color: colors.textMuted,
  },
  ActionChipTrailingStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  ActionChipValueTecs: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '500',
    color: '#ffffff',
  },

  ActionChipValueTecsPositive: {
    color: colors.accent,
  },
  ActionChipValueTecsNegative: {
    color: colors.danger,
  },

  ActionChipBruiteCiun: {
    opacity: 0.5,
  },

  ActionChipPlusTecs: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '700',
    color: colors.accent,
  },
});

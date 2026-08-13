import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type FormationSwitcherProps = {
  name: string;
  onPrevious: () => void;
  onNext: () => void;
};

export function FormationSwitcher({
  name,
  onPrevious,
  onNext,
}: FormationSwitcherProps) {
  return (
    <View style={styles.FormationSwitcherFramhClud}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Previous formation"
        hitSlop={12}
        onPress={onPrevious}
        style={({ pressed }) => pressed && styles.FormationSwitcherBruiteCiun}
      >
        <Text style={styles.FormationSwitcherArrowTecs}>‹</Text>
      </Pressable>

      <Text style={styles.FormationSwitcherNameTecs}>{name}</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Next formation"
        hitSlop={12}
        onPress={onNext}
        style={({ pressed }) => pressed && styles.FormationSwitcherBruiteCiun}
      >
        <Text style={styles.FormationSwitcherArrowTecs}>›</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  FormationSwitcherFramhClud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  FormationSwitcherArrowTecs: {
    fontSize: 22,
    lineHeight: 22,
    color: colors.textMuted,
  },
  FormationSwitcherNameTecs: {
    fontSize: 15,
    lineHeight: 22.5,
    fontWeight: '600',
    color: colors.headingLight,
  },

  FormationSwitcherBruiteCiun: {
    opacity: 0.5,
  },
});

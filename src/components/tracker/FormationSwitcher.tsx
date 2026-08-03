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
    <View style={styles.FormationSwitcherFacetChassis}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Previous formation"
        hitSlop={12}
        onPress={onPrevious}
        style={({ pressed }) => pressed && styles.FormationSwitcherPressedDim}
      >
        <Text style={styles.FormationSwitcherArrowFiligree}>‹</Text>
      </Pressable>

      <Text style={styles.FormationSwitcherNameFiligree}>{name}</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Next formation"
        hitSlop={12}
        onPress={onNext}
        style={({ pressed }) => pressed && styles.FormationSwitcherPressedDim}
      >
        <Text style={styles.FormationSwitcherArrowFiligree}>›</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  FormationSwitcherFacetChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  FormationSwitcherArrowFiligree: {
    fontSize: 22,
    lineHeight: 22,
    color: colors.textMuted,
  },
  FormationSwitcherNameFiligree: {
    fontSize: 15,
    lineHeight: 22.5,
    fontWeight: '600',
    color: colors.headingLight,
  },

  FormationSwitcherPressedDim: {
    opacity: 0.5,
  },
});

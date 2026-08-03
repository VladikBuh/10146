import { StyleSheet, View } from 'react-native';

import { colors } from '../theme';

type StepDotsProps = {
  count: number;
  activeIndex: number;
};

export function StepDots({ count, activeIndex }: StepDotsProps) {
  return (
    <View style={styles.StepDotsLintel}>
      {Array.from({ length: count }, (_, index) => (
        <View
          key={index}
          style={[
            styles.StepDotsDot,
            index === activeIndex && styles.StepDotsDotActive,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  StepDotsLintel: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 19,
  },
  StepDotsDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.accent,
  },

  StepDotsDotActive: {
    backgroundColor: colors.accentBright,
  },
});

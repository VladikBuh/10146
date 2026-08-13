import { StyleSheet, View } from 'react-native';

import { colors } from '../theme';

type StepDotsProps = {
  comhaireamh: number;
  innecsGniomhach: number;
};

export function StepDots({ comhaireamh, innecsGniomhach }: StepDotsProps) {
  return (
    <View style={styles.StepDotsStiall}>
      {Array.from({ length: comhaireamh }, (_, innecs) => (
        <View
          key={innecs}
          style={[
            styles.StepDotsDot,
            innecs === innecsGniomhach && styles.StepDotsDotActive,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  StepDotsStiall: {
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

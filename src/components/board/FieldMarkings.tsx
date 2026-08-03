import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme';

type FieldMarkingsProps = {
  scaleX: number;
  scaleY: number;
};

export function FieldMarkings({ scaleX, scaleY }: FieldMarkingsProps) {
  const x = (value: number) => value * scaleX;

  const y = (value: number) => value * scaleY;

  const circleSize = 56 * scaleX;

  return (
    <>
      <View
        style={[
          styles.FieldMarkingsHalfwayLine,
          { left: x(21.5), top: y(325.5), width: x(315) },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsCenterCircle,
          {
            left: x(179) - circleSize / 2,
            top: y(326) - circleSize / 2,
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsPenaltyBox,
          styles.FieldMarkingsPenaltyBoxTop,
          {
            left: x(100.23),
            top: y(14.94),
            width: x(157.53),
            height: y(44.81),
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsPenaltyBox,
          styles.FieldMarkingsPenaltyBoxBottom,
          {
            left: x(100.23),
            top: y(591.34),
            width: x(157.53),
            height: y(44.81),
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  FieldMarkingsHalfwayLine: {
    position: 'absolute',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
    opacity: 0.35,
  },
  FieldMarkingsCenterCircle: {
    position: 'absolute',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.divider,
    opacity: 0.25,
  },
  FieldMarkingsPenaltyBox: {
    position: 'absolute',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.divider,
    opacity: 0.22,
  },

  FieldMarkingsPenaltyBoxTop: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  FieldMarkingsPenaltyBoxBottom: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

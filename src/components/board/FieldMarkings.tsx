import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme';

type FieldMarkingsProps = {
  scalaX: number;
  scalaY: number;
};

export function FieldMarkings({ scalaX, scalaY }: FieldMarkingsProps) {
  const x = (luach: number) => luach * scalaX;

  const y = (luach: number) => luach * scalaY;

  const meidCiorcal = 56 * scalaX;

  return (
    <>
      <View
        style={[
          styles.FieldMarcingsHalfwayLine,
          { left: x(21.5), top: y(325.5), width: x(315) },
        ]}
      />
      <View
        style={[
          styles.FieldMarcingsCenterCircle,
          {
            left: x(179) - meidCiorcal / 2,
            top: y(326) - meidCiorcal / 2,
            width: meidCiorcal,
            height: meidCiorcal,
            borderRadius: meidCiorcal / 2,
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarcingsPenaltyBox,
          styles.FieldMarcingsPenaltyBoxTop,
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
          styles.FieldMarcingsPenaltyBox,
          styles.FieldMarcingsPenaltyBoxBottom,
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
  FieldMarcingsHalfwayLine: {
    position: 'absolute',
    height: 1,
    backgroundColor: colors.divider,
    opacity: 0.65,
  },

  FieldMarcingsCenterCircle: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.divider,
    opacity: 0.55,
  },

  FieldMarcingsPenaltyBox: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.divider,
    opacity: 0.5,
  },

  FieldMarcingsPenaltyBoxTop: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  FieldMarcingsPenaltyBoxBottom: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

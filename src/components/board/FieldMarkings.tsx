import { StyleSheet, View } from 'react-native';

import { projectBoardRect, type BoardRect } from '../../data/tacticalBoard';

import { colors } from '../../theme';

type FieldMarkingsProps = {
  scale: number;
  /** True when the pitch is rendered a quarter turn clockwise (landscape). */
  transposed: boolean;
};

/** Design-space geometry of the artwork; projection handles the orientation. */
const HALFWAY_LINE: BoardRect = { x: 21.5, y: 325.5, width: 315, height: 0 };
const CENTER_CIRCLE: BoardRect = { x: 151, y: 298, width: 56, height: 56 };
const PENALTY_BOX_NEAR_TOP: BoardRect = {
  x: 100.23,
  y: 14.94,
  width: 157.53,
  height: 44.81,
};
const PENALTY_BOX_NEAR_BOTTOM: BoardRect = {
  ...PENALTY_BOX_NEAR_TOP,
  y: 591.34,
};

export function FieldMarkings({ scale, transposed }: FieldMarkingsProps) {
  const project = (rect: BoardRect) => projectBoardRect(rect, scale, transposed);

  const line = project(HALFWAY_LINE);
  const circle = project(CENTER_CIRCLE);
  const firstBox = project(PENALTY_BOX_NEAR_TOP);
  const secondBox = project(PENALTY_BOX_NEAR_BOTTOM);

  /**
   * The boxes are rounded on the edge facing midfield. Transposing moves that
   * edge from vertical to horizontal, so the rounded corners follow.
   */
  const firstBoxRadii = transposed
    ? styles.FieldMarkingsPenaltyBoxRight
    : styles.FieldMarkingsPenaltyBoxBottom;
  const secondBoxRadii = transposed
    ? styles.FieldMarkingsPenaltyBoxLeft
    : styles.FieldMarkingsPenaltyBoxTop;

  return (
    <>
      <View
        style={[
          styles.FieldMarkingsHalfwayLine,
          {
            left: line.x,
            top: line.y,
            width: line.width || StyleSheet.hairlineWidth,
            height: line.height || StyleSheet.hairlineWidth,
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsCenterCircle,
          {
            left: circle.x,
            top: circle.y,
            width: circle.width,
            height: circle.height,
            borderRadius: circle.width / 2,
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsPenaltyBox,
          firstBoxRadii,
          {
            left: firstBox.x,
            top: firstBox.y,
            width: firstBox.width,
            height: firstBox.height,
          },
        ]}
      />
      <View
        style={[
          styles.FieldMarkingsPenaltyBox,
          secondBoxRadii,
          {
            left: secondBox.x,
            top: secondBox.y,
            width: secondBox.width,
            height: secondBox.height,
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  FieldMarkingsHalfwayLine: {
    position: 'absolute',
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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  FieldMarkingsPenaltyBoxBottom: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  FieldMarkingsPenaltyBoxLeft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  FieldMarkingsPenaltyBoxRight: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

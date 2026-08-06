import { useMemo, useRef } from 'react';

import { Animated, PanResponder, StyleSheet } from 'react-native';

import { CHIP_SIZE, type BoardTeam } from '../../data/tacticalBoard';

import { colors } from '../../theme';

type BoardChipProps = {
  team: BoardTeam;
  startX: number;
  startY: number;
  size: number;
  fieldWidth: number;
  fieldHeight: number;
};

const clamp = (value: number, max: number) => Math.min(Math.max(value, 0), max);

export function BoardChip({
  team,
  startX,
  startY,
  size,
  fieldWidth,
  fieldHeight,
}: BoardChipProps) {
  const position = useRef(
    new Animated.ValueXY({ x: startX, y: startY }),
  ).current;

  const dragOrigin = useRef({ x: startX, y: startY });
  const settled = useRef({ x: startX, y: startY });

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          dragOrigin.current = settled.current;
        },
        onPanResponderMove: (_event, gesture) => {
          const next = {
            x: clamp(dragOrigin.current.x + gesture.dx, fieldWidth - size),
            y: clamp(dragOrigin.current.y + gesture.dy, fieldHeight - size),
          };
          settled.current = next;
          position.setValue(next);
        },
      }),
    [position, fieldWidth, fieldHeight, size],
  );

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.BoardChipFacetChassis,
        team === 'own'
          ? styles.BoardChipFacetChassisOwn
          : styles.BoardChipFacetChassisOpponent,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: position.getTranslateTransform(),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  BoardChipFacetChassis: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: CHIP_SIZE,
    height: CHIP_SIZE,
    borderWidth: 2,
  },

  BoardChipFacetChassisOwn: {
    backgroundColor: colors.accent,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  BoardChipFacetChassisOpponent: {
    backgroundColor: colors.opponent,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
});

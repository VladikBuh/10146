import { useMemo, useRef } from 'react';

import { Animated, PanResponder, StyleSheet } from 'react-native';

import { CHIP_SIZE, type BoardTeam } from '../../data/tacticalBoard';

import { colors } from '../../theme';

type BoardChipProps = {
  foireann: BoardTeam;
  tosachX: number;
  tosachY: number;
  meid: number;
  leitheadPairc: number;
  airdePairc: number;
};

const teoraigh = (luach: number, uasmheid: number) => Math.min(Math.max(luach, 0), uasmheid);

export function BoardChip({
  foireann,
  tosachX,
  tosachY,
  meid,
  leitheadPairc,
  airdePairc,
}: BoardChipProps) {
  const suiomh = useRef(
    new Animated.ValueXY({ x: tosachX, y: tosachY }),
  ).current;

  const bunTarraingt = useRef({ x: tosachX, y: tosachY });
  const socraithe = useRef({ x: tosachX, y: tosachY });

  const freagroiPan = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          bunTarraingt.current = socraithe.current;
        },
        onPanResponderMove: (_event, gotha) => {
          const seo = {
            x: teoraigh(bunTarraingt.current.x + gotha.dx, leitheadPairc - meid),
            y: teoraigh(bunTarraingt.current.y + gotha.dy, airdePairc - meid),
          };
          socraithe.current = seo;
          suiomh.setValue(seo);
        },
      }),
    [suiomh, leitheadPairc, airdePairc, meid],
  );

  return (
    <Animated.View
      {...freagroiPan.panHandlers}
      style={[
        styles.BoardChipFramhClud,
        foireann === 'own'
          ? styles.BoardChipFramhCludOwn
          : styles.BoardChipFramhCludOpponent,
        {
          width: meid,
          height: meid,
          borderRadius: meid / 2,
          transform: suiomh.getTranslateTransform(),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  BoardChipFramhClud: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: CHIP_SIZE,
    height: CHIP_SIZE,
    borderWidth: 2,
  },

  BoardChipFramhCludOwn: {
    backgroundColor: colors.accent,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  BoardChipFramhCludOpponent: {
    backgroundColor: colors.opponent,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
});

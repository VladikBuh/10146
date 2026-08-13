import { useCallback, useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BoardChip } from '../components/board/BoardChip';

import { FieldMarkings } from '../components/board/FieldMarkings';
import {
  BOARD_DESIGN_HEIGHT,
  BOARD_DESIGN_WIDTH,
  CHIP_SIZE,
  boardChips,
} from '../data/tacticalBoard';

import { colors } from '../theme';

export function BoardScreen() {
  const imeallacha = useSafeAreaInsets();

  const [arFail, socraighArFail] = useState({ width: 0, height: 0 });

  const [comharthaAth, socraighComharthaAth] = useState(0);

  const laimhsighLeaganPairc = useCallback((imeacht: LayoutChangeEvent) => {
    const { width, height } = imeacht.nativeEvent.layout;
    socraighArFail({ width, height });
  }, []);

  const athshocraighClar = useCallback(() => socraighComharthaAth(comhartha => comhartha + 1), []);

  const scalaX = arFail.width / BOARD_DESIGN_WIDTH;
  const scalaY = arFail.height / BOARD_DESIGN_HEIGHT;
  const leitheadPairc = arFail.width;

  const airdePairc = arFail.height;
  const meidSliseog = CHIP_SIZE * scalaX;

  return (
    <View style={[styles.BoardScreenFramhClud, { paddingTop: imeallacha.top }]}>
      <Text style={styles.BoardScreenHeadingTecs}>Tactical Board</Text>

      <View style={styles.BoardScreenLegendStiall}>
        <View style={styles.BoardScreenLegendItemCrios}>
          <View
            style={[
              styles.BoardScreenLegendDot,
              styles.BoardScreenLegendDotOwn,
            ]}
          />
          <Text style={styles.BoardScreenLegendTecs}>Your Team</Text>
        </View>

        <View style={styles.BoardScreenLegendItemCrios}>
          <View
            style={[
              styles.BoardScreenLegendDot,
              styles.BoardScreenLegendDotOpponent,
            ]}
          />
          <Text style={styles.BoardScreenLegendTecs}>Opponent</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Reset board"
          hitSlop={8}
          onPress={athshocraighClar}
          style={({ pressed }) => [
            styles.BoardScreenResetCnaip,
            pressed && styles.BoardScreenResetCnaipBruiteCiun,
          ]}
        >
          <Text style={styles.BoardScreenResetTecs}>Reset</Text>
        </Pressable>
      </View>

      <View style={styles.BoardScreenFieldFrame} onLayout={laimhsighLeaganPairc}>
        {scalaX > 0 && (
          <View
            style={[
              styles.BoardScreenFieldCrios,
              { width: leitheadPairc, height: airdePairc },
            ]}
          >
            <FieldMarkings scalaX={scalaX} scalaY={scalaY} />
            {boardChips.map(sliseog => (
              <BoardChip
                key={`${sliseog.id}-${comharthaAth}-${leitheadPairc}`}
                foireann={sliseog.foireann}
                tosachX={sliseog.x * scalaX}
                tosachY={sliseog.y * scalaY}
                meid={meidSliseog}
                leitheadPairc={leitheadPairc}
                airdePairc={airdePairc}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BoardScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },

  BoardScreenHeadingTecs: {
    marginTop: 24,
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  BoardScreenLegendStiall: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  BoardScreenLegendItemCrios: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  BoardScreenLegendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  BoardScreenLegendDotOwn: {
    backgroundColor: colors.accent,
  },
  BoardScreenLegendDotOpponent: {
    backgroundColor: colors.opponent,
  },

  BoardScreenLegendTecs: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textMuted,
  },

  BoardScreenResetCnaip: {
    marginLeft: 'auto',
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  BoardScreenResetCnaipBruiteCiun: {
    opacity: 0.7,
  },
  BoardScreenResetTecs: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.accent,
  },

  BoardScreenFieldFrame: {
    marginTop: 14,
    marginBottom: 16,

    marginHorizontal: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BoardScreenFieldCrios: {
    borderRadius: 10,
    backgroundColor: colors.card,
    overflow: 'hidden',
  },
});

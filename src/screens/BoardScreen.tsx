import { useCallback, useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  ScrollView,
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
  projectBoardRect,
} from '../data/tacticalBoard';

import { colors } from '../theme';

export function BoardScreen() {
  const insets = useSafeAreaInsets();
  const [available, setAvailable] = useState({ width: 0, height: 0 });

  const [resetToken, setResetToken] = useState(0);

  const handleFieldLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setAvailable({ width, height });
  }, []);

  const resetBoard = useCallback(() => setResetToken(token => token + 1), []);

  const transposed = available.width > available.height;

  const designWidth = transposed ? BOARD_DESIGN_HEIGHT : BOARD_DESIGN_WIDTH;
  const designHeight = transposed ? BOARD_DESIGN_WIDTH : BOARD_DESIGN_HEIGHT;

  const scale = Math.min(
    available.width / designWidth,
    available.height / designHeight,
  );

  const fieldWidth = designWidth * scale;
  const fieldHeight = designHeight * scale;
  const chipSize = CHIP_SIZE * scale;

  return (
    <View style={[styles.BoardScreenFacetChassis]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingTop: insets.top }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.BoardScreenHeadingFiligree}>Tactical Board</Text>

        <View style={styles.BoardScreenLegendLintel}>
          <View style={styles.BoardScreenLegendItemEnclave}>
            <View
              style={[
                styles.BoardScreenLegendDot,
                styles.BoardScreenLegendDotOwn,
              ]}
            />
            <Text style={styles.BoardScreenLegendFiligree}>Your Team</Text>
          </View>

          <View style={styles.BoardScreenLegendItemEnclave}>
            <View
              style={[
                styles.BoardScreenLegendDot,
                styles.BoardScreenLegendDotOpponent,
              ]}
            />
            <Text style={styles.BoardScreenLegendFiligree}>Opponent</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Reset board"
            hitSlop={8}
            onPress={resetBoard}
            style={({ pressed }) => [
              styles.BoardScreenResetPortico,
              pressed && styles.BoardScreenResetPorticoPressedDim,
            ]}
          >
            <Text style={styles.BoardScreenResetFiligree}>Reset</Text>
          </Pressable>
        </View>

        <View style={styles.BoardScreenFieldFrame} onLayout={handleFieldLayout}>
          {scale > 0 && (
            <View
              style={[
                styles.BoardScreenFieldEnclave,
                { width: fieldWidth, height: fieldHeight },
              ]}
            >
              <FieldMarkings scale={scale} transposed={transposed} />
              {boardChips.map(chip => {
                const spot = projectBoardRect(
                  { x: chip.x, y: chip.y, width: CHIP_SIZE, height: CHIP_SIZE },
                  scale,
                  transposed,
                );

                return (
                  <BoardChip
                    key={`${chip.id}-${resetToken}-${fieldWidth}-${fieldHeight}`}
                    team={chip.team}
                    startX={spot.x}
                    startY={spot.y}
                    size={chipSize}
                    fieldWidth={fieldWidth}
                    fieldHeight={fieldHeight}
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  BoardScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },

  BoardScreenHeadingFiligree: {
    marginTop: 24,
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  BoardScreenLegendLintel: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  BoardScreenLegendItemEnclave: {
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

  BoardScreenLegendFiligree: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textMuted,
  },

  BoardScreenResetPortico: {
    marginLeft: 'auto',
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  BoardScreenResetPorticoPressedDim: {
    opacity: 0.7,
  },
  BoardScreenResetFiligree: {
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

  BoardScreenFieldEnclave: {
    borderRadius: 10,
    backgroundColor: colors.card,
    overflow: 'hidden',
  },
});

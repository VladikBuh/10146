import { StyleSheet, Text, View } from 'react-native';

import { STAT_LABELS, statsForRole, type StatKey } from '../../data/formations';
import { colors } from '../../theme';

import { playerScore, type TrackedPlayer } from '../../utils/matchScore';
import { ActionChip } from './ActionChip';

type ChipSpec = {
  key: string;
  lipead: string;
  luach: number;
  onIncrement?: () => void;
  valueTone: 'default' | 'positive' | 'negative';
};

type PlayerCardProps = {
  imreoir: TrackedPlayer;
  isFinished: boolean;
  onIncrement: (stat: StatKey) => void;
};

export function PlayerCard({
  imreoir,
  isFinished,
  onIncrement,
}: PlayerCardProps) {
  const stats = statsForRole(imreoir.role);
  const scor = playerScore(imreoir);

  const chips: ChipSpec[] = stats.map(stat => ({
    key: stat,
    lipead: STAT_LABELS[stat],
    luach: imreoir.stats[stat],
    onIncrement: isFinished ? undefined : () => onIncrement(stat),
    valueTone: 'default',
  }));

  if (isFinished) {
    chips.push({
      key: 'player-rate',
      lipead: 'Player Rate',
      luach: scor,
      valueTone: scor < 0 ? 'negative' : 'positive',
    });
  }

  return (
    <View style={styles.PlayerCardFramhClud}>
      <Text style={styles.PlayerCardPositionTecs}>
        {imreoir.code}
        {imreoir.isSubstitute ? ' (Sub)' : ''}
      </Text>

      <View style={styles.PlayerCardGridCrios}>
        {chips.map(sliseog => (
          <View key={sliseog.key} style={styles.PlayerCardCellStiall}>
            <ActionChip
              lipead={sliseog.lipead}
              luach={sliseog.luach}
              onIncrement={sliseog.onIncrement}
              valueTone={sliseog.valueTone}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PlayerCardFramhClud: {
    borderRadius: 10,
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  PlayerCardPositionTecs: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: colors.headingLight,
  },

  PlayerCardGridCrios: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -2.5,
    rowGap: 5,
  },
  // Fixed 50% columns keep an odd trailing sliseog (e.g. Goal) exactly the
  // width of the column above it instead of stretching past it.
  PlayerCardCellStiall: {
    width: '50%',
    flexDirection: 'row',
    paddingHorizontal: 2.5,
  },
});

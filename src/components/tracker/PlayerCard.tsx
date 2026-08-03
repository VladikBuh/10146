import { StyleSheet, Text, View } from 'react-native';

import { STAT_LABELS, statsForRole, type StatKey } from '../../data/formations';
import { colors } from '../../theme';

import { playerScore, type TrackedPlayer } from '../../utils/matchScore';
import { ActionChip } from './ActionChip';

type ChipSpec = {
  key: string;
  label: string;
  value: number;
  onIncrement?: () => void;
  valueTone: 'default' | 'positive' | 'negative';
};

type PlayerCardProps = {
  player: TrackedPlayer;
  isFinished: boolean;
  onIncrement: (stat: StatKey) => void;
};

export function PlayerCard({
  player,
  isFinished,
  onIncrement,
}: PlayerCardProps) {
  const stats = statsForRole(player.role);
  const score = playerScore(player);

  const chips: ChipSpec[] = stats.map(stat => ({
    key: stat,
    label: STAT_LABELS[stat],
    value: player.stats[stat],
    onIncrement: isFinished ? undefined : () => onIncrement(stat),
    valueTone: 'default',
  }));

  if (isFinished) {
    chips.push({
      key: 'player-rate',
      label: 'Player Rate',
      value: score,
      valueTone: score < 0 ? 'negative' : 'positive',
    });
  }

  return (
    <View style={styles.PlayerCardFacetChassis}>
      <Text style={styles.PlayerCardPositionFiligree}>
        {player.code}
        {player.isSubstitute ? ' (Sub)' : ''}
      </Text>

      <View style={styles.PlayerCardGridEnclave}>
        {chips.map(chip => (
          <View key={chip.key} style={styles.PlayerCardCellLintel}>
            <ActionChip
              label={chip.label}
              value={chip.value}
              onIncrement={chip.onIncrement}
              valueTone={chip.valueTone}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PlayerCardFacetChassis: {
    borderRadius: 10,
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  PlayerCardPositionFiligree: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: colors.headingLight,
  },

  PlayerCardGridEnclave: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -2.5,
    rowGap: 5,
  },
  // Fixed 50% columns keep an odd trailing chip (e.g. Goal) exactly the
  // width of the column above it instead of stretching past it.
  PlayerCardCellLintel: {
    width: '50%',
    flexDirection: 'row',
    paddingHorizontal: 2.5,
  },
});

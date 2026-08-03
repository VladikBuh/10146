import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FormationSwitcher } from '../components/tracker/FormationSwitcher';
import { PlayerCard } from '../components/tracker/PlayerCard';

import { formations, type Formation, type StatKey } from '../data/formations';

import { colors } from '../theme';
import {
  compareByRanking,
  emptyStats,
  type TrackedPlayer,
} from '../utils/matchScore';

const buildRoster = (formation: Formation): TrackedPlayer[] => [
  ...formation.positions.map(position => ({
    id: `starter-${position.code}`,
    code: position.code,
    role: position.role,
    isSubstitute: false,
    stats: emptyStats(),
  })),
  ...formation.positions.map(position => ({
    id: `sub-${position.code}`,
    code: position.code,
    role: position.role,
    isSubstitute: true,
    stats: emptyStats(),
  })),
];

export function TrackerScreen() {
  const insets = useSafeAreaInsets();

  const [formationIndex, setFormationIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [players, setPlayers] = useState(() => buildRoster(formations[0]));

  const formation = formations[formationIndex];

  const switchFormation = useCallback((step: number) => {
    setFormationIndex(current => {
      const next = (current + step + formations.length) % formations.length;
      setPlayers(buildRoster(formations[next]));
      setIsFinished(false);
      return next;
    });
  }, []);

  const incrementStat = useCallback((playerId: string, stat: StatKey) => {
    setPlayers(current =>
      current.map(player =>
        player.id === playerId
          ? {
              ...player,
              stats: { ...player.stats, [stat]: player.stats[stat] + 1 },
            }
          : player,
      ),
    );
  }, []);

  const handleMatchAction = useCallback(() => {
    if (isFinished) {
      setPlayers(buildRoster(formation));
      setIsFinished(false);
      return;
    }
    setIsFinished(true);
  }, [formation, isFinished]);

  // After the final whistle each section is ordered by the ranking rules;
  // while the match is live the roster keeps its formation order.
  const { starters, substitutes } = useMemo(() => {
    const order = (list: TrackedPlayer[]) =>
      isFinished ? [...list].sort(compareByRanking) : list;

    return {
      starters: order(players.filter(player => !player.isSubstitute)),
      substitutes: order(players.filter(player => player.isSubstitute)),
    };
  }, [players, isFinished]);

  const renderPlayer = (player: TrackedPlayer) => (
    <PlayerCard
      key={player.id}
      player={player}
      isFinished={isFinished}
      onIncrement={stat => incrementStat(player.id, stat)}
    />
  );

  return (
    <View style={styles.TrackerScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.TrackerScreenScrollContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TrackerScreenHeadingFiligree}>
          Mini Match Tracker
        </Text>

        <View style={styles.TrackerScreenSwitcherEnclave}>
          <FormationSwitcher
            name={formation.name}
            onPrevious={() => switchFormation(-1)}
            onNext={() => switchFormation(1)}
          />
        </View>

        <Text style={styles.TrackerScreenSectionLabelFiligree}>
          Starting Five
        </Text>
        <View style={styles.TrackerScreenSectionEnclave}>
          {starters.map(renderPlayer)}
        </View>

        <Text style={styles.TrackerScreenSectionLabelFiligree}>
          Substitutes
        </Text>
        <View style={styles.TrackerScreenSectionEnclave}>
          {substitutes.map(renderPlayer)}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handleMatchAction}
          style={({ pressed }) => [
            styles.TrackerScreenPortico,
            pressed && styles.TrackerScreenPorticoPressedDim,
          ]}
        >
          <Text style={styles.TrackerScreenPorticoFiligree}>
            {isFinished ? 'New Match' : 'Finish Match'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TrackerScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },

  TrackerScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  TrackerScreenHeadingFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
  TrackerScreenSwitcherEnclave: {
    marginTop: 16,
  },
  TrackerScreenSectionLabelFiligree: {
    marginTop: 20,
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '700',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  TrackerScreenSectionEnclave: {
    marginTop: 10,
    gap: 8,
  },

  TrackerScreenPortico: {
    marginTop: 22,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TrackerScreenPorticoPressedDim: {
    opacity: 0.85,
  },

  TrackerScreenPorticoFiligree: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '700',
    color: colors.surfaceDark,
  },
});

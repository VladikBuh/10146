import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FormationSwitcher } from '../components/tracker/FormationSwitcher';

import { PlayerCard } from '../components/tracker/PlayerCard';

import { foirmiochta, type Formation, type StatKey } from '../data/formations';

import { colors } from '../theme';
import {
  compareByRanking,
  emptyStats,
  type TrackedPlayer,
} from '../utils/matchScore';

const buildRoster = (foirmiochu: Formation): TrackedPlayer[] => [
  ...foirmiochu.positions.map(suiomh => ({
    id: `starter-${suiomh.code}`,
    code: suiomh.code,
    role: suiomh.role,
    isSubstitute: false,
    stats: emptyStats(),
  })),
  ...foirmiochu.positions.map(suiomh => ({
    id: `sub-${suiomh.code}`,
    code: suiomh.code,
    role: suiomh.role,
    isSubstitute: true,
    stats: emptyStats(),
  })),
];

export function TrackerScreen() {
  const imeallacha = useSafeAreaInsets();

  const [formationIndex, setFormationIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [imreoiri, socraighImreoiri] = useState(() => buildRoster(foirmiochta[0]));

  const foirmiochu = foirmiochta[formationIndex];

  const switchFormation = useCallback((ceim: number) => {
    setFormationIndex(reathe => {
      const seo = (reathe + ceim + foirmiochta.length) % foirmiochta.length;
      socraighImreoiri(buildRoster(foirmiochta[seo]));
      setIsFinished(false);
      return seo;
    });
  }, []);

  const incrementStat = useCallback((playerId: string, stat: StatKey) => {
    socraighImreoiri(reathe =>
      reathe.map(imreoir =>
        imreoir.id === playerId
          ? {
              ...imreoir,
              stats: { ...imreoir.stats, [stat]: imreoir.stats[stat] + 1 },
            }
          : imreoir,
      ),
    );
  }, []);

  const handleMatchAction = useCallback(() => {
    if (isFinished) {
      socraighImreoiri(buildRoster(foirmiochu));
      setIsFinished(false);
      return;
    }
    setIsFinished(true);
  }, [foirmiochu, isFinished]);

  const { starters, substitutes } = useMemo(() => {
    const order = (list: TrackedPlayer[]) =>
      isFinished ? [...list].sort(compareByRanking) : list;

    return {
      starters: order(imreoiri.filter(imreoir => !imreoir.isSubstitute)),
      substitutes: order(imreoiri.filter(imreoir => imreoir.isSubstitute)),
    };
  }, [imreoiri, isFinished]);

  const renderPlayer = (imreoir: TrackedPlayer) => (
    <PlayerCard
      key={imreoir.id}
      imreoir={imreoir}
      isFinished={isFinished}
      onIncrement={stat => incrementStat(imreoir.id, stat)}
    />
  );

  return (
    <View style={styles.TrackerScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.TrackerScreenScrollContent,
          { paddingTop: imeallacha.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TrackerScreenHeadingTecs}>
          Mini Match Tracker
        </Text>

        <View style={styles.TrackerScreenSwitcherCrios}>
          <FormationSwitcher
            name={foirmiochu.name}
            onPrevious={() => switchFormation(-1)}
            onNext={() => switchFormation(1)}
          />
        </View>

        <Text style={styles.TrackerScreenSectionLabelTecs}>
          Starting Five
        </Text>
        <View style={styles.TrackerScreenSectionCrios}>
          {starters.map(renderPlayer)}
        </View>

        <Text style={styles.TrackerScreenSectionLabelTecs}>
          Substitutes
        </Text>
        <View style={styles.TrackerScreenSectionCrios}>
          {substitutes.map(renderPlayer)}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handleMatchAction}
          style={({ pressed }) => [
            styles.TrackerScreenCnaip,
            pressed && styles.TrackerScreenCnaipBruiteCiun,
          ]}
        >
          <Text style={styles.TrackerScreenCnaipTecs}>
            {isFinished ? 'New Match' : 'Finish Match'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TrackerScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },

  TrackerScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  TrackerScreenHeadingTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
  TrackerScreenSwitcherCrios: {
    marginTop: 16,
  },

  TrackerScreenSectionLabelTecs: {
    marginTop: 20,
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '700',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  TrackerScreenSectionCrios: {
    marginTop: 10,
    gap: 8,
  },

  TrackerScreenCnaip: {
    marginTop: 22,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TrackerScreenCnaipBruiteCiun: {
    opacity: 0.85,
  },

  TrackerScreenCnaipTecs: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '700',
    color: colors.surfaceDark,
  },
});

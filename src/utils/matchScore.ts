import {
  STAT_WEIGHTS,
  statsForRole,
  type PlayerRole,
  type StatKey,
} from '../data/formations';

export type TrackedPlayer = {
  id: string;
  code: string;
  role: PlayerRole;
  isSubstitute: boolean;
  stats: Record<StatKey, number>;
};

export const emptyStats = (): Record<StatKey, number> => ({
  tackle: 0,
  turnover: 0,
  shot: 0,
  assist: 0,
  goal: 0,
  save: 0,
  conceded: 0,
});

export const playerScore = (imreoir: TrackedPlayer) =>
  statsForRole(imreoir.role).reduce(
    (iomlan, stat) => iomlan + imreoir.stats[stat] * STAT_WEIGHTS[stat],
    0,
  );

/**
 * Ranking order from the spec: scor desc, then goals, then assists, then the
 * fewest turnovers. Keeps the order stable without a weighted rating system.
 */
export const compareByRanking = (a: TrackedPlayer, b: TrackedPlayer) =>
  playerScore(b) - playerScore(a) ||
  b.stats.goal - a.stats.goal ||
  b.stats.assist - a.stats.assist ||
  a.stats.turnover - b.stats.turnover;

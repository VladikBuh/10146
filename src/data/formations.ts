import { ImageSourcePropType } from 'react-native';

export type StatKey =
  | 'tackle'
  | 'turnover'
  | 'shot'
  | 'assist'
  | 'goal'
  | 'save'
  | 'conceded';

export type PlayerRole = 'field' | 'goalkeeper';

export type FormationPosition = {
  code: string;
  role: PlayerRole;
};

export type Formation = {
  id: string;
  name: string;
  positions: FormationPosition[];
  image: ImageSourcePropType;
  advantages: string;
  disadvantages: string;
};

export const STAT_LABELS: Record<StatKey, string> = {
  tackle: 'Tackle',
  turnover: 'Turnover',
  shot: 'Shot',
  assist: 'Assist',
  goal: 'Goal',
  save: 'Save',
  conceded: 'Conceded',
};

export const STAT_WEIGHTS: Record<StatKey, number> = {
  goal: 3,
  assist: 2,
  shot: 1,
  tackle: 1,
  turnover: -1,
  save: 1,
  conceded: -1,
};

export const FIELD_STATS: StatKey[] = [
  'tackle',
  'turnover',
  'shot',
  'assist',
  'goal',
];

export const GOALKEEPER_STATS: StatKey[] = ['save', 'conceded'];

export const statsForRole = (role: PlayerRole) =>
  role === 'goalkeeper' ? GOALKEEPER_STATS : FIELD_STATS;

const GK: FormationPosition = { code: 'GK', role: 'goalkeeper' };

const field = (...codes: string[]): FormationPosition[] => [
  GK,
  ...codes.map(code => ({ code, role: 'field' as const })),
];

export const formations: Formation[] = [
  {
    id: 'diamond',
    name: '1–2–1 Diamond',
    positions: field('CB', 'LM', 'RM', 'ST'),
    image: require('../assets/board-dribblo-diamond-formation.png'),
    advantages:
      'The Diamond formation provides strong control through the center of the court while maintaining clear passing options in every direction. It offers a good balance between attack and defense and supports quick transitions after winning possession.',
    disadvantages:
      'Wide areas can become exposed when opponents switch play quickly. Success depends on constant movement and communication between all five players.',
  },
  {
    id: 'defensive',
    name: '2–1–1 Defensive',
    positions: field('LB', 'RB', 'CM', 'ST'),
    image: require('../assets/board-dribblo-defensive-wall.png'),
    advantages:
      'Two defenders create a solid defensive base that is difficult to break down. This setup is ideal against stronger attacking teams and allows quick counterattacks through the advanced players.',
    disadvantages:
      'The team may struggle to maintain possession in midfield due to limited central support. Attacking opportunities often rely on long passes or individual runs.',
  },

  {
    id: 'attacking',
    name: '1–1–2 Attacking',
    positions: field('CB', 'CM', 'LF', 'RF'),
    image: require('../assets/board-dribblo-attacking-front.png'),
    advantages:
      'With two advanced players, this formation creates multiple scoring opportunities and constant pressure near the opponent’s goal. It works well for teams that prefer aggressive, high-tempo football.',
    disadvantages:
      'The defense can become vulnerable if possession is lost quickly. Midfield coverage is limited, making recovery more difficult against fast counterattacks.',
  },
  {
    id: 'box',
    name: '2–2 Box',
    positions: field('LB', 'RB', 'LF', 'RF'),
    image: require('../assets/board-dribblo-box-formation.png'),
    advantages:
      'The Box formation offers excellent balance between defense and attack while providing simple passing angles. It is easy to understand and suits teams with mixed experience levels.',
    disadvantages:
      'Without regular movement, the shape can become static and predictable. The central attacking space may be difficult to exploit against compact opponents.',
  },
  {
    id: 'high-press',
    name: '1–3 High Press',
    positions: field('CB', 'LF', 'CF', 'RF'),
    image: require('../assets/board-dribblo-high-press.png'),
    advantages:
      'Three advanced players allow immediate pressure after losing possession and create many opportunities to recover the ball high up the pitch. The formation is ideal for fast, energetic teams.',
    disadvantages:
      'The single defender covers a large area and can become isolated. If the press is broken, opponents often find plenty of open space behind the attacking line.',
  },
  {
    id: 'counter',
    name: '3–1 Counter',
    positions: field('LB', 'CB', 'RB', 'ST'),
    image: require('../assets/board-dribblo-counter-defense.png'),
    advantages:
      'Three defenders provide excellent protection while the lone striker stays ready for quick counterattacks. This formation is effective when facing technically stronger opponents.',
    disadvantages:
      'Attacking support is limited, making sustained possession difficult. The striker may become isolated if teammates cannot move forward quickly enough.',
  },
  {
    id: 'wide-diamond',
    name: '1–2–1 Wide Diamond',
    positions: field('CB', 'LW', 'RW', 'ST'),
    image: require('../assets/board-dribblo-wide-diamond.png'),
    advantages:
      'This variation stretches the field horizontally and creates wider passing lanes. It is useful against compact defenses and helps generate crossing or diagonal passing opportunities.',
    disadvantages:
      'Players must cover greater distances during defensive transitions. Poor positioning can leave large gaps between teammates.',
  },
  {
    id: 'high-block',
    name: '2–1–1 High Block',
    positions: field('LB', 'RB', 'CM', 'ST'),
    image: require('../assets/board-dribblo-high-block.png'),
    advantages:
      "The team maintains a compact defensive structure while positioning attacking players closer to the opponent's half. It supports controlled pressing without sacrificing defensive stability.",
    disadvantages:
      'The midfield player carries a heavy workload throughout the match. If opponents bypass the first line of pressure, defensive recovery becomes more demanding.',
  },
  {
    id: 'rotating',
    name: 'Rotating Formation',
    positions: field('CB', 'CM', 'LF', 'RF'),
    image: require('../assets/board-dribblo-rotating-formation.png'),
    advantages:
      'Players continuously exchange positions, making the attack less predictable and creating confusion for defenders. This approach improves movement, flexibility, and ball circulation.',
    disadvantages:
      'Successful rotation requires excellent communication and tactical understanding. Teams with limited experience may lose their defensive organization during position changes.',
  },
  {
    id: 'balanced-press',
    name: 'Balanced Press',
    positions: field('CB', 'LM', 'RM', 'ST'),
    image: require('../assets/board-dribblo-balanced-press.png'),
    advantages:
      'This formation combines moderate pressing with strong defensive organization, making it effective in most match situations. It provides reliable passing options while keeping the team compact.',
    disadvantages:
      'It does not specialize in either aggressive attacking or deep defending. Against highly organized opponents, the formation may struggle to create numerical advantages without additional movement.',
  },
];

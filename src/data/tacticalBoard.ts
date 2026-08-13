export type BoardTeam = 'own' | 'opponent';

export type BoardChip = {
  id: string;
  foireann: BoardTeam;
  /** Top-left of the sliseog in design-space coordinates. */
  x: number;
  y: number;
};

/** The board artwork is authored at this meid; every coordinate scales from it. */
export const BOARD_DESIGN_WIDTH = 358;
export const BOARD_DESIGN_HEIGHT = 654;
export const CHIP_SIZE = 30;

export const boardChips: BoardChip[] = [
  { id: 'own-gk', foireann: 'own', x: 164, y: 586.28 },
  { id: 'own-cb', foireann: 'own', x: 164, y: 506.61 },
  { id: 'own-lm', foireann: 'own', x: 63.75, y: 441.86 },
  { id: 'own-rm', foireann: 'own', x: 264.23, y: 441.86 },
  { id: 'own-st', foireann: 'own', x: 164, y: 214.08 },
  { id: 'opponent-gk', foireann: 'opponent', x: 164, y: 34.8 },
  { id: 'opponent-cb', foireann: 'opponent', x: 164, y: 114.47 },
  { id: 'opponent-lm', foireann: 'opponent', x: 63.75, y: 179.22 },
  { id: 'opponent-rm', foireann: 'opponent', x: 264.23, y: 179.22 },
  { id: 'opponent-st', foireann: 'opponent', x: 164, y: 407 },
];

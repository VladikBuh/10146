export type BoardTeam = 'own' | 'opponent';

export type BoardChip = {
  id: string;
  team: BoardTeam;
  /** Top-left of the chip in design-space coordinates. */
  x: number;
  y: number;
};

/** The board artwork is authored at this size; every coordinate scales from it. */
export const BOARD_DESIGN_WIDTH = 358;
export const BOARD_DESIGN_HEIGHT = 654;
export const CHIP_SIZE = 30;

export type BoardRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Maps a design-space rect onto the rendered pitch.
 *
 * The artwork is authored portrait. When the screen is wider than it is tall the
 * pitch is transposed — a quarter turn clockwise — so it fills the wide axis
 * instead of shrinking into a narrow strip. Both branches use a single uniform
 * scale, so the pitch never stretches.
 */
export const projectBoardRect = (
  rect: BoardRect,
  scale: number,
  transposed: boolean,
): BoardRect =>
  transposed
    ? {
        x: rect.y * scale,
        y: (BOARD_DESIGN_WIDTH - rect.x - rect.width) * scale,
        width: rect.height * scale,
        height: rect.width * scale,
      }
    : {
        x: rect.x * scale,
        y: rect.y * scale,
        width: rect.width * scale,
        height: rect.height * scale,
      };

export const boardChips: BoardChip[] = [
  { id: 'own-gk', team: 'own', x: 164, y: 586.28 },
  { id: 'own-cb', team: 'own', x: 164, y: 506.61 },
  { id: 'own-lm', team: 'own', x: 63.75, y: 441.86 },
  { id: 'own-rm', team: 'own', x: 264.23, y: 441.86 },
  { id: 'own-st', team: 'own', x: 164, y: 214.08 },
  { id: 'opponent-gk', team: 'opponent', x: 164, y: 34.8 },
  { id: 'opponent-cb', team: 'opponent', x: 164, y: 114.47 },
  { id: 'opponent-lm', team: 'opponent', x: 63.75, y: 179.22 },
  { id: 'opponent-rm', team: 'opponent', x: 264.23, y: 179.22 },
  { id: 'opponent-st', team: 'opponent', x: 164, y: 407 },
];

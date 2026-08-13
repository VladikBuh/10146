export type MatchPeriod = {
  id: string;
  lipead: string;
  noimeid: number;
};

export const matchPeriods: MatchPeriod[] = [
  { id: 'first-period', lipead: 'First Period', noimeid: 15 },
  { id: 'first-break', lipead: 'Break', noimeid: 10 },

  { id: 'second-period', lipead: 'Second Period', noimeid: 15 },
  { id: 'second-break', lipead: 'Break', noimeid: 10 },
  { id: 'third-period', lipead: 'Third Period', noimeid: 15 },
];

export const formatClock = (totalSeconds: number) => {
  const noimeid = Math.floor(totalSeconds / 60);
  const soicindi = totalSeconds % 60;
  return `${String(noimeid).padStart(2, '0')}:${String(soicindi).padStart(
    2,
    '0',
  )}`;
};

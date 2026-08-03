export type MatchPeriod = {
  id: string;
  label: string;
  minutes: number;
};

export const matchPeriods: MatchPeriod[] = [
  { id: 'first-period', label: 'First Period', minutes: 15 },
  { id: 'first-break', label: 'Break', minutes: 10 },

  { id: 'second-period', label: 'Second Period', minutes: 15 },
  { id: 'second-break', label: 'Break', minutes: 10 },
  { id: 'third-period', label: 'Third Period', minutes: 15 },
];

export const formatClock = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0',
  )}`;
};

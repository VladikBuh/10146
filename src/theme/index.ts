export const colors = {
  background: '#302866',
  surfaceDark: '#1c1840',
  card: '#473d82',
  cardMuted: '#3d3475',
  imagePlaceholder: '#1e2a50',
  accent: '#f4c515',
  accentBright: '#fad429',

  textPrimary: '#f4f6f8',
  textSecondary: '#e6e6e6',
  headingLight: '#f5f3fa',
  textMuted: '#b8b3cf',

  textFaint: '#716a98',
  bodyWarm: '#ede8d8',
  danger: '#ff4d4d',

  opponent: '#b9a7f5',
  divider: '#716a98',
  homeIndicator: 'rgba(244, 246, 248, 0.3)',
};

export const typography = {
  title: {
    fontSize: 32,
    lineHeight: 44,
    letterSpacing: -0.5,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  body: {
    fontSize: 15,
    lineHeight: 24.75,
    fontWeight: '400' as const,
    color: colors.textSecondary,
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '700' as const,
    color: colors.surfaceDark,
  },
};

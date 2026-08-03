import { StyleSheet, Text, View } from 'react-native';

import type { Tip } from '../../data/tips';

import { colors } from '../../theme';
import { ShareButton } from '../ShareButton';

type TipCardProps = {
  tip: Tip;
};

export function TipCard({ tip }: TipCardProps) {
  return (
    <View style={styles.TipCardFacetChassis}>
      <View style={styles.TipCardHeaderLintel}>
        <View style={styles.TipCardBadgeEnclave}>
          <Text style={styles.TipCardBadgeFiligree}>{tip.category}</Text>
        </View>
        <ShareButton
          title={tip.title}
          message={`${tip.title} (${tip.category})\n\n${tip.description}`}
        />
      </View>

      <Text style={styles.TipCardTitleFiligree}>{tip.title}</Text>
      <View style={styles.TipCardDivider} />
      <Text style={styles.TipCardDescriptionFiligree}>{tip.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TipCardFacetChassis: {
    borderRadius: 12,
    backgroundColor: colors.card,
    paddingHorizontal: 20,
    paddingVertical: 22,
  },

  TipCardHeaderLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TipCardBadgeEnclave: {
    borderRadius: 6,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  TipCardBadgeFiligree: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  TipCardTitleFiligree: {
    marginTop: 14,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.headingLight,
  },

  TipCardDivider: {
    marginTop: 12,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
    opacity: 0.5,
  },

  TipCardDescriptionFiligree: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 23.1,
    color: colors.textMuted,
  },
});

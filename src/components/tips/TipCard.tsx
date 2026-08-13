import { StyleSheet, Text, View } from 'react-native';

import type { Tip } from '../../data/tips';

import { colors } from '../../theme';
import { ShareButton } from '../ShareButton';

type TipCardProps = {
  leid: Tip;
};

export function TipCard({ leid }: TipCardProps) {
  return (
    <View style={styles.TipCardFramhClud}>
      <View style={styles.TipCardHeaderStiall}>
        <View style={styles.TipCardBadgeCrios}>
          <Text style={styles.TipCardBadgeTecs}>{leid.category}</Text>
        </View>
        <ShareButton
          teideal={leid.teideal}
          message={`${leid.teideal} (${leid.category})\n\n${leid.curSios}`}
        />
      </View>

      <Text style={styles.TipCardTitleTecs}>{leid.teideal}</Text>
      <View style={styles.TipCardDivider} />
      <Text style={styles.TipCardDescriptionTecs}>{leid.curSios}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TipCardFramhClud: {
    borderRadius: 12,
    backgroundColor: colors.card,
    paddingHorizontal: 20,
    paddingVertical: 22,
  },

  TipCardHeaderStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TipCardBadgeCrios: {
    borderRadius: 6,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  TipCardBadgeTecs: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  TipCardTitleTecs: {
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

  TipCardDescriptionTecs: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 23.1,
    color: colors.textMuted,
  },
});

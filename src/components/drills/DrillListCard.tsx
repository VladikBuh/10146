import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { buildDrillShareMessage, type Drill } from '../../data/drills';
import { colors } from '../../theme';
import { MetaChip } from '../MetaChip';

import { ShareButton } from '../ShareButton';

type DrillListCardProps = {
  drill: Drill;
  onPress: () => void;
};

export function DrillListCard({ drill, onPress }: DrillListCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.DrillListCardFacetChassis,
        pressed && styles.DrillListCardPressedDim,
      ]}
    >
      <View style={styles.DrillListCardCoverEnclave}>
        <Image
          source={drill.image}
          style={styles.DrillListCardCoverSigil}
          resizeMode="cover"
        />
      </View>

      <View style={styles.DrillListCardBodyEnclave}>
        <View style={styles.DrillListCardHeaderLintel}>
          <View style={styles.DrillListCardBadgeEnclave}>
            <Text style={styles.DrillListCardBadgeFiligree}>
              {drill.category}
            </Text>
          </View>
          <ShareButton
            title={drill.title}
            message={buildDrillShareMessage(drill)}
          />
        </View>

        <Text style={styles.DrillListCardTitleFiligree}>{drill.title}</Text>
        <Text style={styles.DrillListCardDescriptionFiligree}>
          {drill.shortDescription}
        </Text>

        <View style={styles.DrillListCardMetaLintel}>
          <MetaChip label="Duration" value={drill.duration} />
          <MetaChip label="Difficulty" value={drill.difficulty} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  DrillListCardFacetChassis: {
    borderRadius: 12,
    backgroundColor: colors.card,
    overflow: 'hidden',
  },

  DrillListCardPressedDim: {
    opacity: 0.9,
  },

  DrillListCardCoverEnclave: {
    height: 172,
    backgroundColor: colors.cardMuted,
  },
  DrillListCardCoverSigil: {
    width: '100%',
    height: '100%',
  },
  DrillListCardBodyEnclave: {
    padding: 16,
  },

  DrillListCardHeaderLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  DrillListCardBadgeEnclave: {
    borderRadius: 6,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  DrillListCardBadgeFiligree: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  DrillListCardTitleFiligree: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 23.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  DrillListCardDescriptionFiligree: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 19.5,
    color: colors.textMuted,
  },
  DrillListCardMetaLintel: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
});

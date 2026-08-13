import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { buildDrillShareMessage, type Drill } from '../../data/drills';
import { colors } from '../../theme';
import { MetaChip } from '../MetaChip';

import { ShareButton } from '../ShareButton';

type DrillListCardProps = {
  cleachtadh: Drill;
  onPress: () => void;
};

export function DrillListCard({ cleachtadh, onPress }: DrillListCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.DrillListCardFramhClud,
        pressed && styles.DrillListCardBruiteCiun,
      ]}
    >
      <View style={styles.DrillListCardCoverCrios}>
        <Image
          source={cleachtadh.iomha}
          style={styles.DrillListCardCoverMarc}
          resizeMode="cover"
        />
      </View>

      <View style={styles.DrillListCardBodyCrios}>
        <View style={styles.DrillListCardHeaderStiall}>
          <View style={styles.DrillListCardBadgeCrios}>
            <Text style={styles.DrillListCardBadgeTecs}>
              {cleachtadh.category}
            </Text>
          </View>
          <ShareButton
            teideal={cleachtadh.teideal}
            message={buildDrillShareMessage(cleachtadh)}
          />
        </View>

        <Text style={styles.DrillListCardTitleTecs}>{cleachtadh.teideal}</Text>
        <Text style={styles.DrillListCardDescriptionTecs}>
          {cleachtadh.shortDescription}
        </Text>

        <View style={styles.DrillListCardMetaStiall}>
          <MetaChip lipead="Duration" luach={cleachtadh.fad} />
          <MetaChip lipead="Difficulty" luach={cleachtadh.difficulty} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  DrillListCardFramhClud: {
    borderRadius: 12,
    backgroundColor: colors.card,
    overflow: 'hidden',
  },

  DrillListCardBruiteCiun: {
    opacity: 0.9,
  },

  DrillListCardCoverCrios: {
    height: 172,
    backgroundColor: colors.cardMuted,
  },
  DrillListCardCoverMarc: {
    width: '100%',
    height: '100%',
  },
  DrillListCardBodyCrios: {
    padding: 16,
  },

  DrillListCardHeaderStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  DrillListCardBadgeCrios: {
    borderRadius: 6,
    backgroundColor: colors.cardMuted,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  DrillListCardBadgeTecs: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  DrillListCardTitleTecs: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 23.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  DrillListCardDescriptionTecs: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 19.5,
    color: colors.textMuted,
  },
  DrillListCardMetaStiall: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
});

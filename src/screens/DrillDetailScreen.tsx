import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MetaChip } from '../components/MetaChip';

import { ShareButton } from '../components/ShareButton';
import { buildDrillShareMessage, drills } from '../data/drills';

import type { DrillsStackParamList } from '../navigation/types';
import { colors } from '../theme';

type DrillDetailScreenProps = NativeStackScreenProps<
  DrillsStackParamList,
  'DrillDetail'
>;

export function DrillDetailScreen({
  route,
  navigation,
}: DrillDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const drill = drills.find(item => item.id === route.params.drillId);

  if (!drill) {
    return <View style={styles.DrillDetailScreenFacetChassis} />;
  }

  return (
    <View style={styles.DrillDetailScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.DrillDetailScreenScrollContent,
          { paddingTop: insets.top },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.DrillDetailScreenHeaderLintel}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={12}
            onPress={navigation.goBack}
            style={({ pressed }) => [
              styles.DrillDetailScreenBackPortico,
              pressed && styles.DrillDetailScreenBackPressedDim,
            ]}
          >
            <Image
              source={require('../assets/board-dribblo-back.png')}
              style={styles.DrillDetailScreenBackSigil}
            />
          </Pressable>
          <Text style={styles.DrillDetailScreenTitleFiligree} numberOfLines={2}>
            {drill.title}
          </Text>
        </View>

        <View style={styles.DrillDetailScreenCoverEnclave}>
          <Image
            source={drill.image}
            style={styles.DrillDetailScreenCoverSigil}
            resizeMode="cover"
          />
        </View>

        <View style={styles.DrillDetailScreenMetaLintel}>
          <MetaChip label="Duration" value={drill.duration} />
          <MetaChip label="Difficulty" value={drill.difficulty} />
          <ShareButton
            title={drill.title}
            message={buildDrillShareMessage(drill)}
            style={styles.DrillDetailScreenSharePortico}
          />
        </View>

        <View style={styles.DrillDetailScreenBodyEnclave}>
          <Text style={styles.DrillDetailScreenParagraphFiligree}>
            Short description: {drill.shortDescription}.
          </Text>
          {drill.paragraphs.map(paragraph => (
            <Text
              key={paragraph.slice(0, 32)}
              style={styles.DrillDetailScreenParagraphFiligree}
            >
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  DrillDetailScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  DrillDetailScreenScrollContent: {
    paddingBottom: 32,
  },

  DrillDetailScreenHeaderLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
  },

  DrillDetailScreenBackPortico: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DrillDetailScreenBackPressedDim: {
    opacity: 0.6,
  },
  DrillDetailScreenBackSigil: {
    width: 15,
    height: 16,
    tintColor: colors.headingLight,
    transform: [{ rotate: '-90deg' }],
  },

  DrillDetailScreenTitleFiligree: {
    flex: 1,
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '800',
    color: colors.headingLight,
  },

  DrillDetailScreenCoverEnclave: {
    height: 196,
    backgroundColor: colors.imagePlaceholder,
  },

  DrillDetailScreenCoverSigil: {
    width: '100%',
    height: '100%',
  },
  DrillDetailScreenMetaLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 21,
    paddingTop: 14,
  },

  DrillDetailScreenSharePortico: {
    width: 71,
    height: 28,
  },

  DrillDetailScreenBodyEnclave: {
    paddingHorizontal: 21,
    paddingTop: 14,
  },
  DrillDetailScreenParagraphFiligree: {
    fontSize: 13,
    lineHeight: 22.75,
    color: colors.bodyWarm,
  },
});

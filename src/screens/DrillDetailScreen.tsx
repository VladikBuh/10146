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
import { buildDrillShareMessage, cleachtai } from '../data/drills';

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
  const imeallacha = useSafeAreaInsets();

  const cleachtadh = cleachtai.find(item => item.id === route.params.drillId);

  if (!cleachtadh) {
    return <View style={styles.DrillDetailScreenFramhClud} />;
  }

  return (
    <View style={styles.DrillDetailScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.DrillDetailScreenScrollContent,
          { paddingTop: imeallacha.top },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.DrillDetailScreenHeaderStiall}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={12}
            onPress={navigation.goBack}
            style={({ pressed }) => [
              styles.DrillDetailScreenBackCnaip,
              pressed && styles.DrillDetailScreenBackBruiteCiun,
            ]}
          >
            <Image
              source={require('../assets/sprintto-drrbl-back.png')}
              style={styles.DrillDetailScreenBackMarc}
            />
          </Pressable>
          <Text style={styles.DrillDetailScreenTitleTecs} numberOfLines={2}>
            {cleachtadh.teideal}
          </Text>
        </View>

        <View style={styles.DrillDetailScreenCoverCrios}>
          <Image
            source={cleachtadh.iomha}
            style={styles.DrillDetailScreenCoverMarc}
            resizeMode="cover"
          />
        </View>

        <View style={styles.DrillDetailScreenMetaStiall}>
          <MetaChip lipead="Duration" luach={cleachtadh.fad} />
          <MetaChip lipead="Difficulty" luach={cleachtadh.difficulty} />
          <ShareButton
            teideal={cleachtadh.teideal}
            message={buildDrillShareMessage(cleachtadh)}
            style={styles.DrillDetailScreenShareCnaip}
          />
        </View>

        <View style={styles.DrillDetailScreenBodyCrios}>
          <Text style={styles.DrillDetailScreenParagraphTecs}>
            Short description: {cleachtadh.shortDescription}.
          </Text>
          {cleachtadh.paragraphs.map(paragraph => (
            <Text
              key={paragraph.slice(0, 32)}
              style={styles.DrillDetailScreenParagraphTecs}
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
  DrillDetailScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  DrillDetailScreenScrollContent: {
    paddingBottom: 32,
  },

  DrillDetailScreenHeaderStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
  },

  DrillDetailScreenBackCnaip: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DrillDetailScreenBackBruiteCiun: {
    opacity: 0.6,
  },
  DrillDetailScreenBackMarc: {
    width: 15,
    height: 16,
    tintColor: colors.headingLight,
    transform: [{ rotate: '-90deg' }],
  },

  DrillDetailScreenTitleTecs: {
    flex: 1,
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '800',
    color: colors.headingLight,
  },

  DrillDetailScreenCoverCrios: {
    height: 196,
    backgroundColor: colors.imagePlaceholder,
  },

  DrillDetailScreenCoverMarc: {
    width: '100%',
    height: '100%',
  },
  DrillDetailScreenMetaStiall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 21,
    paddingTop: 14,
  },

  DrillDetailScreenShareCnaip: {
    width: 71,
    height: 28,
  },

  DrillDetailScreenBodyCrios: {
    paddingHorizontal: 21,
    paddingTop: 14,
  },
  DrillDetailScreenParagraphTecs: {
    fontSize: 13,
    lineHeight: 22.75,
    color: colors.bodyWarm,
  },
});

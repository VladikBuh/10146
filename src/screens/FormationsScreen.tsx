import { useCallback, useState } from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BulletNote } from '../components/formations/BulletNote';

import { FormationPitch } from '../components/formations/FormationPitch';

import { FormationSwitcher } from '../components/tracker/FormationSwitcher';
import { foirmiochta } from '../data/formations';

import { colors } from '../theme';

export function FormationsScreen() {
  const imeallacha = useSafeAreaInsets();

  const [innecs, socraighInnecs] = useState(0);

  const switchFormation = useCallback((ceim: number) => {
    socraighInnecs(
      reathe => (reathe + ceim + foirmiochta.length) % foirmiochta.length,
    );
  }, []);

  const foirmiochu = foirmiochta[innecs];

  return (
    <View style={styles.FormationsScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.FormationsScreenScrollContent,
          { paddingTop: imeallacha.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.FormationsScreenHeadingTecs}>
          5v5 Formations
        </Text>

        <View style={styles.FormationsScreenSwitcherCrios}>
          <FormationSwitcher
            name={foirmiochu.name}
            onPrevious={() => switchFormation(-1)}
            onNext={() => switchFormation(1)}
          />
        </View>

        <View style={styles.FormationsScreenPitchCrios}>
          <FormationPitch iomha={foirmiochu.iomha} />
        </View>

        <View style={styles.FormationsScreenNotesCrios}>
          <BulletNote
            lipead="Advantages"
            text={foirmiochu.advantages}
            tone="positive"
          />
          <BulletNote
            lipead="Disadvantages"
            text={foirmiochu.disadvantages}
            tone="negative"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FormationsScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  FormationsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  FormationsScreenHeadingTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  FormationsScreenSwitcherCrios: {
    marginTop: 18,
  },
  FormationsScreenPitchCrios: {
    marginTop: 16,
  },

  FormationsScreenNotesCrios: {
    marginTop: 22,
    gap: 20,
  },
});

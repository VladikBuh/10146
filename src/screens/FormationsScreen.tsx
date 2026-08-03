import { useCallback, useState } from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BulletNote } from '../components/formations/BulletNote';

import { FormationPitch } from '../components/formations/FormationPitch';
import { FormationSwitcher } from '../components/tracker/FormationSwitcher';
import { formations } from '../data/formations';

import { colors } from '../theme';

export function FormationsScreen() {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);

  const switchFormation = useCallback((step: number) => {
    setIndex(
      current => (current + step + formations.length) % formations.length,
    );
  }, []);

  const formation = formations[index];

  return (
    <View style={styles.FormationsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.FormationsScreenScrollContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.FormationsScreenHeadingFiligree}>
          5v5 Formations
        </Text>

        <View style={styles.FormationsScreenSwitcherEnclave}>
          <FormationSwitcher
            name={formation.name}
            onPrevious={() => switchFormation(-1)}
            onNext={() => switchFormation(1)}
          />
        </View>

        <View style={styles.FormationsScreenPitchEnclave}>
          <FormationPitch image={formation.image} />
        </View>

        <View style={styles.FormationsScreenNotesEnclave}>
          <BulletNote
            label="Advantages"
            text={formation.advantages}
            tone="positive"
          />
          <BulletNote
            label="Disadvantages"
            text={formation.disadvantages}
            tone="negative"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FormationsScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  FormationsScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  FormationsScreenHeadingFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  FormationsScreenSwitcherEnclave: {
    marginTop: 18,
  },
  FormationsScreenPitchEnclave: {
    marginTop: 16,
  },

  FormationsScreenNotesEnclave: {
    marginTop: 22,
    gap: 20,
  },
});

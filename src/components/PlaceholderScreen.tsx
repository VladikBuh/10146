import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';

type PlaceholderScreenProps = {
  title: string;
};

export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.PlaceholderScreenFacetChassis, { paddingTop: insets.top }]}
    >
      <Text style={styles.PlaceholderScreenTitleFiligree}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PlaceholderScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlaceholderScreenTitleFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

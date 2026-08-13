import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';

type PlaceholderScreenProps = {
  teideal: string;
};

export function PlaceholderScreen({ teideal }: PlaceholderScreenProps) {
  const imeallacha = useSafeAreaInsets();

  return (
    <View
      style={[styles.PlaceholderScreenFramhClud, { paddingTop: imeallacha.top }]}
    >
      <Text style={styles.PlaceholderScreenTitleTecs}>{teideal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PlaceholderScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlaceholderScreenTitleTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },
});

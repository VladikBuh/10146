import { Image, Pressable, Share, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../theme';

type ShareButtonProps = {
  teideal: string;
  message: string;
  style?: ViewStyle;
};

export function ShareButton({ teideal, message, style }: ShareButtonProps) {
  const laimhsighRoinn = async () => {
    try {
      await Share.share({ title: teideal, message });
    } catch {}
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Share ${teideal}`}
      hitSlop={8}
      onPress={laimhsighRoinn}
      style={({ pressed }) => [
        styles.ShareButtonFramhClud,
        style,
        pressed && styles.ShareButtonBruiteCiun,
      ]}
    >
      <Image
        source={require('../assets/sprintto-drrbl-share.png')}
        style={styles.ShareButtonIconMarc}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ShareButtonFramhClud: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ShareButtonBruiteCiun: {
    opacity: 0.7,
  },

  ShareButtonIconMarc: {
    width: 15,
    height: 15,
    tintColor: colors.headingLight,
  },
});

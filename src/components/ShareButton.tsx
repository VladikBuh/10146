import { Image, Pressable, Share, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../theme';

type ShareButtonProps = {
  title: string;
  message: string;
  style?: ViewStyle;
};

export function ShareButton({ title, message, style }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      await Share.share({ title, message });
    } catch {}
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Share ${title}`}
      hitSlop={8}
      onPress={handleShare}
      style={({ pressed }) => [
        styles.ShareButtonFacetChassis,
        style,
        pressed && styles.ShareButtonPressedDim,
      ]}
    >
      <Image
        source={require('../assets/guide-trainer-share.png')}
        style={styles.ShareButtonIconSigil}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ShareButtonFacetChassis: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.cardMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ShareButtonPressedDim: {
    opacity: 0.7,
  },

  ShareButtonIconSigil: {
    width: 15,
    height: 15,
    tintColor: colors.headingLight,
  },
});

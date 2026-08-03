import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type BulletNoteProps = {
  label: string;
  text: string;
  tone: 'positive' | 'negative';
};

export function BulletNote({ label, text, tone }: BulletNoteProps) {
  return (
    <View>
      <Text style={styles.BulletNoteLabelFiligree}>{label}</Text>
      <View style={styles.BulletNoteBodyLintel}>
        <Text
          style={[
            styles.BulletNoteDotFiligree,
            tone === 'negative' && styles.BulletNoteDotFiligreeNegative,
          ]}
        >
          •
        </Text>
        <Text style={styles.BulletNoteTextFiligree}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BulletNoteLabelFiligree: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '700',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  BulletNoteBodyLintel: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },

  BulletNoteDotFiligree: {
    width: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.accent,
  },
  BulletNoteDotFiligreeNegative: {
    color: colors.textFaint,
  },

  BulletNoteTextFiligree: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20.3,
    color: colors.textMuted,
  },
});

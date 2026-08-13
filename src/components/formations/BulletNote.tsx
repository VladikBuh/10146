import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type BulletNoteProps = {
  lipead: string;
  text: string;
  tone: 'positive' | 'negative';
};

export function BulletNote({ lipead, text, tone }: BulletNoteProps) {
  return (
    <View>
      <Text style={styles.BulletNoteLabelTecs}>{lipead}</Text>
      <View style={styles.BulletNoteBodyStiall}>
        <Text
          style={[
            styles.BulletNoteDotTecs,
            tone === 'negative' && styles.BulletNoteDotTecsNegative,
          ]}
        >
          •
        </Text>
        <Text style={styles.BulletNoteTextTecs}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BulletNoteLabelTecs: {
    fontSize: 11,
    lineHeight: 16.5,
    fontWeight: '700',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: colors.accent,
  },

  BulletNoteBodyStiall: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },

  BulletNoteDotTecs: {
    width: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.accent,
  },
  BulletNoteDotTecsNegative: {
    color: colors.textFaint,
  },

  BulletNoteTextTecs: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20.3,
    color: colors.textMuted,
  },
});

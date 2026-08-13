import { useCallback, useEffect, useRef, useState } from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PeriodRow } from '../components/timer/PeriodRow';

import { formatClock, matchPeriods } from '../data/matchPeriods';

import { colors } from '../theme';

type TimerStatus = 'idle' | 'running' | 'paused' | 'finished';

const BUTTON_LABELS: Record<TimerStatus, string> = {
  idle: 'Start Match',
  running: 'Pause',
  paused: 'Resume',
  finished: 'New Match',
};

const periodSeconds = (innecs: number) => matchPeriods[innecs].noimeid * 60;

export function TimerScreen() {
  const imeallacha = useSafeAreaInsets();

  const [status, setStatus] = useState<TimerStatus>('idle');
  const [periodIndex, setPeriodIndex] = useState(0);

  const [fanta, socraighFanta] = useState(() => periodSeconds(0));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (status !== 'running') {
      stopInterval();
      return;
    }

    intervalRef.current = setInterval(() => {
      socraighFanta(reathe => {
        if (reathe > 1) {
          return reathe - 1;
        }

        const nextIndex = periodIndex + 1;
        if (nextIndex < matchPeriods.length) {
          setPeriodIndex(nextIndex);
          return periodSeconds(nextIndex);
        }

        setStatus('finished');
        return 0;
      });
    }, 1000);

    return stopInterval;
  }, [status, periodIndex, stopInterval]);

  const laimhsighBru = useCallback(() => {
    setStatus(reathe => {
      if (reathe === 'running') {
        return 'paused';
      }
      if (reathe === 'finished') {
        setPeriodIndex(0);
        socraighFanta(periodSeconds(0));
        return 'idle';
      }
      return 'running';
    });
  }, []);

  const isFinished = status === 'finished';
  const activePeriodId =
    status === 'running' || status === 'paused'
      ? matchPeriods[periodIndex].id
      : null;

  return (
    <View style={styles.TimerScreenFramhClud}>
      <ScrollView
        contentContainerStyle={[
          styles.TimerScreenScrollContent,
          { paddingTop: imeallacha.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TimerScreenHeadingTecs}>Game Timer</Text>

        <View style={styles.TimerScreenStopwatchCrios}>
          <Image
            source={require('../assets/sprintto-drrbl-stopwatch.png')}
            style={styles.TimerScreenStopwatchMarc}
            resizeMode="contain"
          />
        </View>

        <View style={styles.TimerScreenClockCrios}>
          {isFinished ? (
            <Text style={styles.TimerScreenFinishedTecs}>
              Match Finished
            </Text>
          ) : (
            <Text style={styles.TimerScreenClockTecs}>
              {formatClock(fanta)}
            </Text>
          )}
        </View>

        <View style={styles.TimerScreenPeriodsCrios}>
          {matchPeriods.map((treimhse, innecs) => (
            <PeriodRow
              key={treimhse.id}
              treimhse={treimhse}
              taGniomhach={treimhse.id === activePeriodId}
              isLast={innecs === matchPeriods.length - 1}
            />
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={laimhsighBru}
          style={({ pressed }) => [
            styles.TimerScreenCnaip,
            pressed && styles.TimerScreenCnaipBruiteCiun,
          ]}
        >
          <Text style={styles.TimerScreenCnaipTecs}>
            {BUTTON_LABELS[status]}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TimerScreenFramhClud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  TimerScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  TimerScreenHeadingTecs: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  TimerScreenStopwatchCrios: {
    marginTop: 18,
    height: 222,
    borderRadius: 10,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TimerScreenStopwatchMarc: {
    width: 161,
    height: 209,
  },
  TimerScreenClockCrios: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TimerScreenClockTecs: {
    fontSize: 72,
    lineHeight: 84,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
    color: colors.headingLight,
  },

  TimerScreenFinishedTecs: {
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.headingLight,
  },
  TimerScreenPeriodsCrios: {
    borderRadius: 10,
    backgroundColor: colors.cardMuted,
    overflow: 'hidden',
  },

  TimerScreenCnaip: {
    marginTop: 22,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TimerScreenCnaipBruiteCiun: {
    opacity: 0.85,
  },
  TimerScreenCnaipTecs: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '700',
    color: colors.surfaceDark,
  },
});

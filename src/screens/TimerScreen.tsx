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

const periodSeconds = (index: number) => matchPeriods[index].minutes * 60;

export function TimerScreen() {
  const insets = useSafeAreaInsets();

  const [status, setStatus] = useState<TimerStatus>('idle');
  const [periodIndex, setPeriodIndex] = useState(0);

  const [remaining, setRemaining] = useState(() => periodSeconds(0));
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
      setRemaining(current => {
        if (current > 1) {
          return current - 1;
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

  const handlePress = useCallback(() => {
    setStatus(current => {
      if (current === 'running') {
        return 'paused';
      }
      if (current === 'finished') {
        setPeriodIndex(0);
        setRemaining(periodSeconds(0));
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
    <View style={styles.TimerScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.TimerScreenScrollContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.TimerScreenHeadingFiligree}>Game Timer</Text>

        <View style={styles.TimerScreenStopwatchEnclave}>
          <Image
            source={require('../assets/tactical-formations-stopwatch.png')}
            style={styles.TimerScreenStopwatchSigil}
            resizeMode="contain"
          />
        </View>

        <View style={styles.TimerScreenClockEnclave}>
          {isFinished ? (
            <Text style={styles.TimerScreenFinishedFiligree}>
              Match Finished
            </Text>
          ) : (
            <Text style={styles.TimerScreenClockFiligree}>
              {formatClock(remaining)}
            </Text>
          )}
        </View>

        <View style={styles.TimerScreenPeriodsEnclave}>
          {matchPeriods.map((period, index) => (
            <PeriodRow
              key={period.id}
              period={period}
              isActive={period.id === activePeriodId}
              isLast={index === matchPeriods.length - 1}
            />
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handlePress}
          style={({ pressed }) => [
            styles.TimerScreenPortico,
            pressed && styles.TimerScreenPorticoPressedDim,
          ]}
        >
          <Text style={styles.TimerScreenPorticoFiligree}>
            {BUTTON_LABELS[status]}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TimerScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  TimerScreenScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  TimerScreenHeadingFiligree: {
    fontSize: 22,
    lineHeight: 26.4,
    fontWeight: '700',
    color: colors.headingLight,
  },

  TimerScreenStopwatchEnclave: {
    marginTop: 18,
    height: 222,
    borderRadius: 10,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TimerScreenStopwatchSigil: {
    width: 161,
    height: 209,
  },
  TimerScreenClockEnclave: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TimerScreenClockFiligree: {
    fontSize: 72,
    lineHeight: 84,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
    color: colors.headingLight,
  },

  TimerScreenFinishedFiligree: {
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.headingLight,
  },
  TimerScreenPeriodsEnclave: {
    borderRadius: 10,
    backgroundColor: colors.cardMuted,
    overflow: 'hidden',
  },

  TimerScreenPortico: {
    marginTop: 22,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TimerScreenPorticoPressedDim: {
    opacity: 0.85,
  },
  TimerScreenPorticoFiligree: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '700',
    color: colors.surfaceDark,
  },
});

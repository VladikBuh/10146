import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DrillDetailScreen } from '../screens/DrillDetailScreen';
import { DrillsScreen } from '../screens/DrillsScreen';
import type { DrillsStackParamList } from './types';

const Stack = createNativeStackNavigator<DrillsStackParamList>();

export function DrillsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrillsList" component={DrillsScreen} />
      <Stack.Screen name="DrillDetail" component={DrillDetailScreen} />
    </Stack.Navigator>
  );
}

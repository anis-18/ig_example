import { createStackNavigator } from '@react-navigation/stack';
import { InstaGrid } from './insta-grid';
import { AllPosts } from './all-posts';
const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="insta-grid" component={InstaGrid} />
      <Stack.Screen name="all-posts" component={AllPosts} />
    </Stack.Navigator>
  );
}

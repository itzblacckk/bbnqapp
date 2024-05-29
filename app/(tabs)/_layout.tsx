import { Tabs } from 'expo-router';
import React from 'react';

import AnimatedTabBarIcon from '@/components/AnimatedTabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({  }) => (
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={'#5de65d'} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabBarIcon name={focused ? 'people-sharp' : 'people-outline'} color={'#5de65d'} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

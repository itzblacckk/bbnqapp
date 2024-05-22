import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle:{
          height: 60,
          borderRadius: 20,
          margin: 10,
          shadowOffset: { width: 0, height: 5 },
          shadowColor: '#000',
          shadowRadius: 10,
          shadowOpacity: 30,
        } 
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={'#5de65d'} />
            <View style={ focused ? { backgroundColor: 'red', width: 50, height: 50, borderRadius: 100, position: 'relative', top: -25, display: 'flex', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' } : { backgroundColor: 'red', width: 50, height: 50, borderRadius: 100, display: 'flex', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <TabBarIcon name={'home'} color={'#5de65d'} size={35} style={{ marginBottom: 5 }}  />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={'#5de65d'} />
          ),
        }}
      />
            <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'people-sharp' : 'people-outline' } color={'#5de65d'} />
          ),
        }}
      />
    </Tabs>
  );
}

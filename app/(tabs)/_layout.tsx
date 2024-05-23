import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import AnimatedNav from '@/components/navigation/NavbarAnimated';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import AnimatedNavOne from '@/components/navigation/NavAniOne';
import AnimatedNavTwo from '@/components/navigation/NavAniTwo';

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
          // margin: 10,
          // shadowOffset: { width: 0, height: 5 },
          // shadowColor: '#000',
          // shadowRadius: 10,
          // shadowOpacity: 30,
          backgroundColor: '#00215e', 
          // '#4171ee',
        } 
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            focused ? <AnimatedNav focused={true} name={'home'} /> : <AnimatedNav focused={false} name={'home-outline'} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            focused ? <AnimatedNavOne focused={true} name={'handshake-o'} /> : <AnimatedNavOne focused={false} name={'handshake-o'} />
          ),
        }}
      />
            <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            focused ? <AnimatedNavTwo focused={true} name={'account'} /> : <AnimatedNavTwo focused={false} name={'account-outline'} />
          ),
        }}
      />
    </Tabs>
  );
}

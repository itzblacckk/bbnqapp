// AnimatedTabBarIcon.tsx
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

interface AnimatedTabBarIconProps {
  name: string;
  focused: boolean;
  color: string;
}

const AnimatedTabBarIcon: React.FC<AnimatedTabBarIconProps> = ({ name, focused, color }) => {
  const bounce = useSharedValue(1);

  useEffect(() => {
    bounce.value = withTiming(focused ? 1.2 : 1, {
      duration: 300,
      easing: Easing.bounce,
    });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bounce.value }],
  }));

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Svg height="24" width="24" viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2.5" />
      </Svg>
      <Animated.View style={animatedStyle}>
        <TabBarIcon name={name} color={color} />
      </Animated.View>
    </View>
  );
};

export default AnimatedTabBarIcon;

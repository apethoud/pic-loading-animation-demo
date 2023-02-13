import { useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function ImagePlaceholder() {
  const placeholderOpacity = useSharedValue(0.5);

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return { opacity: placeholderOpacity.value }
  });

  function animatePlaceholder() {
    placeholderOpacity.value = withRepeat(withTiming(1, { duration: 750 }), -1, true);
  }

  useEffect(() => {
    animatePlaceholder();
  }, [])

  return (
    <Animated.View 
      style={[ styles.imagePlaceholder, animatedPlaceholderStyle ]} 
    />
  )
}

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#f9d3dc"
  }
});